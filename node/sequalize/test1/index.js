const {sequelize, user} = require('./models')
const express = require('express')
const Joi = require('joi')

const app = express()
app.use(express.json())

app.post('/users', async (req, res)=>{
    const err = validateUser(req.body)
    if(err) return res.send(err.details[0].message)
    const {name, email, age} = req.body
    try {
        const user_ = await user.create({ name, email, age })
        return res.send(user_)
    } catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})

app.get('/users', async(req, res)=>{
    try {return res.send(await user.findAll())}
    catch(err) {return res.status(500).send(err)}
})

app.get('/users/:uuid', async(req, res)=>{
    try{return res.send(await user.findOne({where: {uuid: req.params.uuid}}))}
    catch(err) {return res.status(500).send(err)}
})

// STARTING SERVER
const PORT = process.env.PORT || 5000
app.listen({port: PORT}, async ()=>{
    console.log('### Server listening on port', PORT)
    await sequelize.authenticate()
    // await sequelize.sync({alter: true})
    console.log('DATABSE CONNECTED !!!')
} )

// UTILITY FUNCTIONS
function validateUser(user_){
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        age: Joi.string().max(2).required(),
    })
    return schema.validate(user_).error
}