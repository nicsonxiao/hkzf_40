import React,{Component,Fragment} from 'react';
import { HashRouter as Router,Link,Route,Switch,Redirect } from "react-router-dom";
// import { Button } from "antd-mobile";
import Home from "./pages/home";
import MapCity from "./pages/mapCity";
//引入百度地图mapHelper
// import { LocalCity } from "./utils/mapHelper";
import { localCityAction } from "./store/actionCreator";
import { connect } from "react-redux";

class App extends Component{
componentDidMount(){
  this.props.handleInitCity()
}


  render(){
    return <Fragment>
      <div className="app">
      <Router>
        <div className="content">
          <Switch>
          <Route path="/mapCity" component={MapCity}></Route>
          <Route path="/home" component={Home}></Route>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>
          </Switch>
        </div>
      </Router>
      </div>
    </Fragment>
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    handleInitCity(){
      dispatch(localCityAction())
    }
  }
}


export default connect(null,mapDispatchToProps)(App);