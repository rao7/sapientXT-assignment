import {BaseUrl} from './AppConfig';
const axios = require('axios');


export const GethttpRequestData = async (params) => {
    let param = params ? params : '';
        try {
            const response = await axios.get(BaseUrl+param);
            const data = await response.data;
           // console.log(data)
            return data;
          } catch (error) {
            console.error(error);
          }
      
}