import React from "react";
import { Carousel } from 'antd-mobile';
// import axios from "axios";

//引入基础路径
import axios,{ BaseURL } from "../../../utils/reuqest";

//图片要以js的形式引入
import nav1 from "../../../assets/images/nav-1.png";
import nav2 from "../../../assets/images/nav-2.png";
import nav3 from "../../../assets/images/nav-3.png";
import nav4 from "../../../assets/images/nav-4.png";

//引入局部样式
import indexCss from "./index.module.scss";
import CityInput from "../../../components/CityInput";
//Carousel轮播图本身有bug不会自动播放轮播图
class index extends React.Component {
  state = {
    //轮播图
    swiperList: [],
    //首页导航
    navs: [{ id: 0, imgSrc: nav1, text: "整租" }, { id: 1, imgSrc: nav2, text: "合租" }, { id: 2, imgSrc: nav3, text: "地图找房" }, { id: 3, imgSrc: nav4, text: "去出租" }],
    //租房小组
    rentings: [],
    //最新资讯
    news: []
  }
  //组件挂在完毕
  componentDidMount() {
    this.getSwiperList();
    this.getRentings()
    this.getNews()
  }
  //轮播图数据
  getSwiperList() {
    axios.get(BaseURL+"/home/swiper")
      .then(res => {
        // console.log(res)
        this.setState({
          swiperList: res.data.body
        })
      })
  }

  //获取租房小组
  getRentings() {
    axios.get(BaseURL+"/home/groups")
      .then(res => {
        // console.log(res)
        this.setState({
          rentings: res.data.body
        })
      })
  }

  //获取最新资讯
  getNews() {
    axios.get(BaseURL+"/home/news")
      .then(res => {
        // console.log(res)
        this.setState({
          news: res.data.body
        })
      })
  }
  render() {
    return (
      <div>
        {/* 轮播图开始 */}
        <div className={indexCss.index_swiper}>
          <div className={indexCss.city_input_wrap}>
             <CityInput></CityInput>
          </div>
          {this.state.swiperList.length && <Carousel
            autoplay
            infinite
          >
            {this.state.swiperList.map(val => (
              <a
                key={val.id}
                style={{ display: 'inline-block', width: '100%' }}
              >
                <img
                  src={BaseURL + val.imgSrc}
                  alt=""
                />
              </a>
            ))}
          </Carousel>}
        </div>
        {/* 轮播图结束 */}

        {/* 首页导航开始 */}
        <div className={indexCss.index_nav}>
          {this.state.navs.map(v => <div className={indexCss.nav_item} key={v.id}>
            <img src={v.imgSrc} alt="" />
            <p>{v.text}</p>
          </div>)}
        </div>
        {/* 首页导航结束 */}

        {/* 租房小组开始 */}
        <div className={indexCss.index_rentings}>
          <div className={indexCss.rentings_title}>
            <span>租房小组</span>
            <a href="">更多</a>
          </div>
          <div className={indexCss.rentings_content}>
            {this.state.rentings.map(v =>
              <div className={indexCss.renting_item} key={v.id}>
                <div className={indexCss.renting_item_info}>
                  <div className={indexCss.renting_item_title}>{v.title}</div>
                  <div className={indexCss.renting_item_desc}>{v.desc}</div>
                </div>
                <div className={indexCss.renting_item_img}>
                  <img src={BaseURL + v.imgSrc} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* 租房小组结束 */}

        {/* 最新资讯开始 */}
        <div className={indexCss.indexNews}>
          <div className={indexCss.news_title}>最新资讯</div>
          {this.state.news.map(v => <div className={indexCss.news_item} key={v.id}>
            <div className={indexCss.news_img}>
              <img src={BaseURL + v.imgSrc} alt="" />
            </div>
            <div className={indexCss.news_info}>
              <div className={indexCss.news_main}>
                <div className={indexCss.news_name}>{v.title}</div>
              </div>
              <div className={indexCss.news_desc}>
                <span className={indexCss.news_from}>{v.from}</span>
                <span className={indexCss.news_date}>{v.date}</span>
              </div>
            </div>
          </div>)}
        </div>
        {/* 最新资讯结束 */}
      </div>
    )
  }
}

export default index;