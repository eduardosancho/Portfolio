const projects = document.querySelectorAll('.projects > div');

const projectList = []; // Extract info to reuse
for (let i = 1; i <= 6; i += 1) {
  projectList[i] = {};
  projectList[i].title = projects[i].querySelector('.project-summary > h2');
  projectList[i].technologies = projects[i].querySelector('.technologies');
  projectList[i].thumbnail = projects[i].querySelector('.thumbnail');
}

const projectPopUp = document.createElement('div');
projectPopUp.className = 'show-popup';

const popUpTop = document.createElement('div');
popUpTop.className = 'popUpTop';
popUpTop.innerHTML = '<img class="close-project" src="images/times.svg" alt="Close project icon">';

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

const projectTwoDescription = document.createElement('p');
projectTwoDescription.textContent = 'Track the deathcount of players from the videogame Elden Ring. Users can input their deathcount and see other people\'s';

const projectTwoSeeLiveSource = document.createElement('div');
projectTwoSeeLiveSource.className = 'projectSee';
projectTwoSeeLiveSource.innerHTML = `
  <button class="see-live" type="button" onclick="window.open('https://eduardosancho.github.io/Leaderboard/dist/index.html'); return false;">
    <p>See live</p><img src="images/ic_link.svg" alt="download-icon">
  </button>
  <button class="see-source" type="button" onclick="window.open('https://github.com/eduardosancho/Leaderboard'); return false;">
    <p>See source</p><img src="images/ic_github_white.svg" alt="github">
  </button>
`;

const projectThreeDescription = document.createElement('p');
projectThreeDescription.textContent = 'Web application that showcases Yu-Gi-Oh! cards. You can like and comment cards.';

const projectThreeSeeLiveSource = document.createElement('div');
projectThreeSeeLiveSource.className = 'projectSee';
projectThreeSeeLiveSource.innerHTML = `
  <button class="see-live" type="button" onclick="window.open('https://yothu.github.io/Yu-Gi-Oh--Card-Data-Base/dist/index.html'); return false;">
    <p>See live</p><img src="images/ic_link.svg" alt="download-icon">
  </button>
  <button class="see-source" type="button" onclick="window.open('https://github.com/eduardosancho/Yu-Gi-Oh--Card-Data-Base'); return false;">
    <p>See source</p><img src="images/ic_github_white.svg" alt="github">
  </button>
`;

const projectFourDescription = document.createElement('p');
projectFourDescription.textContent = 'A hotel reservation app displays all the existing hotels and details of each hotel, allowing the user to reserve the hotel they want.';

const projectFourSeeLiveSource = document.createElement('div');
projectFourSeeLiveSource.className = 'projectSee';
projectFourSeeLiveSource.innerHTML = `
  <button class="see-live" type="button" onclick="window.open('https://reservify.netlify.app/'); return false;">
    <p>See live</p><img src="images/ic_link.svg" alt="download-icon">
  </button>
  <button class="see-source" type="button" onclick="window.open('https://github.com/eduardosancho/reservify-front-end'); return false;">
    <p>See source</p><img src="images/ic_github_white.svg" alt="github">
  </button>
`;

const projectFiveDescription = document.createElement('p');
projectFiveDescription.textContent = 'Desktop app to register own recipes and look at public recipes aswell.';

const projectFiveSeeLiveSource = document.createElement('div');
projectFiveSeeLiveSource.className = 'projectSee';
projectFiveSeeLiveSource.innerHTML = `
  <button class="see-live" type="button" onclick="window.open('https://infinite-stream-75498.herokuapp.com/'); return false;">
    <p>See live</p><img src="images/ic_link.svg" alt="download-icon">
  </button>
  <button class="see-source" type="button" onclick="window.open('https://github.com/eduardosancho/Recipe-App-Capstone'); return false;">
    <p>See source</p><img src="images/ic_github_white.svg" alt="github">
  </button>
`;

const projectSixDescription = document.createElement('p');
projectSixDescription.textContent = 'Mobile app to organize spending and group transactions into categories.';

const projectSixSeeLiveSource = document.createElement('div');
projectSixSeeLiveSource.className = 'projectSee';
projectSixSeeLiveSource.innerHTML = `
  <button class="see-live" type="button" onclick="window.open('https://rocky-cliffs-67926.herokuapp.com/'); return false;">
    <p>See live</p><img src="images/ic_link.svg" alt="download-icon">
  </button>
  <button class="see-source" type="button" onclick="window.open('https://github.com/eduardosancho/budget'); return false;">
    <p>See source</p><img src="images/ic_github_white.svg" alt="github">
  </button>
`;

// eslint-disable-next-line no-unused-vars
function displayProject(num) {
  projectPopUp.style.top = '0';
  projectPopUp.appendChild(popUpTop);
  projectPopUp.querySelector('div').appendChild(projectList[num].title.cloneNode(true));
  projectPopUp.appendChild(projectList[num].technologies.cloneNode(true));
  projectPopUp.appendChild(projectList[num].thumbnail.cloneNode(true));
  switch (num) {
    case 1:
      projectPopUp.querySelector('.thumbnail').classList.add('one');
      projectPopUp.appendChild(projectOneDescription);
      projectPopUp.appendChild(projectOneSeeLiveSource);
      break;
    case 2:
      projectPopUp.querySelector('.thumbnail').classList.add('two');
      projectPopUp.appendChild(projectTwoDescription);
      projectPopUp.appendChild(projectTwoSeeLiveSource);
      break;
    case 3:
      projectPopUp.querySelector('.thumbnail').classList.add('three');
      projectPopUp.appendChild(projectThreeDescription);
      projectPopUp.appendChild(projectThreeSeeLiveSource);
      break;
    case 4:
      projectPopUp.querySelector('.thumbnail').classList.add('four');
      projectPopUp.appendChild(projectFourDescription);
      projectPopUp.appendChild(projectFourSeeLiveSource);
      break;
    case 5:
      projectPopUp.querySelector('.thumbnail').classList.add('five');
      projectPopUp.appendChild(projectFiveDescription);
      projectPopUp.appendChild(projectFiveSeeLiveSource);
      break;
    case 6:
      projectPopUp.querySelector('.thumbnail').classList.add('six');
      projectPopUp.appendChild(projectSixDescription);
      projectPopUp.appendChild(projectSixSeeLiveSource);
      break;
    default:
      break;
  }
  function closePopup() {
    projectPopUp.style.top = '-100%';
    setTimeout(() => {
      if (document.querySelector('.show-popup').textContent !== '') {
        document.querySelector('.show-popup > .popUpTop').removeChild(document.querySelector('.popUpTop > h2'));
        document.querySelector('.show-popup').removeChild(document.querySelector('.popUpTop'));
        document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup .technologies'));
        document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup .thumbnail'));
        document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup p'));
        document.querySelector('.show-popup').removeChild(document.querySelector('.show-popup .projectSee'));
      }
    }, 1000);
  }
  const closeProject = document.querySelector('.close-project');
  closeProject.addEventListener('click', closePopup);
}

document.body.appendChild(projectPopUp);
