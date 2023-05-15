import express from 'express'
import * as controllers from '../controllers/projects.controllers.js'


const route = express.Router()


route.get('/projects', controllers.getProjects)

route.get('/projects/nuevo', controllers.createNewProjectPage)
route.post('/projects/nuevo', controllers.createProject)

route.get('/projects/:idProject/edit', controllers.editProjectPage)
route.post('/projects/:idProject/edit', controllers.editProject)

route.get('/projects/:idProject/delete', controllers.deleteProjectPage)
route.post('/projects/:idProject/delete', controllers.deleteProjectPage)

route.get('/projects/:idProject', controllers.getProjectDetail)

export default route