const activeEl = document.querySelector(".fa-bars");
const closeEl = document.querySelector(".fa-x");
const boxEl = document.querySelector(".box");

activeEl.addEventListener("click", () => {
  boxEl.style.marginLeft = "0";
  activeEl.style.display = "none";
  closeEl.style.display = "block";
});

closeEl.addEventListener("click", () => {
  boxEl.style.marginLeft = "-100px";
  activeEl.style.display = "block";
  closeEl.style.display = "none";
});