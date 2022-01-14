//Create the menu and return the div containing it
const menupage = () => {
  const menu = document.createElement("div");

  const title = document.createElement("p");
  title.innerText = "Menu";

  menu.appendChild(title);

  return menu;
};

export { menupage };
