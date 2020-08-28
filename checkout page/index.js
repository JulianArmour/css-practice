const counters = document.querySelectorAll(".qty");

for (const counter of counters) {
  const quantityElem = counter.querySelector(".qty__num");
  counter.querySelector(".qty__minus").onclick = () => {
    const countStr = quantityElem.textContent;
    if (Number(countStr) > 0)
      quantityElem.textContent = String(Number(countStr) - 1);
  }
}