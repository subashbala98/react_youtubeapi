import React from "react";

const VideoItems = ({ videos, playVideo }) => {
  return (
    <div onClick={() => playVideo(videos)} className="item ui_flex">
      <img
        key={videos.id.videoId}
        src={videos.snippet.thumbnails.medium.url}
        alt={videos.snippet.title}
      />
      <div className="content">
        <h3 className="header">{videos.snippet.title}</h3>
      </div>
    </div>
  );
};

export default VideoItems;
