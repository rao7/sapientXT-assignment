import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';

const HeaderStyled = styled.header`
width:100%;
height:80px;

& .App-logo {
    width:200px;
    height:50px;
    color:#111;
    margin:1rem;
    
}
`;

export default function Header() {
    return (
    <HeaderStyled>
        <img src={logo} className="App-logo" alt="logo" />
    </HeaderStyled>
    )
}