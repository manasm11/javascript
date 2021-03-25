const express = require('express')
const Sequelize = require('sequelize')

const app = express()
const PORT = 8088

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
    // created_at: {
    //     type: Sequelize.DATE,
    //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    // },
    // updated_at: {
    //     type: Sequelize.DATE,
    //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    // },
},{
    modelName: 'User',
    // timestamps: false,
})

sequelize.sync()

sequelize.authenticate()
    .then(function(){
        console.log('Database Connected Successfully...')
    })
    .catch(function(err){
        console.log('Error while connecting database...')
        console.log(err.original)
    })

app.get('/', function(req, res){
    res.status(200).send({
        status: 1,
        message: 'Welcome to the home page.'
    })
})

// sequelize.authenticate()

app.listen(PORT, function(){
    console.log(`Application running on PORT ${PORT}...`)
})