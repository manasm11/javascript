const express = require('express')
const Joi = require('joi')

const app = express();
app.use(express.json())

const courses = [
    { id: 1, name: 'Course 1'},
    { id: 2, name: 'Course 2'},
    { id: 3, name: 'Course 3'},
]

app.get('/', (req, res)=>{
    res.send('Hello Worldly')
});

app.get('/api/courses', (req, res)=>{
    res.send(courses)
});

app.post('/api/courses', (req, res)=>{
    const {error} = validateCourse(req.body)
    if(error) return res.status(400).send(error)
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.status(201).send(course)
})

app.get('/api/courses/:id', (req, res)=>{
    const course = getCourseFromID(req.params.id)
    if(!course) return res.status(404).send('The course with given id not found.')
    const {error} = validateCourse(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    res.send(course)
})

app.put('/api/courses/:id', (req, res)=>{
    const course = getCourseFromID(req.params.id)
    if(!course) return res.status(404).send('Course with specified id not found.')
    const {error} = validateCourse(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    course.name = req.body.name
    res.status(200).send(course)
})

app.delete('/api/courses/:id', (req, res)=>{
    const course = getCourseFromID(req.params.id)
    if(!course) return res.status(404).send('Course with specified id not found.')
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})

// STARTING SERVER
const PORT=process.env.PORT || 3002;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}...`))

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    const result = schema.validate(course)
    return result
}

function getCourseFromID(id){
    const course = courses.find(c=>id == c.id)
    return course
}