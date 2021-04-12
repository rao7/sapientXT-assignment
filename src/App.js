import React , {useContext, useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import StoreProvider from './context/store';

import Container from './components/container';
import Heading from './components/atom/heading';
import Footer from './components/Footer';
import {Theme} from './theme/theme';

const Wrapper = styled.div`
width:100%;
height:100%;
position:relative;
display:flex;
flex-direction:column;
color: ${props => props.theme.black};
`




function App() {
 
  return (
    <ThemeProvider theme={Theme}>
      <StoreProvider>
        <Wrapper>
        <Header/>
          <Heading headType = {'h2'} bodyText = {'spaceX launch programes'}/>
          <Container/>
          <Footer siteInfo={{siteBy:'Rahul Rao'}}/>
        </Wrapper>
        </StoreProvider>
    </ThemeProvider>
  )
}

export default App;
