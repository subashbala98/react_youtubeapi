import React from "react";
const VideoDetails = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <p>Loading...</p>;
  }
  const get_video_URL = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          title={selectedVideo.snippet.title}
          src={get_video_URL}
        ></iframe>
      </div>

      <div className="ui segment">
        <div className="content">
          <h2 className="header">{selectedVideo.snippet.title}</h2>
          <div className="description">{selectedVideo.snippet.description}</div>
        </div>
      </div>
    </div>
  );
};
export default VideoDetails;
