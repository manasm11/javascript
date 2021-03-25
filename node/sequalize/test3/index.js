const express = require('express')
const Sequelize = require('sequelize')

const app = express()

const sequelize = new Sequelize('pg', "pg", 'testing123321', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate()