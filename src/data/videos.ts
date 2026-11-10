export interface Video {
  title: string;
  url: string;
  wistiaEmbedCode?: string;
  /** @deprecated Prefer wistiaEmbedCode; retained for existing entries. */
  wistiaMediaId?: string; // Set to use Wistia's inline player for this project.
  wistiaAspect?: number; // Optional aspect ratio, defaults to 16 / 9.
  type: string[];
  tags: string[];
}

// Add new projects using this shape:
// {
//   title: "Project title",
//   url: "https://video-platform.com/your-video",
//   wistiaEmbedCode: "",
//   type: [     "Short-Form / Reels",     "Long-Form / YouTube",     "Intro Edit (Vlog/Podcast)",   ],
//   tags: ["Editor's Favorite", "Favorite"],
// },
export const videos: Video[] = [
  {
    title: "998: Youtube Travel Vlog Edit",
    url: "",
    wistiaEmbedCode: `<script src="https://fast.wistia.com/player.js" async></script><script src="https://fast.wistia.com/embed/mumyy0gkv7.js" async type="module"></script><style>wistia-player[media-id='mumyy0gkv7']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/mumyy0gkv7/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }</style> <wistia-player media-id="mumyy0gkv7" aspect="1.7777777777777777"></wistia-player>`,
    type: ["Long-Form / YouTube", "Intro Edit (Vlog/Podcast)"],
    tags: ["Editor's Favorite", "Favorite"],
  },
  {
    title: "999: Engaging Instagram Reel",
    url: "",
    wistiaEmbedCode: `<script src="https://fast.wistia.com/player.js" async></script><script src="https://fast.wistia.com/embed/wjaeb7jof6.js" async type="module"></script><style>wistia-player[media-id='wjaeb7jof6']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/wjaeb7jof6/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }</style> <wistia-player media-id="wjaeb7jof6" aspect="0.5625"></wistia-player>`,
    type: ["Short-Form / Reels"],
    tags: ["Editor's Favorite"],
  },

  {
    title: "1000: Real Estate Intro Edit",
    url: "https://fast.wistia.net/embed/iframe/20bh9rjdlv",
    wistiaEmbedCode: `
      <script src="https://fast.wistia.com/player.js" async></script>
      <script src="https://fast.wistia.com/embed/20bh9rjdlv.js" async type="module"></script>
      <style>
        wistia-player[media-id='20bh9rjdlv']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/20bh9rjdlv/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      </style>
      <wistia-player media-id="20bh9rjdlv" aspect="1.7777777777777777"></wistia-player>
    `,
    type: ["Long-Form / YouTube", "Intro Edit (Vlog/Podcast)"],
    tags: ["Editor's Favorite"],
  },
];
