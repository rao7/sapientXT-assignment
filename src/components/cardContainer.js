import React , {useContext, useState}from 'react';
import styled from 'styled-components';
import Card from './atom/card';
import SiteData from '../data/data.json'
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
    const {UpdateGlobaldata , globalData} = useContext(StoreContext);
    //const [isLoading , setLoading] = useState(globalData.loading);
    const {siteInfo} = props;
    //const AllLaunchData = SiteData;
    //console.log(globalData)
  
    useEffect(()=>{
        console.log(globalData)
    
    },[globalData])
    
    
 
    return (
        <CardConStyled>
            {!globalData.loading ? (
                 globalData && globalData.data.map((data , index)=>{
                    return <Card key={index} cardDetails={data} />
                })
            ) : ''
               
            }
           
          
        </CardConStyled>
    )
}