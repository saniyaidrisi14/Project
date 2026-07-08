const themeBtn = document.querySelector(".theme-btn");
const main = document.querySelector("main");
const input = document.querySelector("input");
const select = document.querySelector("select");
const addBtn = document.querySelector(".add");
const taskshow = document.querySelector(".task-show");

themeBtn.addEventListener("click", () => {
  const isDark = main.classList.toggle("dark");
  if (isDark) {
    themeBtn.textContent = "Light-Mode";
  } else {
    themeBtn.textContent = "Dark-Mode";
  }
  
});

let total = 0;
let completed = 0;
let pending = 0;

const totalTask = document.querySelector(".total span");
const completeTask = document.querySelector(".complete span");
const pendingTask = document.querySelector(".pending span");

function updateRecords() {
    totalTask.textContent = total;
    completeTask.textContent = completed;
    pendingTask.textContent = pending;
}

addBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const btnWrapper = document.createElement("div");
  const labelValue = document.createElement("span");
  const editBtn = document.createElement("button");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  div.classList.add("mytask");
  btnWrapper.classList.add("btnwrapper");
  labelValue.textContent = select.value;
  editBtn.textContent = "Edit";
  completeBtn.textContent = "Completed";
  deleteBtn.textContent = "Delete";

  if (input.value.trim() === "") {
    return;
  }

  total++;
  pending++;

   updateRecords()

  let value = input.value.trim();
  p.textContent = value;

  btnWrapper.append(labelValue, editBtn, completeBtn, deleteBtn);

  div.append(p, btnWrapper);
  taskshow.append(div);

  input.value = "";

  deleteBtn.addEventListener("click", () => {
    const isConfirmed = confirm("Are you sure you want to delete this task?");

    if (!isConfirmed) {
       return
    } 
      if (clicked) {
        total--;
        completed--;
    } else {
        total--;
        pending--;
    }

    div.remove();

    updateRecords()
  });

  let clicked = false;

  completeBtn.addEventListener("click", () => {
    if (!clicked) {
      labelValue.style.display = "none";
      editBtn.style.display = "none";
      completeBtn.style.backgroundColor = "grey";
      completeBtn.style.color = "white";
      p.style.textDecoration = "line-through";
      p.style.color = "grey";
      completed++;
      pending--;
    } else {
      labelValue.style.display = "";
      editBtn.style.display = "";
      completeBtn.style.backgroundColor = "";
      completeBtn.style.color = "";
      p.style.textDecoration = "";
      p.style.color = "";
      completed--;
      pending++;
    }

    clicked = !clicked;

     updateRecords()
  });

  editBtn.addEventListener("click", () => {
    const einput = document.createElement("input");
    const save = document.createElement("button");
    einput.classList.add("newInp");
    save.textContent = "Save";
    einput.value = p.textContent;
    div.replaceChild(einput, p);
    btnWrapper.replaceChild(save, editBtn);
    completeBtn.style.display = "none";

    save.addEventListener("click", () => {
      if(einput.value===""){
        return
      }
      p.textContent = einput.value;
      div.replaceChild(p, einput);
      btnWrapper.replaceChild(editBtn, save);
      completeBtn.style.display = "";
    });
  });
});