import * as services from '../services/projects.services.js'
import * as views from '../views/projects.views.js'


function getProjects(req, res){

    services.getProjects({deleted: true})
    .then(function(projects){
        res.send(views.createProjectListPage(projects))
    })
}

function getProjectDetail(req, res){
    const idProject = req.params.idProject

    services.getProjectById(idProject)
    .then (function (project){
        if (project){
            res.send(views.createProjectPage(project))
        }
        else{
            res.send(views.createPage('Producto no encontrado', '<p>El proyecto no se encontro</p>'))
        }
    })
            
}

function createNewProjectPage(req, res){
    res.send(views.createNewProjectPage())
}

function createProject(req, res){
    const project = {
        name: req.body.name, 
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section
    }
    services.createProject(project)
        .then(function(newProject){
            res.send(views.createPage('Proyecto creado', `<p>Se ha creado correctamente el proyecto ${newProject.name}</p>`))
        })
        .catch(function(error){
            res.send(views.createPage('Error creando el proyecto', `<p>Se a producido un error al crear el proyecto</p>`))
        })
}

function editProjectPage(req, res){
    const id = req.params.idProject
    services.getProjectById(id)
    .then(function(project){
        if(project){
            res.send(views.formEditProject(project))
        }
        else{
            res.send(views.createPage('El proyecto no se encontro', '<p>El proyecto no existe</p>'))
        }
    })
    
}

function editProject(req, res){
    const id = req.params.idProject
        const project = {
        name: req.body.name, 
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section
    }
    services.editProject(id, project)
        .then(function(project){
            if(project){
                res.send(views.createPage('El proyecto se modifico', `<p>El proyecto ${project.name} se modifico con exito`))
            }
            else{
                res.send(views.createPage('No se encontro el proyecto', `<p>No existe el proyecto</p>`))
            }
        })
        .catch(function(error){
            res.send(views.createPage('Error al modificar el proyecto', `<p>Se ha producido un error al modificar el proyecto</p>`))
        })
}

function deleteProjectPage(req, res){
    const id = req.params.idProject
    services.getProjectById(id)
    .then(function(project){
        if(project){
            res.send(views.formDeleteProject(project))
        }
        else{
            res.send(views.createPage('El proyecto no se encontro', '<p>El proyecto no existe</p>'))
        }
    })
    
}

function deleteProject(req, res){
    const id = req.parse.idProject

    services.deleteProject(id)
        .then(function (project){
            if(project){
                res.send(views.createPage('Proyecto eliminado', `<p>El proyecto ${project.name} ha sido eliminado</p>`))
            }
            else{
                res.send(views.createPage('Proyecto no encontrado', `<p>El proyecto no existe</p>`))
            }
        })
        .catch(function(error){
            res.send(views.createPage('Error eliminando el proyecto', `<p>Se ha producido un error eliminando el proyecto</p>`))
        })
}

export{
    getProjects,
    getProjectDetail,
    createNewProjectPage,
    createProject,
    editProjectPage,
    editProject,
    deleteProjectPage,
    deleteProject
}