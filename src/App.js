import React from "react";
import "./App.css";
// api
import youtube from "./api/youtube";
// component
import SearchBar from "./Component/SearchBar";
import VideoList from "./Component/VideoList";
import VideoDetails from "./Component/VideoDetails";

export default class App extends React.Component {
  state = { searchedVideos: [], onSelectedVideo: null };
  componentDidMount() {
    this.searchVideoContent("ship");
  }
  searchVideoContent = async (searchitem) => {
    const response = await youtube.get("/search", {
      params: { q: searchitem },
    });
    this.setState({ searchedVideos: response.data.items });
    this.setState({ onSelectedVideo: response.data.items[0] });
  };
  playVideo = (video) => {
    this.setState({ onSelectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar searchVideo={this.searchVideoContent} />
        <br />
        <div className="display_content">
          <div className="video">
            <VideoDetails selectedVideo={this.state.onSelectedVideo} />
          </div>
          <div className="suggestion">
            <VideoList
              playVideo={this.playVideo}
              get_videos={this.state.searchedVideos}
            />
          </div>
        </div>
      </div>
    );
  }
}
