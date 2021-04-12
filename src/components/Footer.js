import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
width:100%;
height:200px;
text-align:center;
color : ${props => props.theme.black};
& > p {
    margin:1rem auto;
    font-weight:bold;
}

`;

export default function Footer(props){
    const {siteInfo} = props;
    return (
        <FooterStyled>
            <p>Developed By : {siteInfo && siteInfo.siteBy } </p>
        </FooterStyled>
    )
}