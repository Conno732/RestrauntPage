import { htmlGen } from "./HTML_helper";

//Create the menu and return the div containing it
const menupage = () => {
  const menu = document.createElement("div");
  menu.id = "menu-content";
  const menucontent = document.createElement("div");
  menucontent.id = "menu-container";

  menu.appendChild(menucontent);

  menucontent.appendChild(
    htmlGen.makeFoodItem(
      "Salad Tower",
      "This tower of salad is great for parties, families and any other events",
      "5$"
    )
  );
  menucontent.appendChild(
    htmlGen.makeFoodItem(
      "Taller Salad Tower",
      "This salad tower is meant for an even bigger appetite",
      "7$"
    )
  );
  menucontent.appendChild(
    htmlGen.makeFoodItem(
      "Tallest Salad Tower",
      "This is the tallest we can provide, can feed an entire village",
      "10$"
    )
  );
  menucontent.appendChild(
    htmlGen.makeFoodItem(
      "Smaller Salad Tower",
      "This salad tower is meant for a smaller appetite",
      "4$"
    )
  );
  menucontent.appendChild(
    htmlGen.makeFoodItem(
      "Smallest Salad Tower",
      "This is the smallest we can provide. It might feed an ant",
      "2$"
    )
  );
  menucontent.appendChild(
    htmlGen.makeFoodItem(
      "Soup",
      "If you don't like salad, this should be enough for you.",
      "32$"
    )
  );

  return menu;
};

export { menupage };
