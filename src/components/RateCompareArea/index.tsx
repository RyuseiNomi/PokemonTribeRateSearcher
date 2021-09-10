import React from 'react';
import { Pokemon } from 'pokemonTribeRateData';
import RateCompareCard from 'components/RateCompareCard';
import './index.css';

type Props = {
  partner: Pokemon;
  opponent: Pokemon;
}

class RateCompareArea extends React.Component<Props> {

  render() {
    return (
      <div className="compare-rate-show-area">
        <RateCompareCard
          title="HP"
          partnerRate={this.props.partner.h}
          opponentRate={this.props.opponent.h}
        />
        <RateCompareCard
          title="こうげき"
          partnerRate={this.props.partner.a}
          opponentRate={this.props.opponent.a}
        />
        <RateCompareCard
          title="ぼうぎょ"
          partnerRate={this.props.partner.b}
          opponentRate={this.props.opponent.b}
        />
        <RateCompareCard
          title="とくこう"
          partnerRate={this.props.partner.c}
          opponentRate={this.props.opponent.c}
        />
        <RateCompareCard
          title="とくぼう"
          partnerRate={this.props.partner.d}
          opponentRate={this.props.opponent.d}
        />
        <RateCompareCard
          title="すばやさ"
          partnerRate={this.props.partner.s}
          opponentRate={this.props.opponent.s}
        />
        <RateCompareCard
          title="合計"
          partnerRate={this.props.partner.total}
          opponentRate={this.props.opponent.total}
        />
      </div>
    );
  }
}

export default RateCompareArea;
