const projects_section = document.querySelector('.projects');  //Entire section
const projects = document.querySelectorAll('.projects > div'); //one, two, three

const projectList = new Array();  //Extract info to recycle
for (let i = 1; i <= 6; i++) {
    projectList[i] = new Object();
    projectList[i].title = projects[i].querySelector('.project-summary > h2');
    projectList[i].technologies = projects[i].querySelector('.technologies');
    projectList[i].thumbnail = projects[i].querySelector('.thumbnail');
}

const project_button = document.querySelector('.see-project');
project_button.addEventListener('click', openPopup); //Click to show
function openPopup() {
    document.body.appendChild(projectOne);
    projectOne.style.top = '0';
    projectOne.appendChild(projectList[1].title);
    projectOne.appendChild(projectList[1].technologies);
    projectOne.appendChild(projectList[1].thumbnail);
    projectOne.appendChild(projectOneDescription);
    projectOne.appendChild(projectOneSeeLive);
    projectOne.appendChild(projectOneSeeSource);
    document.head.appendChild(style);
};

let projectOne = document.createElement('div'); //Create popup div
projectOne.className = 'show-popup';
projectOne.innerHTML = `
<div class="close-project"><img src="images/times.svg" alt="Close project icon"></div>
`;
let projectOneDescription = document.createElement('p');
projectOneDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.';
let projectOneSeeLive = document.createElement('div');
projectOneSeeLive.innerHTML = `
<button class="see-live" type="button">
    See live<img src="images/ic_download.svg" alt="download-icon">
</button>
`;
let projectOneSeeSource = document.createElement('div');
projectOneSeeSource.innerHTML = `
<button class="see-source" type="button">
    See source<img src="images/ic_github.svg" alt="github">
</button>
`;


const style = document.createElement('style');
style.innerHTML = `
    .show-popup {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        color: #1A2236;
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 10;
        top: 100;
        text-align: center;
        overflow-y: scroll !important;
        max-height: 100vh;
    }
    
    .close-project {
        align-self: flex-end;
        margin: 2rem 2rem 0.5rem 2rem;
    }
    
    .technologies {
        display: flex;
        list-style: none;
        padding-inline-start: 0;
        padding: 0.5rem 2rem 0.5rem 2rem;
    }

    .thumbnail {
        width: 100vw;
    }
    `;


//let projectOneModal = document.createElement('div');
//projectOneModal.innerHTML = '<p>CreateElement example</p>';
//projectOneModal.innerHTML = '<p>CreateElement example</p>';
//document.querySelector('.one').appendChild(projectOneModal);



