/* const projects_section = document.querySelector('.projects'); // Entire section */
const projects = document.querySelectorAll('.projects > div'); // one, two, three

/* const projectThumbnail = document.createElement('div');
projectThumbnail.innerHTML = `
<img src="images/project_thumbnail_2.svg">
`;
document.querySelector('.end').appendChild(projectThumbnail); */

const projectList = []; // Extract info to recycle
for (let i = 1; i <= 6; i += 1) {
    projectList[i] = {};
    projectList[i].title = projects[i].querySelector('.project-summary > h2');
    projectList[i].technologies = projects[i].querySelector('.technologies');
    projectList[i].thumbnail = projects[i].querySelector('.thumbnail');
}

const projectPopUp = document.createElement('div'); // Create popup div
projectPopUp.className = 'show-popup';
projectPopUp.innerHTML = `
<div class="popUpTop"><img class="close-project" src="images/times.svg" alt="Close project icon"></div>
`;

const projectDescription = document.createElement('p');
projectDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.';

const projectSeeLiveSource = document.createElement('div');
projectSeeLiveSource.className = 'projectSee';
projectSeeLiveSource.innerHTML = `
<button class="see-live close-project" type="button">
<p>See live</p><img src="images/ic_link.svg" alt="download-icon">
</button>
<button class="see-source close-project" type="button">
    <p>See source</p><img src="images/ic_github_white.svg" alt="github">
</button>
`;

const style = document.createElement('style');
style.innerHTML = `
    .show-popup {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: white;
        color: #1A2236;
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 10;
        top: 100;
        overflow-y: scroll !important;
        max-height: 100vh;
        font-family: 'Poppins', sans-serif;
        font-size: 6vw;
        padding-inline-start: 6vw;
        float: left;
    }

    .show-popup .popUpTop {
        display: flex;
        flex-direction: row-reverse;
        width: 100vw;
        justify-content: space-between;
    }

    .show-popup h2 {
        margin-bottom: 0.5rem;
    }
    
    .close-project {
        align-self: flex-start;
        margin: 2rem 3rem 0.5rem 2rem;
        float: right;
    }
    
    .show-popup .technologies {
        display: flex;
        align-items: center;
        padding-inline-start: 0;
        justify-content: space-between;
        height: 10vw;
        width: 85vw;
        font-weight: 300;
    }

    .show-popup .technologies li {
        list-style: none;
        text-align: center;
        padding-top: 0.7em;
        padding-bottom: 0.7em;
        white-space: nowrap;
        border: solid black 1px;
        font-size: 3vw;
        color: #1a2236;
        width: 25vw;
    }

    .show-popup .thumbnail {
        width: 88vw;
        min-height: 53vw;
        box-shadow: 0 0 50px 5px black inset;
    }

    .show-popup .projectSee {
        display: flex;
        flex-direction: column;
        align-self: center;
        margin: 0;
        gap: 10px;
        padding-right: 12vw;
    }

    .show-popup button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        width: 80vw;
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        font-weight: 500;
        background-color: white;

    }

    .show-popup button img {
        margin: 0.5rem;
        position: absolute;
        right: 20vw;
    }
    .show-popup button p {
        margin: 0.5rem;
    }

    @media only screen and (min-width: 992px) {
        .show-popup .projectSee {
            flex-direction: row;
    }
    `;

function displayProject(num) {
    document.body.appendChild(projectPopUp);
    projectPopUp.style.top = '0';
    projectPopUp.querySelector('div').appendChild(projectList[num].title.cloneNode(true));
    projectPopUp.appendChild(projectList[num].technologies.cloneNode(true));
    projectPopUp.appendChild(projectList[num].thumbnail.cloneNode(true));

    

    /* switch (num) {
        case 1:
            //add class two to thumbnail element in popup
            projectPopUp.querySelector('.thumbnail').className = 'one';
            console.log(num);
            break;
        case 2:
            projectPopUp.querySelector('.thumbnail').className = 'two';
            console.log(num);
            break;
    } */
    


    console.log(projectPopUp.querySelector('.thumbnail'));
    console.log('project info');
    projectPopUp.appendChild(projectDescription);
    projectPopUp.appendChild(projectSeeLiveSource);
    document.head.appendChild(style);
    function closePopup() {
        projectPopUp.style.top = '-100%';
        document.querySelector('.show-popup > .popUpTop').removeChild(document.querySelector('.popUpTop h2'));
        document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup .technologies'));
        document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup .thumbnail'));
        console.log('close'); //ERASE ME
    }
    const closeProject = document.querySelectorAll('.close-project');
    closeProject.forEach((item) => {
        item.addEventListener('click', closePopup); // Click to close
    })

    console.log('popup'); //ERASE ME
}