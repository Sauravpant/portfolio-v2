import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saurav Pant",
    short_name: "Saurav Pant",
    description:
      "Software Developer specializing in Full-Stack Systems, Backend Engineering, Distributed Systems, and AI/ML Solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4338ca",
    icons: [
      {
        src: "/profile.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/profile.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
