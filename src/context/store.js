import React , {createContext , useEffect, useState} from 'react';
import {BaseUrl} from '../AppConfig';
export const StoreContext = createContext();

const Initial = {
    loading:false,
    data:{},
    filterdata:{}
}

export default function StoreProvider(props){
       const [globalData , setGlobalData] = useState(Initial);
    
       return(
           <StoreContext.Provider value={{...globalData }}>
               {props.children}
            </StoreContext.Provider>
       )
  
}
