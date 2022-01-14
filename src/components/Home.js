import homeImage from "../images/home.jpg";
import { htmlGen } from "./HTML_helper";

//Create the hompage and return the div containing it
const homepage = () => {
  const home = document.createElement("div");

  home.classList = "tab-content";

  home.appendChild(
    htmlGen.makeP("Food that makes you say '?!?!'", "attention")
  );

  const img = new Image();
  img.src = homeImage;
  img.classList = "images";

  home.appendChild(img);

  home.appendChild(
    htmlGen.makeP("Order now for pickup or delivery.", "bottom")
  );

  return home;
};

export { homepage };
