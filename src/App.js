import React, { useEffect, useState } from "react";
import "./App.css";
// api

// component
import SearchBar from "./Component/SearchBar";
import VideoList from "./Component/VideoList";
import VideoDetails from "./Component/VideoDetails";
import UseVideos from "./Component/CustomHooks/UseVideos";

const App = () => {
  const [videoList, searchVideoContent] = UseVideos("flight");
  const [playVideo, setPlayVideo] = useState(null);
  useEffect(() => {
    setPlayVideo(videoList[0]);
  }, [videoList]);

  return (
    <div className="ui container">
      <SearchBar searchVideo={(searchText) => searchVideoContent(searchText)} />
      <br />
      <div className="display_content">
        <div className="video">
          <VideoDetails selectedVideo={playVideo} />
        </div>
        <div className="suggestion">
          <VideoList
            playVideo={(playVideo) => setPlayVideo(playVideo)}
            get_videos={videoList}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
// export default class App extends React.Component {
//   state = { searchedVideos: [], onSelectedVideo: null };
//   componentDidMount() {
//     this.searchVideoContent("ship");
//   }
//   searchVideoContent = async (searchitem) => {
// const response = await youtube.get("/search", {
//   params: { q: searchitem },
// });
//     this.setState({ searchedVideos: response.data.items });
//     this.setState({ onSelectedVideo: response.data.items[0] });
//   };
//   playVideo = (video) => {
//     this.setState({ onSelectedVideo: video });
//   };
//   render() {
//     return (
// <div className="ui container">
//   <SearchBar searchVideo={this.searchVideoContent} />
//   <br />
//   <div className="display_content">
//     <div className="video">
//       <VideoDetails selectedVideo={this.state.onSelectedVideo} />
//     </div>
//     <div className="suggestion">
//       <VideoList
//         playVideo={this.playVideo}
//         get_videos={this.state.searchedVideos}
//       />
//     </div>
//   </div>
// </div>
//     );
//   }
// }
