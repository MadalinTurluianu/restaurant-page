const menu = document.createElement("ul");

const menuList = ["nigiri", "sashimi", "rolls"];

function createItem(item) {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    console.log(listItem);
    return listItem;
}

let newItem = createItem(menuList[0]);

menu.appendChild(newItem);



export default menu;