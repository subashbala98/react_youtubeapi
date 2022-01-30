import React from "react";
export default class SearchBar extends React.Component {
  state = { userSearch: "" };
  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.searchVideo(this.state.userSearch);
  };
  render() {
    return (
      <div className="ui segment ui_alignment">
        <form onSubmit={this.onSubmitForm} className="ui form">
          <label>Search Videos: </label>
          <div className="ui fluid icon input">
            <input
              type="text"
              value={this.state.userSearch}
              onChange={(e) => this.setState({ userSearch: e.target.value })}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
