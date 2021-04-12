import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
min-width:50px;
max-height:50px;
border:1px solid ${props => props.isSelected ? props.theme.primary : props.theme.primaryLight};
background-color: ${props => props.isSelected ? props.theme.primary :props.theme.primaryLight};
padding:0.3rem 0.8rem;
font-size:0.8rem;
border-radius:2px;

&:focus{
    outline:none;
}

&:hover {
    cursor:pointer;
    background-color:${props =>  props.theme.primary };
}
`;

export default function Button(props){
    const {name , isSelected} = props;
    return (
        <ButtonStyled isSelected={isSelected}>
            {name}
        </ButtonStyled>
    )
}