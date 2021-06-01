import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import PokemonSelector from './PokemonSelector';

function App() {

  return (
    <div className="App">
        <p>ポケモン種族値早見ツール</p>
        <PokemonSelector />
    </div>
  );
}

export default App;
