function updatePrice(nightlyId, totalId, adjustment, nights = 5) {
  const nightlyEl = document.getElementById(nightlyId);
  const totalEl = document.getElementById(totalId);

  let nightlyText = nightlyEl.textContent
    .split("/박")[0]
    .replace("₩", "")
    .replace(",", "")
    .trim();
  let nigthlyPrice = parseInt(nightlyText) + adjustment;

  if (nigthlyPrice < 0) {
    nigthlyPrice = 0;
  }

  nightlyEl.textContent = `₩${nigthlyPrice.toLocaleString()} /박`;
  totalEl.textContent = `· 총액 ₩${(nigthlyPrice * nights).toLocaleString()}`;
}

document.getElementById("increase").addEventListener("click", () => {
  updatePrice("nightly", "total", 10000);
});

document.getElementById("decrease").addEventListener("click", () => {
  updatePrice("nightly", "total", -10000);
});
