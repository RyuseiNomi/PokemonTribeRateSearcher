import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import PokemonSelector from './PokemonSelector';
import RateShowArea from './RateShowArea';
import { Layout } from 'antd';

/* JSONから読み込んだポケモンの種族値情報 */
type Pokemon = {
    name: string;
    h: string;
    a: string;
    b: string;
    c: string;
    d: string;
    s: string;
    total: string;
};

type Props = {

}

interface States {
  pokemon: Pokemon
}

class App extends React.Component<Props, States> {

  constructor(props: Props) {
    super(props);
    this.state = {pokemon: {name: '', h: '', a: '', b: '', c: '', d: '', s: '', total: ''}};
    this.handlePokemonChange = this.handlePokemonChange.bind(this);
  }

  handlePokemonChange(p: Pokemon) {
    this.setState({pokemon: p});
  }

  render() {
    //const pokemon = this.state;
    const { Footer } = Layout;
    const twitterUrl = "https://twitter.com/tsu7ma4_10nto";

    return (
      <div className="App">
          <p className="title">ポケモン種族値サーチ</p>
          <PokemonSelector onPokemonChange={this.handlePokemonChange} />
          <RateShowArea pokemon={this.state.pokemon} />
          <Footer>©2021 <a href={twitterUrl} rel="noopener noreferrer" target="_blank">@tsu7ma4_ton10</a></Footer>
      </div>
    );
  }
}

export default App;
