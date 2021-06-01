import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import PokemonSelector from './PokemonSelector';
import { Layout } from 'antd';

function App() {

  const { Footer } = Layout;
  const twitterUrl = "https://twitter.com/tsu7ma4_10nto";

  return (
    <div className="App">
        <p className="title">ポケモン種族値サーチ</p>
        <PokemonSelector />
        <Footer>©2021 <a href={twitterUrl} rel="noopener noreferrer" target="_blank">@tsu7ma4_ton10</a></Footer>
    </div>
  );
}

export default App;
