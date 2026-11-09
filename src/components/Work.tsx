import {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { videos } from "../data/videos";
import type { Video } from "../data/videos";
import "./Work.css";

type Embed =
  | {
      kind: "iframe" | "video";
      src: string;
      vertical: boolean;
      thumb: string | null;
    }
  | {
      kind: "wistia";
      mediaId: string;
      aspect: number;
      vertical: boolean;
      thumb: string | null;
    };

const wistiaScriptLoads = new Map<string, Promise<void>>();

const loadWistiaScript = (src: string, type?: string) => {
  const cachedLoad = wistiaScriptLoads.get(src);
  if (cachedLoad) return cachedLoad;

  const load = new Promise<void>((resolve, reject) => {
    const existing = Array.from(document.scripts).find(
      (script) => script.src === src,
    );
    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }

    const script = existing ?? document.createElement("script");
    const onLoad = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    const onError = () =>
      reject(new Error(`Unable to load Wistia script: ${src}`));

    script.addEventListener("load", onLoad, { once: true });
    script.addEventListener("error", onError, { once: true });

    if (!existing) {
      script.src = src;
      script.async = true;
      if (type) script.type = type;
      document.head.appendChild(script);
    }
  });

  wistiaScriptLoads.set(src, load);
  void load.catch(() => wistiaScriptLoads.delete(src));
  return load;
};

const WistiaPlayer = ({
  mediaId,
  aspect,
  onReady,
  onError,
}: {
  mediaId: string;
  aspect: number;
  onReady: () => void;
  onError: (error: Error) => void;
}) => {
  useEffect(() => {
    let active = true;

    Promise.all([
      loadWistiaScript("https://fast.wistia.com/player.js"),
      loadWistiaScript(`https://fast.wistia.com/embed/${mediaId}.js`, "module"),
    ])
      .then(() => customElements.whenDefined("wistia-player"))
      .then(() => {
        if (active) onReady();
      })
      .catch((error: unknown) => {
        if (active) {
          onError(
            error instanceof Error
              ? error
              : new Error("Unable to load the Wistia player."),
          );
        }
      });

    return () => {
      active = false;
    };
  }, [mediaId, onError, onReady]);

  const className = `wk-wistia-${mediaId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <>
      <style>{`
        .${className}:not(:defined) {
          background: center / contain no-repeat url("https://fast.wistia.com/embed/medias/${encodeURIComponent(mediaId)}/swatch");
          display: block;
          filter: blur(5px);
        }
      `}</style>
      {createElement("wistia-player", {
        className,
        "media-id": mediaId,
        aspect: String(aspect),
        autoplay: true,
      })}
    </>
  );
};

const getEmbed = (video: Video, autoplay: boolean): Embed => {
  const { url, wistiaEmbedCode, wistiaMediaId, wistiaAspect } = video;
  const wistiaId =
    wistiaEmbedCode?.match(
      /(?:fast\.)?wistia\.com\/embed\/(?:([a-zA-Z0-9]+)\.js|iframe\/([a-zA-Z0-9]+))/,
    )?.slice(1)
      .find(Boolean) ??
    wistiaEmbedCode?.match(/<wistia-player\b[^>]*\bmedia-id=["']([a-zA-Z0-9]+)["']/i)?.[1] ??
    wistiaMediaId;

  if (wistiaId) {
    const aspectFromCode = wistiaEmbedCode?.match(
      /<wistia-player\b[^>]*\baspect=["']([0-9.]+)["']/i,
    )?.[1];
    const aspect = wistiaAspect ?? (Number(aspectFromCode) || 16 / 9);

    return {
      kind: "wistia",
      mediaId: wistiaId,
      aspect,
      vertical: aspect < 1,
      thumb: null,
    };
  }

  const wistiaUrl = url.match(
    /(?:fast\.)?wistia\.com\/(?:embed\/iframe\/|medias\/)([a-zA-Z0-9]+)/,
  );
  if (wistiaUrl) {
    return {
      kind: "iframe",
      src: `https://fast.wistia.net/embed/iframe/${wistiaUrl[1]}?autoPlay=${autoplay}&muted=true&seo=false`,
      vertical: false,
      thumb: null,
    };
  }

  const ap = autoplay ? 1 : 0;
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  const ig = url.match(/instagram\.com\/(?:p|reel|reels)\/([a-zA-Z0-9_-]+)/);
  const tt = url.match(/tiktok\.com\/(?:@[\w.-]+\/video\/|v\/)(\d+)/);

  if (yt) {
    return {
      kind: "iframe",
      src: `https://www.youtube.com/embed/${yt[1]}?autoplay=${ap}&rel=0&modestbranding=1&playsinline=1`,
      vertical: url.includes("/shorts/"),
      thumb: `https://img.youtube.com/vi/${yt[1]}/mqdefault.jpg`,
    };
  }
  if (vimeo) {
    return {
      kind: "iframe",
      src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=${ap}&title=0&byline=0&portrait=0`,
      vertical: false,
      thumb: null,
    };
  }
  if (ig) {
    return {
      kind: "iframe",
      src: `https://www.instagram.com/reel/${ig[1]}/embed/`,
      vertical: true,
      thumb: null,
    };
  }
  if (tt) {
    return {
      kind: "iframe",
      src: `https://www.tiktok.com/embed/v2/${tt[1]}`,
      vertical: true,
      thumb: null,
    };
  }
  return { kind: "video", src: url, vertical: false, thumb: null };
};

const pad = (n: number) => String(n).padStart(2, "0");

const CURATED = ["Editor's Favorite", "Favorite"];

const Work = () => {
  const [selected, setSelected] = useState<Video>(videos[0]);
  const [interacted, setInteracted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playerError, setPlayerError] = useState<string | null>(null);

  const [typeFilter, setTypeFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState("All");

  useEffect(() => {
    if (!isLoading) return;

    const timeout = window.setTimeout(() => {
      setIsLoading(false);
      setPlayerError(
        "The embedded video did not finish loading. Check that the post is public and embedding is allowed.",
      );
    }, 10000);

    return () => window.clearTimeout(timeout);
  }, [isLoading, selected]);

  const types = useMemo(
    () => ["All", ...Array.from(new Set(videos.map((v) => v.type)))],
    [],
  );
  const tags = useMemo(() => ["All", ...CURATED], []);

  const filtered = useMemo(
    () =>
      videos.filter(
        (v) =>
          (typeFilter === "All" || v.type === typeFilter) &&
          (tagFilter === "All" || v.tags.includes(tagFilter)),
      ),
    [typeFilter, tagFilter],
  );

  const hasFilters = typeFilter !== "All" || tagFilter !== "All";

  const embed = useMemo(
    () => getEmbed(selected, interacted),
    [selected, interacted],
  );

  const currentIndex = filtered.findIndex((v) => v.title === selected.title);
  const position = currentIndex === -1 ? 0 : currentIndex + 1;

  const select = (video: Video) => {
    if (video.title === selected.title) return;
    setSelected(video);
    setInteracted(true);
    setIsLoading(true);
    setPlayerError(null);
  };

  const step = (dir: 1 | -1) => {
    if (!filtered.length) return;
    const base = currentIndex === -1 ? (dir === 1 ? -1 : 0) : currentIndex;
    const next = (base + dir + filtered.length) % filtered.length;
    select(filtered[next]);
  };

  const resetFilters = () => {
    setTypeFilter("All");
    setTagFilter("All");
  };

  const handleWistiaReady = useCallback(() => setIsLoading(false), []);
  const handleWistiaError = useCallback((error: Error) => {
    console.error(error);
    setIsLoading(false);
    setPlayerError("The Wistia player could not be loaded. Please try again.");
  }, []);

  const renderChips = (
    label: string,
    options: string[],
    value: string,
    onChange: (v: string) => void,
  ) => (
    <div className="wk-filter">
      <span className="wk-filter-label">{label}</span>
      <div className="wk-chips" role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={o}
            type="button"
            className={`wk-chip ${value === o ? "is-active" : ""}`}
            aria-pressed={value === o}
            onClick={() => onChange(o)}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section id="work" className="wk">
      <div className="container">
        <header className="wk-header">
          <p className="label reveal">★ Browse my work</p>
          <h2 className="wk-title reveal">
            Watch my editing style <em>come alive</em>
          </h2>
          <p className="wk-subtitle reveal">
            Pick a project and press play. Raw footage in, cinematic story out.
          </p>
        </header>

        <div className="wk-room reveal">
          {/* ───────── STAGE ───────── */}
          <div className="wk-stage">
            <div className={`wk-screen ${embed.vertical ? "is-vertical" : ""}`}>
              <div className="wk-glow" aria-hidden="true" />
              <div className="wk-frame">
                {isLoading && (
                  <div className="wk-loading" aria-live="polite">
                    <div className="wk-spinner" />
                    <span>Loading reel</span>
                  </div>
                )}

                {embed.kind === "wistia" ? (
                  <WistiaPlayer
                    key={embed.mediaId}
                    mediaId={embed.mediaId}
                    aspect={embed.aspect}
                    onReady={handleWistiaReady}
                    onError={handleWistiaError}
                  />
                ) : embed.kind === "iframe" ? (
                  <iframe
                    key={embed.src}
                    src={embed.src}
                    title={selected.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    onLoad={() => setIsLoading(false)}
                  />
                ) : (
                  <video
                    key={embed.src}
                    src={embed.src}
                    controls
                    playsInline
                    autoPlay={interacted}
                    onLoadedData={() => setIsLoading(false)}
                  />
                )}

                {playerError && (
                  <div className="wk-player-error" role="alert">
                    <p>{playerError}</p>
                    <a href={selected.url} target="_blank" rel="noreferrer">
                      Open the original video
                    </a>
                  </div>
                )}
                <div className="wk-watermark">✦ Edited by Adordev</div>
              </div>
            </div>

            <div className="wk-now">
              <div className="wk-now-text">
                <span className="wk-now-label">
                  <i className="wk-live" /> Now playing
                </span>
                <h3 className="wk-now-title">{selected.title}</h3>
                <div className="wk-meta">
                  <span className="wk-pill">{selected.type}</span>
                  {selected.tags.map((t) => (
                    <span key={t} className="wk-pill wk-pill--accent">
                      ★ {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="wk-controls">
                <button
                  type="button"
                  className="wk-nav"
                  onClick={() => step(-1)}
                  aria-label="Previous project"
                  disabled={!filtered.length}
                >
                  <i className="fa-solid fa-chevron-left" />
                </button>
                <span className="wk-count">
                  {pad(position)}
                  <em> / {pad(filtered.length)}</em>
                </span>
                <button
                  type="button"
                  className="wk-nav"
                  onClick={() => step(1)}
                  aria-label="Next project"
                  disabled={!filtered.length}
                >
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>

          {/* ───────── RAIL ───────── */}
          <aside className="wk-rail">
            <div className="wk-rail-head">
              <div className="wk-rail-title">
                <span>Projects</span>
                <span className="wk-badge">{filtered.length}</span>
                {hasFilters && (
                  <button
                    type="button"
                    className="wk-reset"
                    onClick={resetFilters}
                  >
                    Clear
                  </button>
                )}
              </div>
              {renderChips("Type", types, typeFilter, setTypeFilter)}
              {renderChips("Curated", tags, tagFilter, setTagFilter)}
            </div>

            <ul className="wk-list">
              {filtered.length === 0 && (
                <li className="wk-empty">
                  <p>No projects match these filters.</p>
                  <button
                    type="button"
                    className="wk-chip is-active"
                    onClick={resetFilters}
                  >
                    Show all projects
                  </button>
                </li>
              )}

              {filtered.map((v, i) => {
                const active = v.title === selected.title;
                const thumb = getEmbed(v, false).thumb;
                return (
                  <li key={v.title}>
                    <button
                      type="button"
                      className={`wk-item ${active ? "is-active" : ""}`}
                      onClick={() => select(v)}
                      aria-current={active ? "true" : undefined}
                    >
                      <span
                        className="wk-thumb"
                        style={
                          thumb
                            ? { backgroundImage: `url(${thumb})` }
                            : undefined
                        }
                      >
                        {!thumb && <b>{pad(i + 1)}</b>}
                        <span className="wk-thumb-overlay">
                          {active ? (
                            <span className="wk-eq" aria-hidden="true">
                              <i />
                              <i />
                              <i />
                            </span>
                          ) : (
                            <i className="fa-solid fa-play" />
                          )}
                        </span>
                      </span>
                      <span className="wk-item-body">
                        <span className="wk-item-title">{v.title}</span>
                        <span className="wk-item-meta">
                          {v.type}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Work;
