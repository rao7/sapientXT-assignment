import React , {createContext , useEffect, useState} from 'react';

export const StoreContext = createContext();



const Initial = {
    loading:false,
    siteData:[],
    filterdata:{}
}



export default function StoreProvider(props){
       const [globalData , setGlobalData] = useState(Initial);

       const UpdateGlobaldata = (resData) => { 
           if(resData && Object.keys(resData).length !== 0){ 
               const newdata = globalData;
               newdata.data = resData;
               setGlobalData(newdata);
               console.log(globalData)
           }
       }
       
       const ToggleLoading = bool => {
        let newdata = globalData;
               newdata.loading = bool;
        setGlobalData(newdata);
       } 

       useEffect((globalData)=>{ console.log(globalData); console.log('store updated')},[globalData])

       return(
           <StoreContext.Provider value={{globalData , UpdateGlobaldata , ToggleLoading }}>
               {props.children}
            </StoreContext.Provider>
       )
  
}
