const xhr = new XMLHttpRequest();
const method = 'GET'; //POST
const url = 'http://localhost:8000/tweets'
const responseType = 'json'

xhr.responseType = responseType
xhr.open(method, url)
xhr.onload = function() {
    console.log(xhr.response);
}
xhr.send()