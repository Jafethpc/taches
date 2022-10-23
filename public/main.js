const editBtn = document.querySelectorAll(".editBtn");
const editContainer = document.querySelectorAll(".editContainer");

for (let i = 0; i < editBtn.length; i++) {
  editBtn[i].addEventListener("click", () => {
    const heightProp = window
      .getComputedStyle(editContainer[i])
      .getPropertyValue("height");
    if (heightProp === "0px") {
      editContainer[i].style.height = "170px";
    } else if (heightProp === "170px") {
      editContainer[i].style.height = "0px";
    }
  });
}

const addTaskBtn = document.querySelector(".addTaskBtn");

const addContainer = document.querySelector(".addContainer");

addTaskBtn.addEventListener("click", () => {
  const heightProp = window
    .getComputedStyle(addContainer)
    .getPropertyValue("height");

  if (heightProp === "0px") {
    addContainer.style.height = "170px";
    addTaskBtn.innerHTML = "-";
    addTaskBtn.style.padding = "0 0 5px 0";
  } else if (heightProp === "170px") {
    addContainer.style.height = "0px";
    addTaskBtn.innerHTML = "+";
    addTaskBtn.style.padding = "0";
  }
});

const addBtn = document
  .querySelector(".addBtn")
  .addEventListener("click", () => {
    addContainer.style.height = "0px";
  });
