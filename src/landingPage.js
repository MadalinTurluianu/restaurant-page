import "./style/landingPage.css";

const landingPage = document.createElement("div");
landingPage.className = "landing-page";


const titleContainer = document.createElement("div");
titleContainer.className = "title-container";

const mainTitle = document.createElement("h1");
mainTitle.textContent = "Sushi House"
titleContainer.appendChild(mainTitle);

const mainSubtitle =  document.createElement("h2");
mainSubtitle.textContent = "The best place for sushi lovers!";
titleContainer.appendChild(mainSubtitle);

landingPage.appendChild(titleContainer);


export default landingPage;