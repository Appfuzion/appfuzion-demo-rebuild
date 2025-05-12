
import React, { useRef, useState, useEffect } from 'react';
import { VideoData } from '@/lib/constants';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface VideoPlayerProps {
  video: VideoData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, open, onOpenChange }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  
  // Convert time in seconds to mm:ss format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  // Effect to handle dialog open/close
  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [open]);

  if (!video) return null;

  // For YouTube links, extract the ID and create an embed URL
  const getEmbedUrl = (link: string) => {
    if (link.includes('watch?v=')) {
      const videoId = link.split('watch?v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    // For channel links or other YouTube URLs
    return link;
  };

  const isYouTubeVideo = video.link.includes('youtube.com');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 bg-black border-appfuzion-orange">
        <div className="relative w-full aspect-video">
          {isYouTubeVideo ? (
            <iframe
              src={getEmbedUrl(video.link)}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <video
                ref={videoRef}
                className="w-full h-full video-player"
                src={video.link}
                poster={video.thumbnail}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full"
                    />
                    <span className="text-white text-xs">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button onClick={togglePlay} className="text-white">
                      {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="6" y="4" width="4" height="16"></rect>
                          <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="5 3 19 12 5 21 5 3" fill="white"></polygon>
                        </svg>
                      )}
                    </button>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                      </svg>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-white">{video.title}</h2>
          <p className="text-sm text-gray-400">{video.channel} • {video.views} views</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;
