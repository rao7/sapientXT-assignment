import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Button from './atom/button';
import Heading from './atom/heading'
import { LaunchYear } from '../AppConfig';
import { StoreContext } from '../context/store';
import { GethttpRequestData } from '../httpHealper';

const SidebarStyled = styled.aside`
width:250px;
min-height:200px;
text-align:center;

@media screen and (max-width:600px){

    width:100%;

    & .filter div[class*='filter--']{
        max-width:70%;
        margin:0.6rem auto;
    }
}


& .filter {
    background:${props => props.theme.white};
    width:90%;
    margin:0 auto;
    border-radius:2px;
    padding-bottom:1rem;
}

& div[class*='filter--'] {
    
    margin:0.6rem;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    & > button {
        margin:0.6rem;
    }
}

& .filter--title {
    font-weight:bold;
    font-size:0.7rem;
    border-bottom: 1px solid ${props => props.theme.black};
    padding:0.3rem 0.5rem;
    opacity:0.9;
}

& .title {
    text-align:left;    
}

`;



export default function Sidebar(props) {
    const Store = useContext(StoreContext);
    const { loading, data, updateGlobalData } = Store;
    const [filterYear, SetFilterYear] = useState(null);
    const [filterLaunch, SetfilterLaunch] = useState(null);
    const [filterLanding, SetfilterLanding] = useState(null);


    const UpdateData = async (year, launch, land) => {
        let param;
        param += year ? '&launch_year=' + year : '';
        param += launch ? '&launch_success=' + launch : '';
        param += land ? '&land_success=' + land : '';
        const defaultdata = await GethttpRequestData(param);
        Store.data = defaultdata;
        updateGlobalData(Store)


    }

    useEffect(() => {
        console.log(filterYear, filterLaunch, filterLanding);
        UpdateData(filterYear, filterLaunch, filterLanding);

    }, [filterYear, filterLaunch, filterLanding])

    return (
        <SidebarStyled>
            <section className="filter">
                <Heading className='title' headType={'h3'} bodyText={'filters'} />
                <span className='filter--title'>Launch Year</span>
                <div className="filter--year">
                    {LaunchYear && LaunchYear.map((data, index) => {
                        return <Button
                            key={index}
                            name={data.year}
                            isSelected={filterYear && filterYear === data.year ? true : false}
                            clickEvent={(e) => {

                                SetFilterYear(data.year)
                            }}
                        />
                    })}


                </div>
                <span className='filter--title'>Successful launch</span>
                <div className="filter--launch">
                    <Button name={'true'}
                        isSelected={filterLaunch ? true : false}
                        clickEvent={(e) => {
                            SetfilterLaunch(true);
                        }} />
                    <Button name={'false'}
                        isSelected={ (filterLaunch === false) ? true : false}
                        clickEvent={(e) => {
                            SetfilterLaunch(false);
                        }} />
                </div>
                <span className='filter--title'>Successful landing</span>
                <div className="filter--landing">
                    <Button name={'true'} isSelected={filterLanding ? true : false} clickEvent={(e) => {
                        SetfilterLanding(true);
                    }} />
                    <Button name={'false'} isSelected={(filterLanding === false) ? true : false} clickEvent={(e) => {
                        SetfilterLanding(false);
                    }} />
                </div>
            </section>
        </SidebarStyled>
    )
}