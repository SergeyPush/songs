import React, { Component } from "react";

import SongList from "./components/songList";
import SongDetail from "./components/SongDetail";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="ui container grid ">
        <div className="ui row">
          <div className="column eight wide user-container">
            <SongList />
          </div>
          <div className="column eight wide user-container">
            <SongDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
