const { default: Axios } = require("axios");

// Text Proccesing API//
const API_URL = 'https://japerk-text-processing.p.rapidapi.com/sentiment/';
//RAPID API Request//
const REQUEST_HEADERS = {
    'X-RapidAPI-Host': 'japerk-text-processing.p.rapidapi.com'
, 'X-RapidApi-Key':
'7xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'Content-Type': 'application/x-www-form-urlencoded'
};

const analyzeComment = (comment, callback) => {

//create objects to send back to the server 

    const data = {
        text: comment,
        language: 'english'
    };

//encoding data 
const formattedData = Qs.stringify(data);
//Post the request data 
Axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
    .then(response => {
        const data = response.data;
        //Calling back the function
        Callback(data)
    })
    .catch(error => console.error(error))
};

    