import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import PokemonSelector from './PokemonSelector';
import RateShowArea from './RateShowArea';
import { Layout } from 'antd';
import PokemonData from './assets/pokemon/pokemon.json';
import { Pokemon } from 'pokemonTribeRateData';

type Props = {}

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
    const twitterUrl = "https://twitter.com/27ma4_ton10";
    const pokemons:{[key: number]: Pokemon} = PokemonData;

    return (
      <div className="App">
          <p className="title">ポケモン種族値サーチ</p>
          <PokemonSelector onPokemonChange={this.handlePokemonChange} pokemons={pokemons} />
          <RateShowArea pokemon={this.state.pokemon} />
          <Footer>©2021 <a href={twitterUrl} rel="noopener noreferrer" target="_blank">@27ma4_ton10</a></Footer>
      </div>
    );
  }
}

export default App;
