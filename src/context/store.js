import React , {createContext , useEffect, useState} from 'react';
import { useContext } from 'react';
import {BaseUrl} from '../AppConfig';
import {GethttpRequestData} from '../httpHealper';

export const StoreContext = createContext();

const Initial = {
    loading:false,
    data:[]
}

export default function StoreProvider(props){
       const [globalData , setGlobalData] = useState(Initial);
      
       const ToggleLoading = bool => {
        let newdata = globalData;
               newdata.loading = bool;
        setGlobalData(newdata);
       } 


       return(
           <StoreContext.Provider value={{...globalData , updateGlobalData : setGlobalData }}>
               {props.children}
            </StoreContext.Provider>
       )
  
}
