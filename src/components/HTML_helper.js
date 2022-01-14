const htmlGen = (() => {
  function makeP(text = "", classList = "", id = "") {
    const res = document.createElement("p");
    res.innerText = text;
    res.classList = classList;
    res.id = id;
    return res;
  }

  return {
    makeP,
  };
})();

export { htmlGen };
