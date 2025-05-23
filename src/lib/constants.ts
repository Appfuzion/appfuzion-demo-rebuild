export interface VideoData {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  views: string;
  duration: string;
  channel: string;
}

export const youtubeLinks = [
  "https://www.youtube.com/@Appfuzionteam",
  "https://www.youtube.com/watch?v=3rAXwxyqzl0",
  "https://www.youtube.com/watch?v=N-f-mnlPKMY",
  "https://www.youtube.com/watch?v=6WShi_o6D_k"
];

export const thumbnailImages = [
  "/lovable-uploads/55cea940-1431-4114-a5ad-851d47e1ffcd.png",
  "/lovable-uploads/485169be-4402-4494-92d4-56b439e9982b.png",
  "/lovable-uploads/fcd260a0-2949-4c1f-96a6-86a6881ef8b2.png",
  "/lovable-uploads/f0ec2dc3-a4fe-4f0b-b4a9-930e77572d64.png",
  "/lovable-uploads/3441f372-e236-4e86-82be-9c237216b8ef.png",
  // Add new uploaded images
  "/lovable-uploads/9eea2333-5135-4b22-bdec-c576092dfefc.png",
  "/lovable-uploads/6f0595e8-4164-4ae6-8c0f-5c8f9a14847f.png",
  "/lovable-uploads/d59521fc-b9dd-4d9a-847a-17e701eef564.png"
];

export const generateRandomVideos = (count: number): VideoData[] => {
  const videos: VideoData[] = [];
  const titles = [
    "Appfuzion Demo - Episode 1",
    "Appfuzion Demo - Episode 2",
    "Appfuzion Demo - Episode 3",
    "Developer Insights",
    "Up On Screen",
    "Tech Overview",
    "Engineering Framework",
    "Face Of The Code",
    "Deal & Analyze",
    "Code Crafting"
  ];
  
  const channels = [
    "Appfuzion Demo",
    "Tech Stream",
    "Code Masters",
    "Dev Team"
  ];
  
  const views = [
    "1.5M", "847K", "538K", "1.2M", "445K", "928K", "723K", "2.1M", "1.8M", "659K"
  ];
  
  const durations = [
    "12:34", "8:47", "15:23", "6:05", "10:18", "9:42", "14:55", "7:29", "11:38", "13:21"
  ];
  
  for (let i = 0; i < count; i++) {
    const randomTitleIndex = Math.floor(Math.random() * titles.length);
    const randomLinkIndex = Math.floor(Math.random() * youtubeLinks.length);
    const randomImageIndex = Math.floor(Math.random() * thumbnailImages.length);
    const randomChannelIndex = Math.floor(Math.random() * channels.length);
    const randomViewsIndex = Math.floor(Math.random() * views.length);
    const randomDurationIndex = Math.floor(Math.random() * durations.length);
    
    videos.push({
      id: `video-${i}`,
      title: titles[randomTitleIndex],
      link: youtubeLinks[randomLinkIndex],
      thumbnail: thumbnailImages[randomImageIndex],
      views: views[randomViewsIndex],
      duration: durations[randomDurationIndex],
      channel: channels[randomChannelIndex]
    });
  }
  
  return videos;
};

// Update the featured video to use the new image
export const featuredVideo: VideoData = {
  id: "featured",
  title: "Appfuzion Demo - Episode 1",
  link: "https://www.youtube.com/watch?v=3rAXwxyqzl0",
  thumbnail: "/lovable-uploads/3441f372-e236-4e86-82be-9c237216b8ef.png", 
  views: "1.5M",
  duration: "15:47",
  channel: "Appfuzion Demo"
};

// Create specific spotlight videos with the new images
export const spotlightVideos: VideoData[] = [
  {
    id: "spotlight-1",
    title: "Appfuzion Demo - Episode 1",
    link: "https://www.youtube.com/watch?v=3rAXwxyqzl0",
    thumbnail: "/lovable-uploads/9eea2333-5135-4b22-bdec-c576092dfefc.png",
    views: "1.5M",
    duration: "12:34",
    channel: "Appfuzion Demo"
  },
  {
    id: "spotlight-2",
    title: "Appfuzion Demo - Episode 2",
    link: "https://www.youtube.com/watch?v=N-f-mnlPKMY",
    thumbnail: "/lovable-uploads/6f0595e8-4164-4ae6-8c0f-5c8f9a14847f.png",
    views: "847K",
    duration: "14:22",
    channel: "Appfuzion Demo"
  },
  {
    id: "spotlight-3",
    title: "Appfuzion Demo - Episode 1",
    link: "https://www.youtube.com/watch?v=6WShi_o6D_k",
    thumbnail: "/lovable-uploads/d59521fc-b9dd-4d9a-847a-17e701eef564.png",
    views: "928K",
    duration: "11:47",
    channel: "Appfuzion Demo"
  },
  {
    id: "spotlight-4",
    title: "Appfuzion Demo - Episode 3",
    link: "https://www.youtube.com/@Appfuzionteam",
    thumbnail: "/lovable-uploads/9eea2333-5135-4b22-bdec-c576092dfefc.png", 
    views: "659K",
    duration: "13:21",
    channel: "Appfuzion Demo"
  }
];
