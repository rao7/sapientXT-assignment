const axios = require('axios');

export const GethttpRequestData = (params) => {
    if (params) {
        axios.get(params)
            .then(function (response) {
                // handle success
                //console.log(response.data);
                return response.data;
            })
            .catch(function (error) {
                // handle error
                return error;
            })
    }

}