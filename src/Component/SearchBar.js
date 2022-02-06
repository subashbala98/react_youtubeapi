import React, { useState } from "react";
const SearchBar = ({ searchVideo }) => {
  const [text, setText] = useState("");
  const onSubmitForm = (e) => {
    e.preventDefault();
    searchVideo(text);
  };
  return (
    <div className="ui segment ui_alignment">
      <form onSubmit={onSubmitForm} className="ui form">
        <label>Search Videos: </label>
        <div className="ui fluid icon input">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <i className="search icon"></i>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
