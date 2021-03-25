const express = require('express')

const PORT = 8087

app = express()

app.get('/', function(res, res){
    return res.send({message: 'HELLO from get request'})
})

app.post('/', function(res, res){
    return res.send({message: 'HELLO from post request'})
})

app.delete('/', function(res, res){
    return res.send({message: 'HELLO from delete request'})
})

app.put('/', function(res, res){
    return res.send({message: 'HELLO from put request'})
})

app.listen(PORT, function(){console.log(`Application running on PORT ${PORT}...`)})