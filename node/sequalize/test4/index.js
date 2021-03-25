const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    username: 'test4_user',
    password: 'testing321',
    database: 'test4_db',
    dialect: 'postgres',
})

sequelize.authenticate()
    .then(()=>console.log('Connected to database successfully !!!'))
    .catch((e)=>{console.log('Error while connecting database...'); console.log(e.original)})

sequelize.sync();
// sequelize.sync({ force: true, match: /^test/ });

class User extends Sequelize.Model{}

User.init({
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.ENUM('1', '0'),
        defaultValue: '1',
    }
},{
    modelName: 'users',
    sequelize,
})

const express = require('express')
const app = express()
const PORT = 8090
app.get('/', function(req, res){
    return res.send({message: 'HELLO'})
})

app.listen(PORT, ()=>console.log(`Application running on PORT ${PORT}...`))