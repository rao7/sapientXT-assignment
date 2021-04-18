import React , {useContext, useState}from 'react';
import styled from 'styled-components';
import Card from './atom/card';
//import SiteData from '../data/data.json'
import {BaseUrl} from '../AppConfig';
import {GethttpRequestData} from '../httpHealper';

import {StoreContext} from '../context/store';
import { useEffect } from 'react';
const CardConStyled = styled.section`
width:100%;
min-height:200px;
/*border:1px solid red;*/
display:grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 1rem;
row-gap:1rem;


@media screen and (min-width:768px) and (max-width:1024px){
    grid-template-columns: repeat(3, 1fr);
}

@media screen and (max-width:600px){
    grid-template-columns: repeat(1, 1fr);
    place-items:center;
    margin-top:1rem;
    
}

`;

export default function CardContainer(props){
    const Store = useContext(StoreContext);
    const {loading , data ,  updateGlobalData} = Store;

    
    const UpdateData = async (params) => {
        const defaultdata = await GethttpRequestData();
        Store.data = defaultdata ;
        updateGlobalData(Store)

       }
  
  
    useEffect(()=>{
        console.log('loading is'+loading );
        if(data.length === 0){
            UpdateData();
        }
    
    },[loading , data])
    
    
 
    return (
        <CardConStyled>
            {(data?.length > 0 ) ? (
                 data && data.map((data , index)=>{
                    return <Card key={index} cardDetails={data} />
                })
            ) : ''
               
            }
           
          
        </CardConStyled>
    )
}