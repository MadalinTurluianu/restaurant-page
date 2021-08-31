import "./style/main.css";
import landingPage from "./landingPage";
import menu from "./menu";
import contacts from "./contacts";
import { nav, homeBtn, menuBtn, contactsBtn } from "./nav";

const mainDiv = document.getElementById("content");

mainDiv.appendChild(landingPage);
mainDiv.appendChild(nav);

function changeCurrentPage() {
    mainDiv.innerHTML = "";
    mainDiv.appendChild(nav);
    mainDiv.appendChild(this);
}

homeBtn.addEventListener("click", changeCurrentPage.bind(landingPage));
menuBtn.addEventListener("click", changeCurrentPage.bind(menu));
contactsBtn.addEventListener("click", changeCurrentPage.bind(contacts));


