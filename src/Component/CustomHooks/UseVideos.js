import { useState, useEffect } from "react";
import youtube from "../../api/youtube";
const UseVideos = (defaultSearch) => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    searchVideoContent(defaultSearch);
  }, [defaultSearch]);
  const searchVideoContent = async (text) => {
    const response = await youtube.get("/search", {
      params: { q: text },
    });
    setVideoList(response.data.items);
  };
  return [videoList, searchVideoContent];
};

export default UseVideos;
