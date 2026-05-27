export interface Video {
  title: string;
  url: string;
  style: string[];
  type: string;
  tags: string[];
}



// style: ["Cinematic", "Storytelling", "Fast-paced", "Minimalist", "Documentary", "Motion Graphics", "Artistic"],
//     type: ["Brand", "YouTube", "Short-form"],
//     tags: ["Editor's Favorite", "Most Viewed", "Favorite"],

export const videos: Video[] = [
  {
    title: "Project 1: High-Energy Short-Form Reel",
    url: "https://vt.tiktok.com/ZSxVYpMd8/",
    style: [
      "Cinematic",
      "Storytelling",
      "Fast-paced",
      "Minimalist",
      "Documentary",
      "Motion Graphics",
      "Artistic",
    ],
    type: "Short-form",
    tags: ["Editor's Favorite", "Most Viewed"],
  },
  {
    title: "Project 2: High-Energy Short-Form Reel",
    url: "https://vt.tiktok.com/ZSxVYQu7s/",
    style: [
      "Cinematic",
      "Storytelling",
      "Fast-paced",
      "Minimalist",
      "Documentary",
      "Motion Graphics",
      "Artistic",
    ],
    type: "YouTube",
    tags: ["Editor's Favorite", "Most Viewed"],
  },
];
