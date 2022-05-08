import React from 'react';
import './App.css';
import SingleSearch from 'pages/SingleSearch'
import CompareRate from 'pages/CompareRate'
import icon from './assets/icon.png';

type Props = {}
type State = {
  isVisibleSingleSearch: boolean
  isVisibleCompareRate: boolean
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      isVisibleSingleSearch: true,
      isVisibleCompareRate: false,
    }
  }

  toggleContent(content: string) {
    if (content === "single") {
      this.setState({isVisibleSingleSearch: true})
      this.setState({isVisibleCompareRate: false})
      return
    }
    if (content === "compare") {
      this.setState({isVisibleSingleSearch: false})
      this.setState({isVisibleCompareRate: true})
      return
    }
  }

  render() {
    const twitterUrl = "https://twitter.com/27ma4_ton10";
    const singleContentStyle = {
      display: this.state.isVisibleSingleSearch? 'block' : 'none'
    };
    const compareContentStyle = {
      display: this.state.isVisibleCompareRate? 'block' : 'none'
    };
    const inputSingleStyle = {
      borderBottom: this.state.isVisibleSingleSearch? '3px solid #e34e4e' : '',
      color: this.state.isVisibleSingleSearch? '#e34e4e' : ''
    }
    const inputCompareStyle = {
      borderBottom: this.state.isVisibleCompareRate? '3px solid #e34e4e' : '',
      color: this.state.isVisibleCompareRate? '#e34e4e' : ''
    }

    return (
      <div className="App">
        <div className="title-bar">
          <img className="title" src={icon} alt='icon' />
          <p className="title">ポケモン種族値サーチ</p>
        </div>
        <div className="main-content">

          <div id="single" className="tab-label" onClick={()=>this.toggleContent('single')} style={inputSingleStyle}>
            <p>検索</p>
          </div>
          <div id="compare" className="tab-label" onClick={()=>this.toggleContent('compare')} style={inputCompareStyle}>
            <p>比較</p>
          </div>

          <div className="tab-content" id="single-content" style={singleContentStyle} >
            <SingleSearch />
          </div>
          <div className="tab-content" id="compare-content" style={compareContentStyle} >
            <CompareRate />
          </div>

        </div>
        <div className="footer">
          <p>©2021 <a href={twitterUrl} rel="noopener noreferrer" target="_blank">@27ma4_ton10</a></p>
        </div>
      </div>
    );
  }
}

export default App;
