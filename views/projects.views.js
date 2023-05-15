function createProjectListPage(projects){
    let html = '<h1>Lista de proyectos</h1>'
    html += '<ul>'
    for (let i = 0; i < projects.length; i++){
        html += `<li>${projects[i].name} <a href="/projects/${projects[i]._id}">Ver</a> <a href="/projects/${projects[i]._id}/edit">Modificar</a> <a href="/projects/${projects[i]._id}/delete">Eliminar</a></li>`
    }
    html += '</ul>'
    
    return createPage('Lista de proyectos', html)
}

function createProjectPage(project){
    let html = `<h1>${project.name}</h1>`
    html += `<p>Link: ${project.link}</p>`
    html += `<p>Seccion: ${project.section}</p>`

    return createPage(project.name, html)
}

function createPage(title, content) {
    let html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'

    html += '<link rel="stylesheet" href="/css/styles.css">'  

    html += '<title>' + title + '</title></head></body>'

    html += '<a href="/">Inicio</a> | <a href="./mobile.html">Mobile</a> | <a href="./landing.html">Landing Page</a> | <a href="./web-app.html">Web App</a> | <a href="./e-commerce.html">E-commerce</a> | <a href="./games.html">Games</a> | <a href="./projects/nuevo">Crear nuevo proyecto</a> '

    html += content
    html += '</body></html>'
    return html
}

function createNewProjectPage(){
    let html = `<h1>Crear nuevo proyecto</h1>`
    html += `<form action="/projects/nuevo" method="POST" enctype="application/x-www-form-urlencoded">
            <label for="name">Nombre
                <input type="text" name="name" id="name">
            </label>

            <label for="description">Descripcion
                <input name="description" id="description" cols="38" rows="10"></textarea>
            </label>

            <label for="link">Link al repositorio
                <input type="text" name="link" id="link">
            </label>

            <label for="formFile" class="form-label">Imagen
                <input class="form-control" type="file" id="formFile">
            </label>

            <label for="technologies">Tecnologias utilizadas
                <input name="technologies" id="technologies" cols="38" rows="10"></input>
            </label>

            <label for="section">Seccion
                <input type="text" name="section" id="section">
            </label>

            <input type="submit" value="Crear">

    </form>`

    return createPage('Crear nuevo proyecto', html)
}

function formEditProject(project){
    let html = `<h1>Editar proyecto #${project._id}</h1>`
    html += `<form action="/projects/${project._id}/edit" method="POST" enctype="application/x-www-form-urlencoded">
            <label for="name">Nombre
                <input type="text" name="name" id="name" value="${project.name}">
            </label>

            <label for="description">Descripcion
                <input name="description" id="description" value="${project.description}"/>
            </label>

            <label for="link">Link al repositorio
                <input type="text" name="link" id="link" value="${project.link}">
            </label>

            <label for="formFile" class="form-label">Imagen
                <input class="form-control" type="file" id="formFile" value="${project.img}">
            </label>

            <label for="technologies">Tecnologias utilizadas
                <input name="technologies" id="technologies" value="${project.technologies}">
            </label>

            <label for="section">Seccion
                <input type="text" name="section" id="section" value="${project.section}">
            </label>

            <button type="submit">Editar</button>

    </form>`

    return createPage('Modificar proyecto', html)
}
function formDeleteProject(project){
    let html = `<h1>Eliminar proyecto #${project._id}</h1>`

    html += `<h1>${project.name}</h1>`
    html += `<p>Link: ${project.link}</p>`
    html += `<p>Seccion: ${project.section}</p>`


    html += `<form action="/projects/${project._id}/delete" method="POST" enctype="application/x-www-form-urlencoded">
        <p>Estas seguro que queres eliminar el proyecto ${project.name}?</p>
        <button type="submit">Eliminar</button>
    </form>`
     return createPage('Eliminar proyecto', html)
}


export{
    createProjectListPage,
    createProjectPage,
    createPage,
    createNewProjectPage,
    formEditProject,
    formDeleteProject,
}