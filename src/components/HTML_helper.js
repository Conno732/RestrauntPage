const htmlGen = (() => {
  function makeP(text = "", classList = "", id = "") {
    const res = document.createElement("p");
    res.innerText = text;
    res.classList = classList;
    res.id = id;
    return res;
  }

  function makeFoodItem(p_name, p_desc, p_price) {
    const res = document.createElement("div");
    res.classList = "menu-item";
    let name = document.createElement("p");
    name.innerText = p_name;

    const desc = document.createElement("p");
    desc.innerText = p_desc;
    desc.classList.add("textpadding");

    const price = document.createElement("p");
    price.innerText = p_price;

    res.appendChild(name);
    res.appendChild(desc);
    res.appendChild(price);
    return res;
  }

  return {
    makeP,
    makeFoodItem,
  };
})();

export { htmlGen };
