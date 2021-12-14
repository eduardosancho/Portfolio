const projects_section = document.querySelector('.projects');
const projects = document.querySelectorAll('.projects > div'); //one, two, three

const projectList = new Array();
for (let i = 1; i <= 6; i++){
    projectList[i] = new Object();
    projectList[i].title = projects[i].querySelector('.project-summary > h2');
    projectList[i].technologies = projects[i].querySelector('.technologies');
    projectList[i].thumbnail = projects[i].querySelector('.thumbnail');
}

let projectOneModal = document.createElement('div');
projectOneModal.innerHTML = '<p>CreateElement example</p>';
document.querySelector('.one').appendChild(projectOneModal);



