import SalmonNigiri from "./images/SalmonNigiri.png";
import TunaNigiri from "./images/TunaNigiri.png";
import ShrimpNigiri from "./images/ShrimpNigiri.png";
import EllNigiri from "./images/EllNigiri.png";
import SalmonSashimi from "./images/SalmonSashimi.png";
import TunaSashimi from "./images/TunaSashimi.png";
import ShrimpSashimi from "./images/ShrimpSashimi.png";
import EllSashimi from "./images/EllSashimi.png";
import SalmonMaki from "./images/SalmonMaki.png";
import AvocadoMaki from "./images/AvocadoMaki.png";
import SalmonTeriyakiMaki from "./images/SalmonTeriyakiMaki.png";
import PhiladelphiaClassic from "./images/PhiladelphiaClassic.png";
import Canada from "./images/Canada.png";
import CrunchCrab from "./images/CrunchCrab.png";
import VulcanSalmon from "./images/VulcanSalmon.png";
import BakedSalmon from "./images/BakedSalmon.png";
import DragonTuna from "./images/DragonTuna.png";

import "./style/menu.css";

const menu = document.createElement("div");
menu.className = "menu";

const nigiriMenu = [
  { name: "Salmon Nigiri", img: SalmonNigiri },
  { name: "Tuna Nigiri", img: TunaNigiri },
  { name: "Shrimp Nigiri", img: ShrimpNigiri },
  { name: "Ell Nigiri", img: EllNigiri },
];

const sashimiMenu = [
  { name: "Salmon Sashimi", img: SalmonSashimi },
  { name: "Tuna Sashimi", img: TunaSashimi },
  { name: "Shrimp Sashimi", img: ShrimpSashimi },
  { name: "Ell Sashimi", img: EllSashimi },
];

const makiMenu = [
  { name: "Salmon Maki", img: SalmonMaki },
  { name: "Avocado Maki", img: AvocadoMaki },
  { name: "Salmon Teriyaki Maki", img: SalmonTeriyakiMaki },
];

const rollsMenu = [
  { name: "Philadelphia Classic", img: PhiladelphiaClassic },
  { name: "Canada", img: Canada },
  { name: "Crunch Crab", img: CrunchCrab },
  { name: "Vulcan Salmon", img: VulcanSalmon },
  { name: "Baked Salmon", img: BakedSalmon },
  { name: "Dragon Tuna", img: DragonTuna },
];

function createMenuElement(arr, menuName) {
  const menuList = document.createElement("ul");

  const menuTitle = document.createElement("h2");
  menuTitle.textContent = menuName;

  menuList.appendChild(menuTitle);

  for (let item of arr) {
    const menuItem = document.createElement("li");

    const itemImage = document.createElement("img");
    itemImage.src = item.img;
    itemImage.alt = item.name;
    menuItem.appendChild(itemImage);

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;
    menuItem.appendChild(itemName);

    menuList.appendChild(menuItem);
  }

  return menuList;
}

const nigiriList = createMenuElement(nigiriMenu, "Nigiri");
menu.appendChild(nigiriList);

const sashimiList = createMenuElement(sashimiMenu, "Sashimi");
menu.appendChild(sashimiList);

const makiList = createMenuElement(makiMenu, "Maki");
menu.appendChild(makiList);

const rollsList = createMenuElement(rollsMenu, "Rolls");
menu.appendChild(rollsList);

export default menu;
