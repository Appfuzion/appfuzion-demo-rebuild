
import React from 'react';
import { VideoData } from '@/lib/constants';
import { Button } from '@/components/ui/button';

interface FeaturedVideoProps {
  video: VideoData;
  onPlay: () => void;
}

const FeaturedVideo: React.FC<FeaturedVideoProps> = ({ video, onPlay }) => {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-md">
      <img 
        src={video.thumbnail} 
        alt={video.title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
        <div className="flex items-start">
          <div className="mr-4">
            <img 
              src="/lovable-uploads/55cea940-1431-4114-a5ad-851d47e1ffcd.png" 
              alt="Appfuzion Demo Logo" 
              className="w-16 h-auto object-contain"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-xl md:text-3xl font-bold text-white mb-2">{video.title}</h1>
            <p className="text-sm md:text-base text-gray-300 mb-4">{video.channel}</p>
            <div className="flex items-center text-sm text-gray-400 mb-6">
              <span>{video.views} views</span>
              <span className="mx-2">•</span>
              <span>{video.duration}</span>
            </div>
            <Button 
              onClick={onPlay}
              className="bg-appfuzion-orange hover:bg-appfuzion-orange/90 text-white flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>
              </svg>
              Play Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
