import "./styles.css";
import { homepage } from "./components/Home";
import { menupage } from "./components/Menu";
import { contact } from "./components/Contact";

//should the components take in the parent and append itself?
//  or does it return itself and content Controller appends it?
//current choice: content controller appends the returned div.

document.getElementById("header").addEventListener("click", (e) => {
  switch (e.target.id) {
    case "Home":
      contentController.appendContent(homepage());
      break;
    case "Menu":
      contentController.appendContent(menupage());
      break;
    case "Contact":
      contentController.appendContent(contact());
      break;
    default:
      break;
  }
});

const contentController = (() => {
  const content = document.getElementById("content");
  let loaded;

  function appendContent(contentDiv) {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(contentDiv);
  }

  return { appendContent };
})();

contentController.appendContent(homepage());
