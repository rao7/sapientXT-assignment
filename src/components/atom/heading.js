import React from 'react';
import styled from 'styled-components';

const HeadStyled = styled.h1`
width:100%;
line-height:1.5;
font-weight:bold;
text-transform:capitalize;
padding:1rem;

@media screen and (max-width:600px){
    text-align:center;
}

`;

export default function Heading (props){
    const {headType , bodyText} = props;
    return (
        <HeadStyled as = {headType && headType ? headType : 'h1'}>
            {bodyText}
        </HeadStyled >
    )
} 