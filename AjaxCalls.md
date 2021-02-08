- [ ] Asynchronous Javascript And XML
  - [ ] AJAX is collection of the above technologies.
  - [ ] Earlier XML was used to transfer data, these days JSON is used.
- [ ] Doesn't blocks the program.

### GET Request
- [ ] const xhr = new XMLHttpRequest(), attributes in xhr
  - [ ] **.open** : A Function call.
    - [ ] method : 'GET', 'POST'
    - [ ] url : The url where request is to be sent.
    - [ ] async : true to make it asynchronous.
  - [ ] **.onprogress** : Assign a function (optional)
    - [ ] Executes when xhr.send() is called.
    - [ ] Preferably used to initiate loaders.
  - [ ] **.responseType**
    - [ ] = 'json' 
    - [ ] This allows to omit the response conversion by JSON.parse.
  - [ ] **.onload** : Assign a function.
    - [ ] Executes when ajax call is completed.
    - [ ] Preferably used to stop loader and render the data.
  - [ ] **.send** : Call the function without any arguments.
    - [ ] To send the request. 💁
  - [ ] .onerror : Assign a function.
    - [ ] Executes when any error occurs while sending/getting request.
    - [ ] Usually handled with some alert messages.
  - [ ] **.onerror**
    - [ ] Usually executes if there is some connection issue.
  - [ ] **.onreadystatechange** : Assign a function.
    - [ ] **OLD METHOD**
    - [ ] There are 5 ready states (0-4).
    - [ ] They can be accessed by xhr.readyState.
    - [ ] The function is executed each time ready state changes.
    - [ ] readyState = 4 means ajax call completed.
  - [ ] **.setRequestHeader** : Set headers in the request.
    - [ ] Headers are key value pairs that provide details for the request.
    - [ ] .setRequestHeader("HTTP_X_REQUESTED_WITH", "XMLHttpRequest")
    - [ ] .setRequestHeader("X-Requested-With", "XMLHttpRequest")
    - [ ] .setRequestHeader("Content-Type", "application/json") // Only in POST request.
- [ ] URLS to play with ajax get request
  - [ ] To play with random data with random fields, http://www.dummy.restapiexample.com/.
  - [ ] To create a api with random data with specific fields,
    1. create random data with specific fields in https://mockaroo.com/.
    2. Copy the data from here and paste it in https://mocki.io/fake-json-api to get a get api url (endpoint).

