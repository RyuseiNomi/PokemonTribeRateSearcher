import React from 'react';
import 'antd/dist/antd.css';
import PokemonSelector from 'components/PokemonSelector';
import RateCompareArea from 'components/RateCompareArea';
import { PokemonJson, Pokemon } from 'pokemonTribeRateData';
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
      partner: {name: '', h: 0, a: 0, b: 0, c: 0, d: 0, s: 0, total: 0},
      opponent: {name: '', h: 0, a: 0, b: 0, c: 0, d: 0, s: 0, total: 0},
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
    const pokemons_json:{[key: number]: PokemonJson} = PokemonData;

    return (
      <>
        <div className="compare-input">
          <div className="partner">
            <p>自分のポケモン</p>
            <PokemonSelector onPokemonChange={this.handlePartnerChange} pokemons_json={pokemons_json} />
          </div>
          <div className="opponent">
            <p>相手のポケモン</p>
            <PokemonSelector onPokemonChange={this.handleOpponentChange} pokemons_json={pokemons_json} />
          </div>
        </div>
        <RateCompareArea partner={this.state.partner} opponent={this.state.opponent} />
      </>
    );
  }
}

export default CompareRate;
