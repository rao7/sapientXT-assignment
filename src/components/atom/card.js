import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.article`
width:260px;
min-height:100px;
line-height:1.5;
padding:0.8rem;
background-color:${props => props.theme.white };

& .card--image {
    width:95%;
    margin:0 auto;
    background-color:#f1f1f1;

    & .image {
        width:100%;
    }
}

& .card--details {
    ul {
        list-style:none;
        padding:0.8rem;
        font-size:0.8rem;
        li {
            &:first-child{
            color:${props => props.theme.secondary};
            font-weight:bold;
            font-size: 0.8rem;
            line-height:2rem;
            }
            label {
                font-weight:bold;
                
            }
        }
    }
}
`;

export default function Card (props){
    const {cardDetails } = props;

    return (
        cardDetails &&  <CardStyled className='card'>
            <figure className='card--image'>
                <img className='image' src={cardDetails.links?.mission_patch_small} />
            </figure>
            <div className="card--details">
                <ul>
                    <li> {cardDetails.mission_name +" #"+cardDetails.flight_number}</li>
                    <li> <label> Mission ID :</label> <span>{cardDetails.mission_id} </span></li>
                    <li> <label> Launch year :</label> <span>{cardDetails.launch_year}</span></li>
                    <li> <label> Launch Success:</label> <span>{cardDetails.launch_success.toString()}</span></li>
                 
                </ul>
            </div>
        </CardStyled>
    )
} 