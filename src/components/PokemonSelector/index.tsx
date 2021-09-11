import React from 'react';
import { Select } from 'antd';
import './index.css';
import { PokemonJson, Pokemon } from 'pokemonTribeRateData';

type Props = {
  /* propsを経由して渡ってくる、親コンポーネントの state を更新するメソッド */
  onPokemonChange: (p: Pokemon) => void;
  pokemons_json: {[key: number]: PokemonJson};
}

// DOMからも state を参照するための interface
interface States {
  searchedPokemons: {[key: number]: PokemonJson}
}

class PokemonSelector extends React.Component<Props, States> {

  constructor(props: Props) {
    super(props);
    this.state = {searchedPokemons: this.props.pokemons_json}
    // NOTE: 継承を用いて定義された React コンポーネントは this が bind されないため手動で bind する
    this.handleChange = this.handleChange.bind(this);
    this.setPokemon = this.setPokemon.bind(this);
    this.setFilteredPokemon = this.setFilteredPokemon.bind(this);
  }

  handleChange(e: PokemonJson) {
    // 親コンポーネントの state を更新する際に種族値を number 型に cast する
    const show_pokemon: Pokemon = {
      name: e.name,
      h: parseInt(e.h),
      a: parseInt(e.a),
      b: parseInt(e.b),
      c: parseInt(e.c),
      d: parseInt(e.d),
      s: parseInt(e.s),
      total: parseInt(e.total),
    }
    this.props.onPokemonChange(show_pokemon);
  }

  /*
     親コンポーネントのポケモン state を更新する
   */
  setPokemon(name: string) {
    var selectedPokemon = Object.values(this.props.pokemons_json)
      .filter((key, value) => {
        return (
          this.props.pokemons_json[value].name.includes(name)
        );
    });
    this.handleChange(selectedPokemon[0]);
  }

  /*
     インクリメンタルサーチを擬似的に実現するためのフィルター関数
   */
  setFilteredPokemon(key: string) {
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
    const filtered = Object.values(this.props.pokemons_json)
      .filter((key, value) => {
        return (
          this.props.pokemons_json[value].name.includes(katakana)
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
