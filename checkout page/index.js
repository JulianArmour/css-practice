const counters = document.querySelectorAll(".qty");

for (const counter of counters) {
  const quantityElem = counter.querySelector(".qty__num");

  counter.querySelector(".qty__minus").onclick = () => {
    const countTxt = quantityElem.textContent;
    if (Number(countTxt) > 0)
      quantityElem.textContent = String(Number(countTxt) - 1);
  };

  counter.querySelector(".qty__plus").onclick = () => {
    const countTxt = quantityElem.textContent;
    quantityElem.textContent = String(Number(countTxt) + 1);
  };
}