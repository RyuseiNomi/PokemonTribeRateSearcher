import React from 'react';
import { Progress, Row, Col } from 'antd';
import './index.css';

type Props = {
  title: string;
  partnerRate: number;
  opponentRate: number;
  ratio: number;
}

class RateCompareCard extends React.Component<Props> {

  render() {
    return(
      <div className="card">
        <div className="compare-card-title">
          <p className="skill-title">{ this.props.title }</p>
        </div>
        <Row>
          <Col span={12}><p className="rate">{ this.props.partnerRate }</p></Col>
          <Col span={12}><p className="rate">{ this.props.opponentRate }</p></Col>
        </Row>
        <Progress percent={ this.props.ratio } status="active" showInfo={false}/>
      </div>
    );
  }
}

export default RateCompareCard
