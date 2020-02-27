//为了方便调用，对百度地图功能封装
const BMap=window.BMap;


export const LocalCity=()=>{
    return new Promise((resolve,reject)=>{
        const myCity=new BMap.LocalCity();
        myCity.get(res=>{
            res.name=res.name.replace("市","")
            console.log(res)
            resolve(res);
        })
    })
}