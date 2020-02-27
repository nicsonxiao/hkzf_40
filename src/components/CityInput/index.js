import React,{Component,Fragment} from "react";
import indexCss from "./index.module.scss";
//引入仓库数据
import { connect } from "react-redux";

class CityInput extends Component{
    render(){
        return(
            <div className={indexCss.city_input_wrap}>
                <div className={indexCss.city_input}>
                    <div className={indexCss.city_name}>
                        {/* {console.log(this.props)} */}
                        <span>{this.props.cityName}</span>
                        <i className="iconfont icon-arrow"></i>
                    </div>
                    <div className={indexCss.city_search}>
                        <i className="iconfont icon-seach"></i>
                        <span>请输入其他小区或地址</span>
                    </div>
                </div>
                <div className={indexCss.city_map}>
                    <span className="iconfont icon-map"></span>
                </div>
            </div>
        )
    }
}

const mapStoreToProps=(state)=>{
    return{
        cityName:state.mapReducer.city.name
    }
}

export default connect(mapStoreToProps,null)(CityInput);