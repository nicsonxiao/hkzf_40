import { TabBar } from 'antd-mobile';
import  React  from "react";
import { Route } from "react-router-dom";

import Index from "./index/index.js";
import Found from "./found";
import News from "./news";
import My from "./my";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
    // console.log(this.props)
    if(this.props.match.path==="/home"){
      this.props.history.push("/home/index")
    }
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21b97a"
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
            selected={this.props.location.pathname==="/home/index"}
            // badge={1}
            onPress={() => {
              this.props.history.push("/home/index")
            }}
            data-seed="logId"
          >
              <Route path="/home/index" component={Index}/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div className="iconfont icon-findHouse"/>
            }
            selectedIcon={
              <div className="iconfont icon-findHouse"/>
            }
            title="找房"
            key="found"
            // badge={'new'}
            selected={this.props.location.pathname==="/home/found"}
            onPress={() => {
              this.props.history.push("/home/found")
            }}
            data-seed="logId1"
          >
            <Route path="/home/found" component={Found}/>
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
            selected={this.props.location.pathname==="/home/news"}
            onPress={() => {
              this.props.history.push("/home/news")
            }}
          >              
          <Route path="/home/news" component={News}/>
          </TabBar.Item>
          <TabBar.Item
            icon={<div className="iconfont icon-my"></div>}
            selectedIcon={<div className="iconfont icon-my"></div>}
            title="我的"
            key="my"
            selected={this.props.location.pathname==="/home/my"}
            onPress={() => {
              this.props.history.push("/home/my")
            }}
          >              
          <Route path="/home/my" component={My}/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Home;