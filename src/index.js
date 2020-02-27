import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入字体图标
import "./assets/fonts/iconfont.css";
//引入初始化样式
import "./index.css"
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));