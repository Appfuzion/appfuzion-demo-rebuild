
import React from 'react';
import { VideoData } from '@/lib/constants';

interface VideoCardProps {
  video: VideoData;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div 
      className="relative overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative bg-black aspect-video overflow-hidden rounded">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="video-duration">{video.duration}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-appfuzion-orange text-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"></polygon>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-2 text-left">
        <h3 className="text-sm font-medium text-white truncate">{video.title}</h3>
        <p className="text-xs text-gray-400 mt-1">{video.channel}</p>
        <p className="text-xs text-gray-500 mt-0.5">{video.views} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
