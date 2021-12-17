const projects = document.querySelectorAll('.projects > div'); // one, two, three


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
<button class="see-live close-project" type="button" onclick="window.location.href='https://eduardosancho.github.io/setup_and_mobile_version_skeleton/'">
<p>See live</p><img src="images/ic_link.svg" alt="download-icon">
</button>
<button class="see-source close-project" type="button" onclick="window.location.href='https://github.com/eduardosancho/setup_and_mobile_version_skeleton'">
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
    }

    .show-popup .popUpTop {
        display: flex;
        flex-direction: row-reverse;
        width: 90vw;
        justify-content: space-between;
    }

    .show-popup h2 {
        margin-bottom: 0.5rem;
    }
    
    .close-project {
        align-self: flex-start;
        margin: 1.5rem 1.5rem 0.5rem 0;
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

    .show-popup .two {
        background-image: url(../images/project_thumbnail_2.svg);
    }

    .show-popup .three {
        background-image: url(../images/project_thumbnail_3.svg);
    }

    .show-popup .four {
        background-image: url(../images/project_thumbnail_4.svg);
    }

    .show-popup .five {
        background-image: url(../images/project_thumbnail_5.svg);
    }

    .show-popup .six {
        background-image: url(../images/project_thumbnail_6.svg);
    }

    .show-popup p {
        font-size: 4vw;
        max-width: 85vw;
    }

    .show-popup .projectSee {
        display: flex;
        flex-direction: column;
        align-self: center;
        margin: 0;
        margin-bottom: 7vw;
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
        height: 4vw;
    }
    .show-popup button p {
        margin: 0.5rem;
    }

    @media only screen and (min-width: 992px) {
        .show-popup h2 {
            font-size: 4vw;
        }

        .show-popup .technologies {
            width: 40vw;
            height: 7vw;
            margin-top: 2vw;
            margin-bottom: 2vw;
        }

        .show-popup .technologies li {
            font-size: 0.9rem;
            width: 12vw;
        }

        .show-popup .thumbnail {
            display: initial;
        }

        .show-popup .projectSee {
            flex-direction: row;
            max-width: 70vw;
        }

        .show-popup button img {
        height: 2.5vw;
    }

        .show-popup p {
        max-width: 70vw;
        font-size: 2vw;
        margin: 5rem 2rem 5rem 8vw;
        }
    }
    `;

function displayProject(num) {
    document.body.appendChild(projectPopUp);
    projectPopUp.style.top = '0';
    projectPopUp.querySelector('div').appendChild(projectList[num].title.cloneNode(true));
    projectPopUp.appendChild(projectList[num].technologies.cloneNode(true));
    projectPopUp.appendChild(projectList[num].thumbnail.cloneNode(true));
    switch (num) {
        case 1:
            //add class two to thumbnail element in popup
            projectPopUp.querySelector('.thumbnail').classList.add('one');
            break;
        case 2:
            projectPopUp.querySelector('.thumbnail').classList.add('two');
            break;
        case 3:
            projectPopUp.querySelector('.thumbnail').classList.add('three');
            break;
        case 4:
            projectPopUp.querySelector('.thumbnail').classList.add('four');
            break;
        case 5:
            projectPopUp.querySelector('.thumbnail').classList.add('five');
            break;
        case 6:
            projectPopUp.querySelector('.thumbnail').classList.add('six');
            break;
    }
    projectPopUp.appendChild(projectDescription);
    projectPopUp.appendChild(projectSeeLiveSource);
    document.head.appendChild(style);
    function closePopup() {
        projectPopUp.style.top = '-100%';
        document.querySelector('.show-popup > .popUpTop').removeChild(document.querySelector('.popUpTop h2'));
        document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup .technologies'));
        document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup .thumbnail'));
    }
    const closeProject = document.querySelectorAll('.close-project');
    closeProject.forEach((item) => {
        item.addEventListener('click', closePopup); // Click to close
    })
}