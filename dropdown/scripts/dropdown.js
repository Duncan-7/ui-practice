// const menuButton = document.querySelector(".button");

// menuButton.addEventListener("click", () => {
//   const items = document.querySelector(".menu-items");
//   items.classList.toggle("hidden");
// });

// menuButton.addEventListener(
//   "mouseover",
//   () => (menuButton.style.cursor = "pointer")
// );

function createDropDown(button, menu) {
  let menuButton = document.querySelector(`.${button}`);

  menuButton.addEventListener("click", () => {
    const items = document.querySelector(`.${menu}`);
    items.classList.toggle("hidden");
  });

  menuButton.addEventListener(
    "mouseover",
    () => (menuButton.style.cursor = "pointer")
  );
}

createDropDown("button1", "menu1");

createDropDown("button2", "menu2");
