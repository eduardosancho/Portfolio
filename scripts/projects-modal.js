/* const projects_section = document.querySelector('.projects'); // Entire section */
const projects = document.querySelectorAll('.projects > div'); // one, two, three

const projectList = []; // Extract info to recycle
for (let i = 1; i <= 6; i += 1) {
  projectList[i] = {};
  projectList[i].title = projects[i].querySelector('.project-summary > h2');
  projectList[i].technologies = projects[i].querySelector('.technologies');
  projectList[i].thumbnail = projects[i].querySelector('.thumbnail');
}

const projectOne = document.createElement('div'); // Create popup div
projectOne.className = 'show-popup';
projectOne.innerHTML = `
<div class="close-project"><img src="images/times.svg" alt="Close project icon"></div>
`;

const projectOneDescription = document.createElement('p');
projectOneDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.';
const projectOneSeeLive = document.createElement('div');
projectOneSeeLive.innerHTML = `
<button class="see-live" type="button">
    See live<img src="images/ic_download.svg" alt="download-icon">
</button>
`;
const projectOneSeeSource = document.createElement('div');
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
    
    .show-popup .technologies {
        display: flex;
        list-style: none;
        padding-inline-start: 0;
        padding: 2rem 4rem 2rem 4rem;
    }

    .show-popup .thumbnail {
        width: 100vw;
    }
    `;

function openPopup() {
  document.body.appendChild(projectOne);
  projectOne.style.top = '0';
  projectOne.appendChild(projectList[1].title.cloneNode(true));
  projectOne.appendChild(projectList[1].technologies.cloneNode(true));
  projectOne.appendChild(projectList[1].thumbnail.cloneNode(true));
  projectOne.appendChild(projectOneDescription);
  projectOne.appendChild(projectOneSeeLive);
  projectOne.appendChild(projectOneSeeSource);
  document.head.appendChild(style);
  function closePopup() {
    projectOne.style.top = '-100%';
    document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup h2'));
    document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup .technologies'));
    document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup .thumbnail'));
  }
  const closeProject = document.querySelector('.close-project');
  closeProject.addEventListener('click', closePopup); // Click to close
}

const projectBtn = document.querySelector('.see-project');
projectBtn.addEventListener('click', openPopup); // Click to show
