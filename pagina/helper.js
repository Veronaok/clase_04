function createProjectList(projects){
    let html = '<ul>'

    for (let i = 0; i < projects.length; i++){
        html += '<li>' + projects[i].name + '</li>'
    }

    html += '</ul>'
    return html
}


export {
    createProjectList
}
export default {
    createProjectList
}