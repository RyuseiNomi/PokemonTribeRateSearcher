import React from 'react';
import './App.css';
import SingleSearch from 'pages/SingleSearch'
import CompareRate from 'pages/CompareRate'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    //const pokemon = this.state;
    const twitterUrl = "https://twitter.com/27ma4_ton10";

    return (
      <div className="App">
        <p className="title">ポケモン種族値サーチ</p>
        <div className="main-content">

          <input id="single" type="radio" name="tab-input" checked />
          <label className="tab-label" htmlFor="single">検索</label>
          <input id="compare" type="radio" name="tab-input" />
          <label className="tab-label" htmlFor="compare">比較</label>

          <div className="tab-content" id="single-content">
            <SingleSearch />
          </div>
          <div className="tab-content" id="compare-content">
            <CompareRate />
          </div>

        </div>
        <div className="footer">
          <p>©2021 <a href={twitterUrl} rel="noopener noreferrer" target="_blank">@27ma4_ton10</a></p>
        </div>
      </div>
    );
  }
}

export default App;
