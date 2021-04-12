import React from 'react';
import styled from 'styled-components';
import Card from './atom/card';
import siteData from '../data/data.json'
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
    const {siteInfo} = props;
    const AllLaunchData = siteData;

    return (
        <CardConStyled>
            {
                AllLaunchData && AllLaunchData.map((data , index)=>{
                    return <Card key={index} cardDetails={data} />
                })
            }
           
          
        </CardConStyled>
    )
}