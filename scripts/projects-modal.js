const projects = document.querySelectorAll('.projects > div'); // find all projects in the DOM

const projectList = []; // Extract info to reuse
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

const projectOneDescription = document.createElement('p');
projectOneDescription.textContent = 'Mobile app that displays updated stock data from Financial Modelig Prep API.';

const projectOneSeeLiveSource = document.createElement('div');
projectOneSeeLiveSource.className = 'projectSee';
projectOneSeeLiveSource.innerHTML = `
  <button class="see-live" type="button" onclick="window.open('https://sad-edison-40e613.netlify.app/'); return false;">
    <p>See live</p><img src="images/ic_link.svg" alt="download-icon">
  </button>
  <button class="see-source" type="button" onclick="window.open('https://github.com/eduardosancho/stock-data'); return false;">
    <p>See source</p><img src="images/ic_github_white.svg" alt="github">
  </button>
`;

const projectDescription = document.createElement('p');
projectDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.';

const projectSeeLiveSource = document.createElement('div');
projectSeeLiveSource.className = 'projectSee';
projectSeeLiveSource.innerHTML = `
<button class="see-live" type="button" onclick="window.location.href='https://eduardosancho.github.io/setup_and_mobile_version_skeleton/'">
<p>See live</p><img src="images/ic_link.svg" alt="download-icon">
</button>
<button class="see-source" type="button" onclick="window.location.href='https://github.com/eduardosancho/setup_and_mobile_version_skeleton'">
    <p>See source</p><img src="images/ic_github_white.svg" alt="github">
</button>
`;

// eslint-disable-next-line no-unused-vars
function displayProject(num) {
  projectPopUp.style.top = '0';
  projectPopUp.querySelector('div').appendChild(projectList[num].title.cloneNode(true));
  projectPopUp.appendChild(projectList[num].technologies.cloneNode(true));
  projectPopUp.appendChild(projectList[num].thumbnail.cloneNode(true));
  switch (num) {
    case 1:
      // add class two to thumbnail element in popup
      projectPopUp.querySelector('.thumbnail').classList.add('one');
      projectPopUp.appendChild(projectOneDescription); // Add description
      projectPopUp.appendChild(projectOneSeeLiveSource);
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
    default:
      break;
  }
  projectPopUp.appendChild(projectDescription);
  projectPopUp.appendChild(projectSeeLiveSource);
  function closePopup() {
    projectPopUp.style.top = '-100%';
    setTimeout(() => {
      document.querySelector('.show-popup > .popUpTop').removeChild(document.querySelector('.popUpTop h2'));
      document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup .technologies'));
      document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup .thumbnail'));
    }, 1000);
  }
  const closeProject = document.querySelectorAll('.close-project');
  closeProject.forEach((item) => {
    item.addEventListener('click', closePopup); // Click to close
  });
}

document.body.appendChild(projectPopUp);
