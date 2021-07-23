import React from 'react';
import { Select } from 'antd';
import PokemonData from '../assets/pokemon/pokemon.json';
import './index.css';

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
  /* propsを経由して渡ってくる、親コンポーネントの state を更新するメソッド */
  onPokemonChange: (p: Pokemon) => void;
}

// DOMからも state を参照するための interface
interface States {
  searchedPokemons: Pokemon[]
}

class PokemonSelector extends React.Component<Props, States> {

  constructor(props: Props) {
    super(props);
    this.state = {searchedPokemons: []}
    this.handleChange = this.handleChange.bind(this);
    this.setPokemon = this.setPokemon.bind(this);
    this.setFilteredPokemon = this.setFilteredPokemon.bind(this);
  }

  handleChange(e: Pokemon) {
    this.props.onPokemonChange(e);
  }

  /*
     親コンポーネントのポケモン state を更新する
   */
  setPokemon(name: string) {
    const pokemons:{[key: number]: Pokemon} = PokemonData;
    var selectedPokemon = Object.values(pokemons)
      .filter((key, value) => {
        return (
          pokemons[value].name.includes(name)
        );
    });
    this.handleChange(selectedPokemon[0]);
  }

  /*
     インクリメンタルサーチを擬似的に実現するためのフィルター関数
   */
  setFilteredPokemon(key: string) {
    const pokemons:{[key: number]: Pokemon} = PokemonData;
    const hiraganaRegex = /[\u3041-\u3096]/g;

    /*
      自作のポケモン選択フィルター
      入力された文字をカタカナに変換することで平仮名でもポケモンのフィルタリングが可能
     */
    if (!key.match(hiraganaRegex)) {
      return;
    }
    var katakana = key.replace(hiraganaRegex, ch =>
      String.fromCharCode(ch.charCodeAt(0) + 0x60)
    );
    const filtered = Object.values(pokemons)
      .filter((key, value) => {
        return (
          pokemons[value].name.includes(katakana)
      );
    });

    this.setState({searchedPokemons: filtered});
  } 

  render() {
    const { Option } = Select;

    return (
      <>
        <Select
          showSearch
          placeholder="ポケモンを選択"
          optionFilterProp="children"
          onChange={this.setPokemon}
          onSearch={this.setFilteredPokemon}
          filterOption={false}
          size="large"
        >
          {Object.keys(this.state.searchedPokemons).map((key, value) => {
            return(
              <Option value={this.state.searchedPokemons[value].name}>{this.state.searchedPokemons[value].name}</Option>
            );
          })}
        </Select>
      </>
    );
  }
}

export default PokemonSelector;
