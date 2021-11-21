// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl='
const inputField = document.querySelector('#input');
const submitBtn = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');




const getData = () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${queryParams}${wordQuery}`;
    fetch(endpoint).then(response=> {
        if(response.ok){
            return response.json();
        }
        throw new Error('Request Failed!');
    }, networkError => {
        console.log(networkError.message);
    })
    .then(jsonResponse => {
        renderResponse(jsonResponse);
    })
}

const displaySuggestions = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    getData();
};

submitBtn.addEventListener('click',displaySuggestions);