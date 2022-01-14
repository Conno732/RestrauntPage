import { htmlGen } from "./HTML_helper";

//Create the contact and return the div containing it
const contact = () => {
  const contact = document.createElement("div");
  contact.id = "contact-content";

  contact.appendChild(htmlGen.makeP("Sorry "));
  contact.appendChild(
    htmlGen.makeP(
      "We are close while indefinetly until the salad shortage is over"
    )
  );

  return contact;
};

export { contact };
