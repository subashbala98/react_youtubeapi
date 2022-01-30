import axios from "axios";

const API_KEY = "AIzaSyB942DmJ8c0YE54RuPu5DL2yHeW4MAQzsc";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: API_KEY,
  },
});
