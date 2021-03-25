// DATABASE
const Sequelize = require('sequelize')

const sequelize = new Sequelize('pg', "pg", 'testing123321', {
    host: 'localhost',
    dialect: 'postgres'
})

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
    },
    rollNo: {
        type: Sequelize.INTEGER,
    },
    status: {
        type: Sequelize.ENUM('0', '1'),
        defaultValue: '1',
    },
},{
    modelName: 'User',
})

// sequelize.authenticate()
//     .then(function(){
//         console.log('Database Connected Successfully...')
//     })
//     .catch(function(err){
//         console.log('Error while connecting database...')
//         console.log(err.original)
//     })

// sequelize.sync()

// ENDPOINTS
const express = require('express')
const app = express()
const PORT = 8088
app.use(express.json())

app.get('/', function(req, res){
    res.status(200).send({
        status: 1,
        message: 'Welcome to the home page.'
    })
})

app.post('/user', async function(req, res){
    await User.create(req.body)
    res.send({message: 'User Created !', status: 1})
})

app.listen(PORT, function(){
    console.log(`Application running on PORT ${PORT}...`)
})