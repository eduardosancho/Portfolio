const projects_section = document.querySelector('.projects');
const projects = document.querySelectorAll('.projects > div'); //one, two, three

const projectList = new Array();
for (let i = 1; i <= 6; i++){
    projectList[i] = new Object();
    projectList[i].title = projects[i].querySelector('.project-summary > h2');
    projectList[i].technologies = projects[i].querySelector('.technologies');
    projectList[i].thumbnail = projects[i].querySelector('.thumbnail');
}

const project_button = document.querySelector('.see-project');

project_button.addEventListener('click', openPopup);

function openPopup(){

    document.body.appendChild(div); 
    div.style.top='0';


}

let div = document.createElement('div');
div.id = 'content';
div.className = 'note';
div.innerHTML = '<p>CreateElement example</p>';

const style = document.createElement('style');
style.innerHTML = `
    .note {
        background-color: yellow;
        color:red;
        width: 90vw;
        height: 90vh;
        position: fixed;
        z-index: 100000;
        top: 100;
        margin: 5vw;
        border-radius: 20px;
        text-align: center;
    }
    `;
document.head.appendChild(style);


//let projectOneModal = document.createElement('div');
//projectOneModal.innerHTML = '<p>CreateElement example</p>';
//projectOneModal.innerHTML = '<p>CreateElement example</p>';
//document.querySelector('.one').appendChild(projectOneModal);



