import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  return <div>{props.song && props.song.title}</div>;
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
