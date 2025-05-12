
import React from 'react';
import { VideoData } from '@/lib/constants';
import VideoCard from './VideoCard';

interface VideoGridProps {
  videos: VideoData[];
  title: string;
  onVideoClick: (video: VideoData) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, title, onVideoClick }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white uppercase">{title}</h2>
        {title === "All Videos" && (
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-appfuzion-orange">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span className="text-sm text-appfuzion-orange">Filter Videos</span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            onClick={() => onVideoClick(video)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
