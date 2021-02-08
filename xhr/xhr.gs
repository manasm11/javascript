function getData(){
    sendHttpRequest('GET', 'http://7243529274f9.ngrok.io/services/', data=>console.log(data))
}

function postData(){
    // sendHttpRequest('POST', 'http://7243529274f9.ngrok.io/services/create/', data=>console.log(data), {date:"2021-01-07", count:22, verse:"1000"})
    fetch("http://7243529274f9.ngrok.io/services/create/", { 
      
    // Adding method type 
    method: "POST", 
      
    // Adding body or contents to send 
    body: JSON.stringify(
        {
            date:document.getElementById('date').value,
            count: document.getElementById('count').value,
            verse:document.getElementById('verse').value
        }
        ), 
      
    // Adding headers to the request 
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
}) 
  
// Converting to JSON 
.then(response => response.json()) 
  
// Displaying results to console 
.then(json => console.log(json)); 
}

function print_get_data(data){
    final_string = ''
    Object.keys(data.rates).map(key=>final_string+= `<div>1 ${key} = ${data.rates[key]} ${data.base}</div>`)
    document.getElementById('render-here').innerHTML = final_string
}

function sendHttpRequest(method, url, func, data) {
    xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    if (data){
        xhr.setRequestHeader('Content-Type',  'application/json')
        xhr.setRequestHeader('Access-Control-Allow-Headers', '*')
    }
    xhr.onload = function () {
        func(xhr.response);
    };
    xhr.send(JSON.stringify(data));
}