import { LocalCity } from "../../utils/mapHelper";


//定位当前城市
export const localCityAction=()=>{
    return (dispatch)=>{
        LocalCity()
        .then(res=>{
            const action={
                type:"initCity",
                value:res
            }
            dispatch(action);
        })
    }
}