const inputField = document.querySelector('#input');
const submitBtn = document.querySelector('#submit');

const responseField = document.querySelector('#responseField');
const url = 'https://api.datamuse.com/words?';
const queryParameter = 'rel_rhy=';



function getData() {
    const inputFieldValue = inputField.value;
    const endpoint = url + queryParameter + inputFieldValue;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // displayData(xhr.response);
            // console.log(xhr.response);
            renderResponse(xhr.response);
        }
    }
    xhr.open('GET', endpoint);
    xhr.send();
}

function displayData(e) {
    e.preventDefault();
    getData();
}
submitBtn.addEventListener('click', displayData);

// const url = "https://api.datamuse.com/words?";
// const queryParams = 'rel_rhy=';
// const getSuggestions = () => {
//     const wordQuery = inputField.value;
//     const endpoint = url + queryParams + wordQuery;
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'json';
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             // renderResponse(xhr.response);
//             console.log(xhr.response);
//         }
//     }
//     xhr.open('GET', endpoint);
//     xhr.send();
// }

// // Clear previous results and display results to webpage
// const displaySuggestions = (event) => {
//     event.preventDefault();
//     // while (responseField.firstChild) {
//     //     responseField.removeChild(responseField.firstChild);
//     // };
//     getSuggestions();
// }

// submit.addEventListener('click', displaySuggestions);
