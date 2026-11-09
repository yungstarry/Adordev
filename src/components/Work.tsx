import { createElement, useEffect, useMemo, useState } from "react";
import { videos } from "../data/videos";
import type { Video } from "../data/videos";
import "./Work.css";

type Embed =
  | { kind: "iframe"; src: string; vertical: boolean; thumb: string | null }
  | {
      kind: "wistia";
      mediaId: string;
      aspect: number;
      vertical: boolean;
      thumb: string | null;
    }
  | { kind: "video"; src: string; vertical: boolean; thumb: string | null };

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
  preview,
  onError,
}: {
  mediaId: string;
  aspect: number;
  preview: boolean;
  onError: () => void;
}) => {
  useEffect(() => {
    let active = true;

    Promise.all([
      loadWistiaScript("https://fast.wistia.com/player.js"),
      loadWistiaScript(`https://fast.wistia.com/embed/${mediaId}.js`, "module"),
    ])
      .then(() => customElements.whenDefined("wistia-player"))
      .catch(() => {
        if (active) onError();
      });

    return () => {
      active = false;
    };
  }, [mediaId, onError]);

  const className = `wk-wistia-${mediaId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <>
      <style>{`
        .${className}:not(:defined) {
          background: center / cover no-repeat url("https://fast.wistia.com/embed/medias/${encodeURIComponent(mediaId)}/swatch");
          display: block;
        }
      `}</style>
      {createElement("wistia-player", {
        className,
        "media-id": mediaId,
        aspect: String(aspect),
        autoplay: true,
        muted: preview,
        playsinline: true,
      })}
    </>
  );
};

const getEmbed = (
  video: Video,
  autoplay: boolean,
  muted = autoplay,
): Embed => {
  const { url, wistiaEmbedCode, wistiaMediaId, wistiaAspect } = video;
  const wistiaId =
    wistiaEmbedCode
      ?.match(
        /(?:fast\.)?wistia\.com\/embed\/(?:([a-zA-Z0-9]+)\.js|iframe\/([a-zA-Z0-9]+))/,
      )
      ?.slice(1)
      .find(Boolean) ??
    wistiaEmbedCode?.match(
      /<wistia-player\b[^>]*\bmedia-id=["']([a-zA-Z0-9]+)["']/i,
    )?.[1] ??
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
      src: `https://fast.wistia.net/embed/iframe/${wistiaUrl[1]}?autoPlay=${autoplay}&muted=${muted}&seo=false`,
      vertical: false,
      thumb: null,
    };
  }

  const autoplayParam = autoplay ? "1" : "0";
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  const ig = url.match(/instagram\.com\/(?:p|reel|reels)\/([a-zA-Z0-9_-]+)/);
  const tt = url.match(/tiktok\.com\/(?:@[\w.-]+\/video\/|v\/)(\d+)/);

  if (yt) {
    return {
      kind: "iframe",
      src: `https://www.youtube.com/embed/${yt[1]}?autoplay=${autoplayParam}&mute=${muted ? 1 : 0}&playsinline=1&rel=0&modestbranding=1`,
      vertical: url.includes("/shorts/"),
      thumb: `https://img.youtube.com/vi/${yt[1]}/mqdefault.jpg`,
    };
  }
  if (vimeo) {
    return {
      kind: "iframe",
      src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=${autoplayParam}&muted=${muted}&playsinline=1&title=0&byline=0&portrait=0`,
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

const CURATED = ["Editor's Favorite", "Favorite"];
const PROJECT_TYPES = [
  "Short-Form / Reels",
  "Long-Form / YouTube",
  "Intro Edit (Vlog/Podcast)",
];
const PROJECTS_PER_PAGE = 12;

const Work = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<Video | null>(null);
  const [failedPreviews, setFailedPreviews] = useState<string[]>([]);

  const types = useMemo(() => ["All", ...PROJECT_TYPES], []);
  const tags = useMemo(() => ["All", ...CURATED], []);
  const filtered = useMemo(
    () =>
      videos.filter(
        (video) =>
          (typeFilter === "All" || video.type.includes(typeFilter)) &&
          (tagFilter === "All" || video.tags.includes(tagFilter)),
      ),
    [typeFilter, tagFilter],
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / PROJECTS_PER_PAGE));
  const activePage = Math.min(currentPage, pageCount);
  const visibleProjects = filtered.slice(
    (activePage - 1) * PROJECTS_PER_PAGE,
    activePage * PROJECTS_PER_PAGE,
  );

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const setPreviewFailed = (title: string) => {
    setFailedPreviews((failed) =>
      failed.includes(title) ? failed : [...failed, title],
    );
  };

  const renderPlayer = (video: Video, preview: boolean) => {
    const embed = getEmbed(video, true, preview);

    if (embed.kind === "wistia") {
      return (
        <WistiaPlayer
          key={embed.mediaId}
          mediaId={embed.mediaId}
          aspect={embed.aspect}
          preview={preview}
          onError={() => setPreviewFailed(video.title)}
        />
      );
    }
    if (embed.kind === "iframe") {
      return (
        <iframe
          key={embed.src}
          src={embed.src}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen={!preview}
          loading={preview ? "eager" : "lazy"}
          tabIndex={preview ? -1 : undefined}
        />
      );
    }
    return (
      <video
        key={embed.src}
        src={embed.src}
        autoPlay
        muted={preview}
        loop={preview}
        controls={!preview}
        playsInline
        onError={() => setPreviewFailed(video.title)}
      />
    );
  };

  const renderFilters = (
    label: string,
    options: string[],
    value: string,
    onChange: (option: string) => void,
  ) => (
    <div className="wk-filter">
      <span className="wk-filter-label">{label}</span>
      <div className="wk-chips" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option}
            className={`wk-chip ${value === option ? "is-active" : ""}`}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(option)}
          >
            {option}
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
            A collection of stories, edits, and moments in motion.
          </p>
        </header>

        <div className="wk-gallery-controls reveal">
          {renderFilters("Type", types, typeFilter, (value) => {
            setTypeFilter(value);
            setCurrentPage(1);
          })}
          {renderFilters("Curated", tags, tagFilter, (value) => {
            setTagFilter(value);
            setCurrentPage(1);
          })}
          <span className="wk-gallery-count">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>

        {filtered.length ? (
          <div className="wk-grid">
            {visibleProjects.map((video, index) => {
              const embed = getEmbed(video, true, true);
              const failed = failedPreviews.includes(video.title);
              return (
                <article
                  className={`wk-card ${embed.vertical ? "is-vertical" : "is-wide"}`}
                  key={`${video.title}-${(activePage - 1) * PROJECTS_PER_PAGE + index}`}
                >
                  <div className="wk-card-media">
                    {failed ? (
                      <div className="wk-preview-error">
                        <span>Preview unavailable</span>
                      </div>
                    ) : (
                      renderPlayer(video, true)
                    )}
                    <button
                      type="button"
                      className="wk-card-open"
                      aria-label={`Play ${video.title}`}
                      onClick={() => setSelected(video)}
                    >
                      <span className="wk-play-icon" aria-hidden="true">
                        <i className="fa-solid fa-play" />
                      </span>
                      <span className="wk-card-hint">Watch full video</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="wk-empty">
            <p>No projects match these filters.</p>
            <button
              type="button"
              className="wk-chip is-active"
              onClick={() => {
                setTypeFilter("All");
                setTagFilter("All");
                setCurrentPage(1);
              }}
            >
              Show all projects
            </button>
          </div>
        )}

        {pageCount > 1 && (
          <nav className="wk-pagination" aria-label="Project pages">
            <span className="wk-pagination-summary">
              Showing {(activePage - 1) * PROJECTS_PER_PAGE + 1}–
              {Math.min(activePage * PROJECTS_PER_PAGE, filtered.length)} of{" "}
              {filtered.length}
            </span>
            <div className="wk-pagination-controls">
              <button
                type="button"
                className="wk-page-button"
                onClick={() => setCurrentPage(activePage - 1)}
                disabled={activePage === 1}
                aria-label="Previous page"
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    className={`wk-page-button ${activePage === page ? "is-active" : ""}`}
                    onClick={() => setCurrentPage(page)}
                    aria-label={`Page ${page}`}
                    aria-current={activePage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                type="button"
                className="wk-page-button"
                onClick={() => setCurrentPage(activePage + 1)}
                disabled={activePage === pageCount}
                aria-label="Next page"
              >
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </nav>
        )}
      </div>

      {selected && (
        <div
          className="wk-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section
            className="wk-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={`Playing ${selected.title}`}
          >
            <button
              type="button"
              className="wk-modal-close"
              aria-label="Close video"
              onClick={() => setSelected(null)}
            >
              <i className="fa-solid fa-xmark" />
            </button>
            <div
              className={`wk-modal-player ${getEmbed(selected, true, false).vertical ? "is-vertical" : ""}`}
            >
              {renderPlayer(selected, false)}
            </div>
            <div className="wk-modal-caption">
              <h3>{selected.title}</h3>
              <p>{selected.type.join(" · ")}</p>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default Work;
