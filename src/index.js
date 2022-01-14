import "./styles.css";
import { homepage } from "./components/Home";
import { menupage } from "./components/Menu";
import { contact } from "./components/Contact";

//should the components take in the parent and append itself?
//  or does it return itself and content Controller appends it?
//current choice: content controller appends the returned div.

document.getElementById("header").addEventListener("click", (e) => {
  const id = e.target.id;
  switch (id) {
    case "Home":
      contentController.appendContent(homepage(), id);
      break;
    case "Menu":
      contentController.appendContent(menupage(), id);
      break;
    case "Contact":
      contentController.appendContent(contact(), id);
      break;
    default:
      break;
  }
});

const contentController = (() => {
  const content = document.getElementById("content");
  let lastBtn = {
    btn: document.getElementById("Home"),
  };

  function start() {
    lastBtn.btn.classList.add("btn-active");
  }

  start();

  function appendContent(contentDiv, id) {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(contentDiv);
    selectButton(id, lastBtn);
  }

  function selectButton(id = "Home", lastBtn) {
    if (id === lastBtn.btn.id) return;
    const btn = document.getElementById(id);
    btn.classList.add("btn-active");
    lastBtn.btn.classList = "btn";
    lastBtn.btn = btn;
  }

  return { appendContent };
})();

contentController.appendContent(homepage());
