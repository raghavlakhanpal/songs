import React from "react";

//importing connect property from redux
import { connect } from "react-redux";

//importing actionCreator
import { selectSong } from "../actions";

//Creating the component
class SongsList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={(event) => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {

  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongsList);
