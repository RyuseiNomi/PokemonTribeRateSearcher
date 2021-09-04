import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Tabs } from 'antd';
import SingleSearch from 'pages/SingleSearch'
import CompareRate from 'pages/CompareRate'

class App extends React.Component {

  render() {
    //const pokemon = this.state;
    const { Footer } = Layout;
    const { TabPane } = Tabs;
    const twitterUrl = "https://twitter.com/27ma4_ton10";

    return (
      <div className="App">
        <p className="title">ポケモン種族値サーチ</p>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="検索" key="1">
            <SingleSearch />
          </TabPane>
          <TabPane tab="比較" key="2">
            <CompareRate />
          </TabPane>
        </Tabs>
        <Footer>©2021 <a href={twitterUrl} rel="noopener noreferrer" target="_blank">@27ma4_ton10</a></Footer>
      </div>
    );
  }
}

export default App;
