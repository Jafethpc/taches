const editBtn = document.querySelectorAll(".editBtn");
const saveInput = document.querySelectorAll(".saveinput");
const saveBtn = document.querySelectorAll(".saveBtn");
const task = document.querySelectorAll(".taskTitle");

for (let i = 0; i < editBtn.length; i++) {
  editBtn[i].addEventListener("click", () => {
    saveInput[i].style.opacity = 100;
    saveInput[i].style.display = "block";
    saveBtn[i].style.opacity = 100;
    saveBtn[i].style.display = "block";
    editBtn[i].style.opacity = 0;
    editBtn[i].style.display = "none";
    task[i].style.opacity = 0;
    task[i].style.display = "none";
  });
}
