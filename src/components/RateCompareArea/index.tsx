import React from 'react';
import { Pokemon } from 'pokemonTribeRateData';
import RateCompareCard from 'components/RateCompareCard';
import './index.css';

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
      <div className="compare-rate-show-area">
        <RateCompareCard title="HP" partnerRate={parseInt(this.props.partner.h)} opponentRate={parseInt(this.props.opponent.h)} ratio={this.hpRatio()} />
        <RateCompareCard title="こうげき" partnerRate={parseInt(this.props.partner.a)} opponentRate={parseInt(this.props.opponent.a)} ratio={this.aRatio()} />
        <RateCompareCard title="ぼうぎょ" partnerRate={parseInt(this.props.partner.b)} opponentRate={parseInt(this.props.opponent.b)} ratio={this.bRatio()} />
        <RateCompareCard title="とくこう" partnerRate={parseInt(this.props.partner.c)} opponentRate={parseInt(this.props.opponent.c)} ratio={this.cRatio()} />
        <RateCompareCard title="とくぼう" partnerRate={parseInt(this.props.partner.d)} opponentRate={parseInt(this.props.opponent.d)} ratio={this.dRatio()} />
        <RateCompareCard title="すばやさ" partnerRate={parseInt(this.props.partner.s)} opponentRate={parseInt(this.props.opponent.s)} ratio={this.sRatio()} />
        <RateCompareCard title="合計" partnerRate={parseInt(this.props.partner.total)} opponentRate={parseInt(this.props.opponent.total)} ratio={this.totalRatio()} />
      </div>
    );
  }
}

export default RateCompareArea;
