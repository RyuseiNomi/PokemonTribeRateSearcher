import React from 'react';
import 'antd/dist/antd.css';
import PokemonSelector from 'components/PokemonSelector';
import RateCompareArea from 'components/RateCompareArea';
import { Pokemon } from 'pokemonTribeRateData';
import PokemonData from 'assets/pokemon/pokemon.json';
import './index.css';

type Props = {}

interface States {
  partner: Pokemon
  opponent: Pokemon
}

class CompareRate extends React.Component<Props, States> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      partner: {name: '', h: '', a: '', b: '', c: '', d: '', s: '', total: ''},
      opponent: {name: '', h: '', a: '', b: '', c: '', d: '', s: '', total: ''},
    };
    this.handlePartnerChange = this.handlePartnerChange.bind(this);
    this.handleOpponentChange = this.handleOpponentChange.bind(this);
  }

  // 比較したいポケモンの入力が変更された時に発火
  handlePartnerChange(p: Pokemon) {
    this.setState({partner: p});
  }

  // 比較対象のポケモンの入力が変更された時に発火
  handleOpponentChange(p: Pokemon) {
    this.setState({opponent: p});
  }

  render() {
    const pokemons:{[key: number]: Pokemon} = PokemonData;

    return (
      <div className="pokemon-compare-input">
        <div className="partner">
          <p>自分のポケモン</p>
          <PokemonSelector onPokemonChange={this.handlePartnerChange} pokemons={pokemons} />
        </div>
        <div classname="opponent">
          <p>相手のポケモン</p>
          <PokemonSelector onPokemonChange={this.handleOpponentChange} pokemons={pokemons} />
        </div>
        <RateCompareArea partner={this.state.partner} opponent={this.state.opponent} />
      </div>
    );
  }
}

export default CompareRate;
