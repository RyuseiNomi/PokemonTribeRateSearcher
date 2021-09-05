import React from 'react';
import { Row, Col } from 'antd';
import RateShowBar from 'components/util/RateShowBar';
import './index.css';

type Props = {
  title: string;
  partnerRate: number;
  opponentRate: number;
  ratio: number;
}

class RateCompareCard extends React.Component<Props> {

  /*
     自分のポケモンの種族値が相手の種族値の何倍なのかを返す
     小数点第一位を切り捨てて返却
     ex) 0.12342341238 → 0.1
   */
  getMagnification(partnerRate: number, opponentRate: number) {
    return Math.round((partnerRate / opponentRate) * 10) / 10;
  }

  render() {
    return(
      <div className="compare-card">
        <div className="compare-card-title">
          <Row>
            <Col span={6}><p className="compare-card-rate">{ this.props.partnerRate }</p></Col>
            <Col span={12}>
              <p className="skill-title">{ this.props.title }</p>
              <p className="skill-magnification">約 { this.getMagnification(this.props.partnerRate, this.props.opponentRate) } 倍</p>
            </Col>
            <Col span={6}><p className="compare-card-rate">{ this.props.opponentRate }</p></Col>
          </Row>
        </div>
        <RateShowBar ratio={ this.props.ratio } />
      </div>
    );
  }
}

export default RateCompareCard
