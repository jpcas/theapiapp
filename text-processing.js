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

const displayResult = result => {
    const resultBlockElement = 
document.getElementById('main-result-block');
    resultBlockElement.classList.remove('invisible');

    const label = result.label;
    const  resultElement = 
document.getElementById('result');
    resultElement.setAttribute('class', label);
    let resultText = '';


//Results using swtich case 
switch (label) {
    case 'pos':
        resultText = 'Wow! Your comment is very postive!';
        break;
    case 'neg':
        restultText = 'Negative comment :(';
        break;
    case 'neutral':
        resultText = 'simple comment =)'
        break;
    default:
        resultText = 'Hmmmm, cant understand your comment';
};

///results 
    resultElement.textContent = resultText;

};

const displayResult = result => {
    // Remove invisible class for main-result-block
    const resultBlockElement = document.getElementById('main-result-block');
    resultBlockElement.classList.remove('invisible');
    // Setting the color of the result text depending on the response label
    const label = result.label;
    const resultElement = document.getElementById('result');
    resultElement.setAttribute('class', label);
    let resultText = '';
    // Choosing the result text depending on response label
    switch (label) {
        case 'pos':
            resultText = 'Wow! Your comment is very positive!';
            break;
        case 'neg':
            resultText = 'Negative comment =(';
            break;
        case 'neutral':
            resultText = 'Simple comment =)';
            break;
        default:
            resultText = 'Hmmm, dont understnad';
    }
    // Setting the result text
    resultElement.textContent = resultText;
  };   

const handleEmptyComment = () => {
    const resultBlockElement = 
document.getElementById('main-result-block');
    resultBlockElement.classList.add('invisible');
    return alert('Your comment is empty =(');
};

//Button Click Handler 
const onAnalyzeButtonClick = () => {

    const commentElement = 
document.getElementById('comment');
    const commentText = commentElement.nodeValue.trim();

// empty comments handles 

if (!commentText) {
    return handleEmptyComment();
}
//Calling the API and passingthe result of the function 
    return analyzeComment(commentText, displayResult);
}