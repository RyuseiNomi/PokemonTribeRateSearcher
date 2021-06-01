import React, { useState } from 'react';
import { Select, Progress, Row, Col } from 'antd';
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

const PokemonSelector:React.FC = () => {
  const { Option } = Select;
  const pokemons:{[key: number]: Pokemon} = PokemonData;
  var [rates, setRate] = useState({h: "", a: "", b: "", c: "", d: "", s: "", total: ""});

  function handleChange(value: number) {
    var selectedPokemon = pokemons[value];
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
        <Select
          showSearch
          placeholder="ポケモンを選択"
          optionFilterProp="children"
          onChange={handleChange}
          size="large"
        >
          {Object.keys(pokemons).map((key, value) => {
              return(
                <Option value={key}>{pokemons[value].name}</Option>
              );
          })}
        </Select>
        <div className="chart">
            <Row>
                <Col span={6}><p>HP</p></Col>
                <Col span={12}>
                    <Progress percent={(parseInt(rates.h)/255)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.h}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>こうげき</p></Col>
                <Col span={12}>
                    <Progress percent={(parseInt(rates.a)/181)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.a}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>ぼうぎょ</p></Col>
                <Col span={12}>
                    <Progress percent={(parseInt(rates.b)/230)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.b}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>とくこう</p></Col>
                <Col span={12}>
                    <Progress percent={(parseInt(rates.c)/173)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.c}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>とくぼう</p></Col>
                <Col span={12}>
                    <Progress percent={(parseInt(rates.d)/230)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.d}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>すばやさ</p></Col>
                <Col span={12}>
                    <Progress percent={(parseInt(rates.s)/200)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.s}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>合計</p></Col>
                <Col span={12}>
                    <Progress percent={(parseInt(rates.total)/720)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.total}</p></Col>
            </Row>
        </div>
      </>
  );
}

export default PokemonSelector;
