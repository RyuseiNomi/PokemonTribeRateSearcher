import React from 'react';
import 'antd/dist/antd.css';
import PokemonSelector from 'components/PokemonSelector';
import RateShowArea from 'components/RateShowArea';
import PokemonData from 'assets/pokemon/pokemon.json';
import { PokemonJson, Pokemon } from 'pokemonTribeRateData';

type Props = {}

interface States {
  pokemon: Pokemon
}

class SingleSearch extends React.Component<Props, States> {

  constructor(props: Props) {
    super(props);
    this.state = {pokemon: {name: '', h: 0, a: 0, b: 0, c: 0, d: 0, s: 0, total: 0}};
    this.handlePokemonChange = this.handlePokemonChange.bind(this);
  }

  handlePokemonChange(p: Pokemon) {
    this.setState({pokemon: p});
  }

  render() {
    //const pokemon = this.state;
    const pokemons_json:{[key: number]: PokemonJson} = PokemonData;

    return (
      <>
        <PokemonSelector onPokemonChange={this.handlePokemonChange} pokemons_json={pokemons_json} />
        <RateShowArea pokemon={this.state.pokemon} />
      </>
    );
  }
}

export default SingleSearch;
