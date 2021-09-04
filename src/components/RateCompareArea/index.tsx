import React from 'react';
import { Progress, Row, Col } from 'antd';
import { Pokemon } from 'pokemonTribeRateData';

type Props = {
  partner: Pokemon;
  opponent: Pokemon;
}

class RateCompareArea extends React.Component<Props> {

  hpRatio() {
    return this.calcRatio(parseInt(this.props.partner.h), parseInt(this.props.opponent.h));
  }

  aRatio() {
    return this.calcRatio(parseInt(this.props.partner.a), parseInt(this.props.opponent.a));
  }

  bRatio() {
    return this.calcRatio(parseInt(this.props.partner.b), parseInt(this.props.opponent.b));
  }

  cRatio() {
    return this.calcRatio(parseInt(this.props.partner.c), parseInt(this.props.opponent.c));
  }

  dRatio() {
    return this.calcRatio(parseInt(this.props.partner.d), parseInt(this.props.opponent.d));
  }

  sRatio() {
    return this.calcRatio(parseInt(this.props.partner.s), parseInt(this.props.opponent.s));
  }

  totalRatio() {
    return this.calcRatio(parseInt(this.props.partner.total), parseInt(this.props.opponent.total));
  }

  // プログレスバーに表示するためのレートを計算
  calcRatio(partnerRatio: number, opponentRatio: number) {
    return ( partnerRatio / opponentRatio ) * 50;
  }

  render() {
    return (
      <div className="chart">
        <p>HP</p>
        <Row>
          <Col span={6}><p>{ this.props.partner.h }</p></Col>
          <Col span={12}>
            <Progress percent={ this.hpRatio() } status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{ this.props.opponent.h }</p></Col>
        </Row>
        <p>こうげき</p>
        <Row>
          <Col span={6}><p>{ this.props.partner.a }</p></Col>
          <Col span={12}>
            <Progress percent={ this.aRatio() } status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{ this.props.opponent.a }</p></Col>
        </Row>
        <p>ぼうぎょ</p>
        <Row>
          <Col span={6}><p>{ this.props.partner.b }</p></Col>
          <Col span={12}>
            <Progress percent={ this.bRatio() } status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{ this.props.opponent.b }</p></Col>
        </Row>
        <p>とくこう</p>
        <Row>
          <Col span={6}><p>{ this.props.partner.c }</p></Col>
          <Col span={12}>
            <Progress percent={ this.cRatio() } status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{ this.props.opponent.c }</p></Col>
        </Row>
        <p>とくぼう</p>
        <Row>
          <Col span={6}><p>{ this.props.partner.d }</p></Col>
          <Col span={12}>
            <Progress percent={ this.dRatio() } status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{ this.props.opponent.d }</p></Col>
        </Row>
        <p>すばやさ</p>
        <Row>
          <Col span={6}><p>{this.props.partner.s}</p></Col>
          <Col span={12}>
            <Progress percent={ this.sRatio() } status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{ this.props.opponent.s }</p></Col>
        </Row>
        <p>合計</p>
        <Row>
          <Col span={6}><p>{ this.props.partner.total }</p></Col>
          <Col span={12}>
            <Progress percent={ this.totalRatio() } status="active" showInfo={false}/>
          </Col>
          <Col span={6}><p>{ this.props.opponent.total }</p></Col>
        </Row>
      </div>
    );

  }
}

export default RateCompareArea;
