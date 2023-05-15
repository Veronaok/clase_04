import express from "express"
import ProjectRoute from './routes/projects.routes.js'


const app = express()

app.use(express.urlencoded({extended: true}))

app.use('/', express.static('public'))

app.use('/', ProjectRoute)





app.listen(2222, function(){
    console.log('El servidor esta corriendo en el host http://localhost:2222')
})