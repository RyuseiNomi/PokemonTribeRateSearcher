import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import SingleSearch from 'pages/SingleSearch'

class App extends React.Component {

  render() {
    //const pokemon = this.state;
    const { Footer } = Layout;
    const twitterUrl = "https://twitter.com/27ma4_ton10";

    return (
      <div className="App">
        <p className="title">ポケモン種族値サーチ</p>
        <SingleSearch />
        <Footer>©2021 <a href={twitterUrl} rel="noopener noreferrer" target="_blank">@27ma4_ton10</a></Footer>
      </div>
    );
  }
}

export default App;
