import React from 'react';
import './index.css';

type Props = {
  ratio: number;
}

class RateShowBar extends React.Component<Props> {

  render() {
    return (
      <div className="rate-show-bar">
        <progress value={this.props.ratio} max="100">{ this.props.ratio }</progress>
      </div>
    );
  }
}

export default RateShowBar;
