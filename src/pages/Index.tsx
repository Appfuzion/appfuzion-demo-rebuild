import React, { useState, useEffect } from 'react';
import FeaturedVideo from '@/components/FeaturedVideo';
import VideoGrid from '@/components/VideoGrid';
import VideoPlayer from '@/components/VideoPlayer';
import { generateRandomVideos, featuredVideo, VideoData, thumbnailImages, spotlightVideos } from '@/lib/constants';

const Index = () => {
  const [allVideos, setAllVideos] = useState<VideoData[]>([]);
  const [currentVideo, setCurrentVideo] = useState<VideoData | null>(null);
  const [playerOpen, setPlayerOpen] = useState(false);
  
  // Matrix background effect
  useEffect(() => {
    const matrix = document.querySelector('.matrix-bg');
    if (!matrix) return;
    
    const columns = 40;
    for (let i = 0; i < columns; i++) {
      const column = document.createElement('div');
      column.classList.add('matrix-column');
      
      // Random position
      column.style.left = `${Math.floor(Math.random() * 100)}%`;
      
      // Random animation duration
      const duration = 10 + Math.random() * 20;
      column.style.animationDuration = `${duration}s`;
      
      // Random animation delay
      column.style.animationDelay = `${Math.random() * 20}s`;
      
      matrix.appendChild(column);
    }
  }, []);
  
  // Generate videos on component mount
  useEffect(() => {
    const all = generateRandomVideos(12);
    
    // Find any video with "Face Of The Code" title and replace its thumbnail
    const updatedAll = all.map(video => {
      if (video.title === "Face Of The Code") {
        return {
          ...video,
          thumbnail: "/lovable-uploads/3441f372-e236-4e86-82be-9c237216b8ef.png"
        };
      }
      return video;
    });
    
    setAllVideos(updatedAll);
  }, []);
  
  const handlePlayFeatured = () => {
    setCurrentVideo(featuredVideo);
    setPlayerOpen(true);
  };
  
  const handleVideoClick = (video: VideoData) => {
    setCurrentVideo(video);
    setPlayerOpen(true);
  };

  return (
    <div className="min-h-screen bg-appfuzion-black text-white">
      {/* Matrix background effect */}
      <div className="matrix-bg"></div>
      
      {/* Header */}
      <header className="py-4 px-6 flex items-center justify-between border-b border-appfuzion-orange/30">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/55cea940-1431-4114-a5ad-851d47e1ffcd.png" 
            alt="Appfuzion Demo Logo" 
            className="h-8 w-auto"
          />
          <h1 className="text-xl font-bold text-appfuzion-orange">Appfuzion Demo</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm hover:text-appfuzion-orange">Home</a>
          <a href="#" className="text-sm hover:text-appfuzion-orange">Videos</a>
          <a href="#" className="text-sm hover:text-appfuzion-orange">Library</a>
          <a href="#" className="text-sm hover:text-appfuzion-orange">About</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-4 py-2 bg-appfuzion-orange hover:bg-appfuzion-orange/80 text-white rounded text-sm transition-colors">
            Admin Access
          </button>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container py-6 px-4 md:px-6 max-w-7xl mx-auto">
        <section>
          <FeaturedVideo video={featuredVideo} onPlay={handlePlayFeatured} />
        </section>
        
        <section>
          <VideoGrid 
            videos={spotlightVideos} 
            title="Spotlight Videos" 
            onVideoClick={handleVideoClick}
          />
        </section>
        
        <section>
          <VideoGrid 
            videos={allVideos} 
            title="All Videos" 
            onVideoClick={handleVideoClick}
          />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-6 border-t border-appfuzion-orange/30 mt-12">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <img 
                  src="/lovable-uploads/55cea940-1431-4114-a5ad-851d47e1ffcd.png" 
                  alt="Appfuzion Demo Logo" 
                  className="h-8 w-auto"
                />
                <h2 className="text-lg font-bold text-appfuzion-orange">Appfuzion Demo</h2>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                APPFUZION ALLIANCE NETWORK
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-sm text-gray-400">© 2025 Appfuzion Demo. All rights reserved.</p>
              <button className="px-4 py-2 bg-appfuzion-orange hover:bg-appfuzion-orange/80 text-white rounded text-sm transition-colors mt-2">
                Admin Access
              </button>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Video Player Modal */}
      <VideoPlayer 
        video={currentVideo} 
        open={playerOpen} 
        onOpenChange={setPlayerOpen} 
      />
    </div>
  );
};

export default Index;
