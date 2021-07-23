import React from 'react';
import { Progress, Row, Col } from 'antd';
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
  pokemon: Pokemon;
}

class RateShowArea extends React.Component<Props> {

  render() {
    return (
      <div className="chart">
        <Row>
          <Col span={6}><p>HP</p></Col>
          <Col span={12}>
            <Progress percent={(parseInt(this.props.pokemon.h)/255)*100} status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{this.props.pokemon.h}</p></Col>
        </Row>
        <Row>
          <Col span={6}><p>こうげき</p></Col>
          <Col span={12}>
            <Progress percent={(parseInt(this.props.pokemon.a)/181)*100} status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{this.props.pokemon.a}</p></Col>
        </Row>
        <Row>
          <Col span={6}><p>ぼうぎょ</p></Col>
          <Col span={12}>
            <Progress percent={(parseInt(this.props.pokemon.b)/230)*100} status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{this.props.pokemon.b}</p></Col>
        </Row>
        <Row>
          <Col span={6}><p>とくこう</p></Col>
          <Col span={12}>
            <Progress percent={(parseInt(this.props.pokemon.c)/173)*100} status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{this.props.pokemon.c}</p></Col>
        </Row>
        <Row>
          <Col span={6}><p>とくぼう</p></Col>
          <Col span={12}>
            <Progress percent={(parseInt(this.props.pokemon.d)/230)*100} status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{this.props.pokemon.d}</p></Col>
        </Row>
        <Row>
          <Col span={6}><p>すばやさ</p></Col>
          <Col span={12}>
            <Progress percent={(parseInt(this.props.pokemon.s)/200)*100} status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{this.props.pokemon.s}</p></Col>
        </Row>
        <Row>
          <Col span={6}><p>合計</p></Col>
          <Col span={12}>
            <Progress percent={(parseInt(this.props.pokemon.total)/720)*100} status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{this.props.pokemon.total}</p></Col>
        </Row>
      </div>
    );

  }
}

export default RateShowArea;
