const axios = require('axios');

export const GethttpRequestData = async (params) => {
    if (params) {
        try {
            const response = await axios.get(params);
            const data = await response.data;
           // console.log(data)
            return data;
          } catch (error) {
            console.error(error);
          }
        
    }

}