import React , {useContext , useEffect, useState} from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import CardContainer from './cardContainer';
import {StoreContext} from '../context/store';
import {BaseUrl} from '../AppConfig';
import {GethttpRequestData} from '../httpHealper';

const ContainerStyled = styled.main`
width:100%;
display:flex;
flex-direction:column;
position:relative;
min-height:400px;
padding: 0 1rem;

@media screen and (min-width:768px){
    flex-direction:row;
}

`;

export default function Container(props){

    
    return (
        <ContainerStyled>
           <Sidebar/>
           <CardContainer />
           
           
       </ContainerStyled>
   )
    
}