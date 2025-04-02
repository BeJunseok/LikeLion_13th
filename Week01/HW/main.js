function updatePrice(id, adjustment) {
  const p = document.getElementById(id);
  let curPrice = parseInt(p.textContent.replace("₩", "").replace(",", ""));

  curPrice += adjustment;
  if (curPrice < 0) {
    curPrice = 0;
  }

  p.textContent = `₩${curPrice.toLocaleString()}`;
}

document.getElementById("increase").addEventListener("click", () => {
  updatePrice("price", 10000);
});

document.getElementById("decrease").addEventListener("click", () => {
  updatePrice("price", -10000);
});
