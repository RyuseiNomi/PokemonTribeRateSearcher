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
  const hiraganaRegex = /[\u3041-\u3096]/g;
  var [rates, setRate] = useState({h: 0, a: 0, b: 0, c: 0, d: 0, s: 0, total: 0});
  var [searchedPokemons, setSearch] = useState(pokemons);

  function handleChange(value: number) {
    var selectedPokemon = pokemons[value];
    setRate(rates = {
        h: parseInt(selectedPokemon.h),
        a: parseInt(selectedPokemon.a),
        b: parseInt(selectedPokemon.b),
        c: parseInt(selectedPokemon.c),
        d: parseInt(selectedPokemon.d),
        s: parseInt(selectedPokemon.s),
        total: parseInt(selectedPokemon.total),
    });
  }

  /*
    自作のポケモン選択フィルター
    入力された文字をカタカナに変換することで平仮名でもポケモンのフィルタリングが可能
   */
  function convertKana(key: string) {
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
    setSearch(searchedPokemons = filtered);
  }

  return (
      <>
        <Select
          showSearch
          placeholder="ポケモンを選択"
          optionFilterProp="children"
          onChange={handleChange}
          onSearch={convertKana}
          filterOption={false}
          size="large"
        >
          {Object.keys(searchedPokemons).map((key, value) => {
              return(
                <Option value={key}>{searchedPokemons[value].name}</Option>
              );
          })}
        </Select>
        <div className="chart">
            <Row>
                <Col span={6}><p>HP</p></Col>
                <Col span={12}>
                    <Progress percent={(rates.h/255)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.h}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>こうげき</p></Col>
                <Col span={12}>
                    <Progress percent={(rates.a/181)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.a}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>ぼうぎょ</p></Col>
                <Col span={12}>
                    <Progress percent={(rates.b/230)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.b}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>とくこう</p></Col>
                <Col span={12}>
                    <Progress percent={(rates.c/173)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.c}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>とくぼう</p></Col>
                <Col span={12}>
                    <Progress percent={(rates.d/230)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.d}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>すばやさ</p></Col>
                <Col span={12}>
                    <Progress percent={(rates.s/200)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.s}</p></Col>
            </Row>
            <Row>
                <Col span={6}><p>合計</p></Col>
                <Col span={12}>
                    <Progress percent={(rates.total/720)*100} status="active" showInfo={false}/>
                </Col>
                <Col span={6}><p>{rates.total}</p></Col>
            </Row>
        </div>
      </>
  );
}

export default PokemonSelector;
