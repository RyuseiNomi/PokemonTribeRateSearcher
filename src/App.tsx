import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import PokemonSelector from './PokemonSelector';
import { Layout } from 'antd';

function App() {

  const { Footer } = Layout;
  const footerStyle = {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }

  return (
    <div className="App">
        <p>ポケモン種族値早見ツール</p>
        <PokemonSelector />
        <Footer style={footerStyle}>©2021 Ryusei Nomi</Footer>
    </div>
  );
}

export default App;
