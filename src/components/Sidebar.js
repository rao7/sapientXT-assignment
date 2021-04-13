import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Button from './atom/button';
import Heading from './atom/heading'
import { LaunchYear } from '../AppConfig';
import { StoreContext } from '../context/store';
import { BaseUrl } from '../AppConfig';
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
    // const {} = props;
    const { UpdateGlobaldata, globalData, ToggleLoading } = useContext(StoreContext);
    const [filterYear, SetFilterYear] = useState(LaunchYear);
    const [filterLaunch, SetfilterLaunch] = useState();
    const [filterLanding, SetfilterLanding] = useState();

    const UpdateData = async (paramType, params) => {
        let param;
        if (paramType && paramType === 'year') {
            param = '&launch_year=' + params;
        } else if (paramType && paramType === 'launch') {
            param = '&launch_success=' + params;
        } else if (paramType && paramType === 'land') {
            param = '&land_success=' + params;
        }
        const defaultdata = await GethttpRequestData(BaseUrl + param);
        ToggleLoading(true);
        UpdateGlobaldata(defaultdata)
        ToggleLoading(false);
        console.table(defaultdata)

    }

    function filterByYear(year) {
        const activeYearIndex = filterYear.findIndex((data) => data.isActive === true);
        const SelectedYearIndex = filterYear.findIndex((data) => data.year === year);
        const updatedFilter = filterYear;
        if (activeYearIndex) {
            updatedFilter[activeYearIndex].isActive = false;
            console.log(updatedFilter[activeYearIndex])
        }
        updatedFilter[SelectedYearIndex].isActive = true;
        console.log(updatedFilter)
        SetFilterYear(updatedFilter);
        //console.log(activeYearIndex , SelectedYearIndex)
    }

    useEffect(() => {

    }, [filterYear])

    return (
        <SidebarStyled>
            <section className="filter">
                <Heading className='title' headType={'h3'} bodyText={'filters'} />
                <span className='filter--title'>Launch Year</span>
                <div className="filter--year">
                    {filterYear && filterYear.map((data, index) => {
                        return <Button
                            key={index}
                            name={data.year}
                            isSelected={data.isActive}
                            clickEvent={(e) => {
                                // filterByYear(data.year);
                                UpdateData('year', data.year);

                            }}
                        />
                    })}


                </div>
                <span className='filter--title'>Successful launch</span>
                <div className="filter--launch">
                    <Button name={'true'}
                        clickEvent={(e) => {
                            UpdateData('launch', true);
                        }} />
                    <Button name={'false'}
                        clickEvent={(e) => {
                            UpdateData('launch', false);
                        }} />
                </div>
                <span className='filter--title'>Successful landing</span>
                <div className="filter--landing">
                    <Button name={'true'} clickEvent={(e) => {
                        UpdateData('land', true);
                    }} />
                    <Button name={'false'} clickEvent={(e) => {
                        UpdateData('land', false);
                    }} />
                </div>
            </section>
        </SidebarStyled>
    )
}