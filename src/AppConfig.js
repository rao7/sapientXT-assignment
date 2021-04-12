export const BaseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';

export const RelativeAddrApi = {

    launchSuccess: BaseUrl+"&launch_success=true",
    landSuccess: BaseUrl+"&launch_success=true&land_success=true",
    yearLandSuccess: "&launch_success=true&land_success=true&launch_year=",

  };


  export const LaunchYear = [
    {year:'2006' , isActive:false},
    {year:'2007' , isActive:false},
    {year:'2008' , isActive:false},
    {year:'2009' , isActive:false},
    {year:'2010' , isActive:false},
    {year:'2011' , isActive:false},
    {year:'2012' , isActive:false},
    {year:'2013' , isActive:false},
    {year:'2014' , isActive:false},
    {year:'2015' , isActive:false},
      {year:'2016' , isActive:false},
      {year:'2017' , isActive:false},
      {year:'2018' , isActive:false},
      {year:'2019' , isActive:false},
      
    ]