import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

const GIPHY_API_KEY = 'ocifVJomjanFxiKdReX8ukZsSGcM2DK2';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    }


  }

  search = (query) => {
    giphy({apiKey: GIPHY_API_KEY, https: true })
    .search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
