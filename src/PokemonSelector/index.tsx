import React, { useState } from 'react';
import { Select, Progress } from 'antd';
import Pokemon from '../assets/pokemon/pokemon_sample.json';

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

const PokemonSelector:React.FC = () => {
  const { Option } = Select;
  const pokemons:{[key: number]: Pokemon} = Pokemon;
  var [rates, setRate] = useState({h: "", a: "", b: "", c: "", d: "", s: "", total: ""});

  function handleChange(value: number) {
    var selectedPokemon = pokemons[value];
    console.log(selectedPokemon.h);
    setRate(rates = {
        h: `${selectedPokemon.h}`,
        a: `${selectedPokemon.a}`,
        b: `${selectedPokemon.b}`,
        c: `${selectedPokemon.c}`,
        d: `${selectedPokemon.d}`,
        s: `${selectedPokemon.s}`,
        total: `${selectedPokemon.total}`,
    });
  }

  return (
      <>
        <p>ポケモンを選択</p>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={handleChange}
        >
          {Object.keys(pokemons).map((key, value) => {
              return(
                <Option value={key}>{pokemons[value].name}</Option>
              );
          })}
        </Select>
        <Progress percent={(parseInt(rates.h)/255)*100} status="active" showInfo={false}/>
        <Progress percent={(parseInt(rates.a)/181)*100} status="active" showInfo={false}/>
        <Progress percent={(parseInt(rates.b)/230)*100} status="active" showInfo={false}/>
        <Progress percent={(parseInt(rates.c)/173)*100} status="active" showInfo={false}/>
        <Progress percent={(parseInt(rates.d)/230)*100} status="active" showInfo={false}/>
        <Progress percent={(parseInt(rates.s)/200)*100} status="active" showInfo={false}/>
        <Progress percent={(parseInt(rates.total)/720)*100} status="active" showInfo={false}/>
      </>
  );
}

export default PokemonSelector;
