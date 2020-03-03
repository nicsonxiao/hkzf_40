import axios from "axios";
import { Toast } from "antd-mobile";

export const BaseURL="http://157.122.54.189:9060";


axios.defaults.baseURL=BaseURL;

// Toast.loading('加载中...', 10)

//每次请求都调用拦截器，有可能toast关闭了，后面的请求还没回来，就已经关闭了，为了解决这个问题，使用计数器
let axiosNums=0;

//引入拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Toast.loading('加载中...', 0)
    axiosNums++;
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    axiosNums--;
    if(axiosNums===0){
        Toast.hide()
    }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default axios;