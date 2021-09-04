import React from 'react';
import 'antd/dist/antd.css';
import PokemonSelector from 'components/PokemonSelector';
import RateShowArea from 'components/RateShowArea';
import PokemonData from 'assets/pokemon/pokemon.json';
import { Pokemon } from 'pokemonTribeRateData';

type Props = {}

interface States {
  pokemon: Pokemon
}

class SingleSearch extends React.Component<Props, States> {

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
    const pokemons:{[key: number]: Pokemon} = PokemonData;

    return (
      <>
        <PokemonSelector onPokemonChange={this.handlePokemonChange} pokemons={pokemons} />
        <RateShowArea pokemon={this.state.pokemon} />
      </>
    );
  }
}

export default SingleSearch;
