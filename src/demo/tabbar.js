import { TabBar } from 'antd-mobile';
import  React  from "react";

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<div className="iconfont icon-ind"/>
            }
            selectedIcon={<div className="iconfont icon-ind"/>
            }
            selected={this.state.selectedTab === 'blueTab'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
              首页
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="iconfont icon-findHouse"/>
            }
            selectedIcon={
              <div className="iconfont icon-findHouse"/>
            }
            title="找房"
            key="find"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            找房
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="iconfont icon-infom"/>
            }
            selectedIcon={
              <div className="iconfont icon-infom"/>
            }
            title="资讯"
            key="News"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            资讯
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="iconfont icon-my"></div>}
            selectedIcon={<div className="iconfont icon-my"></div>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarExample;