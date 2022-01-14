//Create the contact and return the div containing it
const contact = () => {
  const contact = document.createElement("div");

  const aboveText = document.createElement("p");
  aboveText.innerText = "We currently do not have a phone yet, sorry";

  contact.appendChild(aboveText);

  return contact;
};

export { contact };
