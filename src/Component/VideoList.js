import React from "react";
import VideoItems from "./VideoItems";
const VideoList = ({ get_videos, playVideo }) => {
  const display_videos = get_videos.map((video) => {
    return (
      <VideoItems
        playVideo={playVideo}
        key={video.snippet.title}
        videos={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{display_videos}</div>;
};

export default VideoList;
