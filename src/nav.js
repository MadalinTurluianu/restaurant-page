import "./style/nav.css";

const nav = document.createElement("nav");
nav.className = "navigation";

const homeBtn = document.createElement("button");
homeBtn.textContent = "Home";

const menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";

const contactsBtn = document.createElement("button");
contactsBtn.textContent = "Contacts";


nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(contactsBtn);

export {
    nav,
    homeBtn,
    menuBtn,
    contactsBtn
};