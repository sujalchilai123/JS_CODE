let arr = [];
let arraySize = 0;

function setArraySize() {
  arraySize = parseInt(document.getElementById("arraySize").value);
  const elementInputsDiv = document.getElementById("elementInputs");
  const createResultDiv = document.getElementById("createResult");
  elementInputsDiv.innerHTML = "";
  createResultDiv.innerHTML = "";
  arr = [];

  if (isNaN(arraySize) || arraySize <= 0) {
    elementInputsDiv.innerHTML = "Please enter a valid number of elements.";
    return;
  }

  for (let i = 0; i < arraySize; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Element ${i + 1}`;
    input.id = `element${i}`;
    elementInputsDiv.appendChild(input);
  }

  const createBtn = document.createElement("button");
  createBtn.textContent = "Create Array";
  createBtn.onclick = createArray;
  elementInputsDiv.appendChild(createBtn);
}

function createArray() {
  arr = [];
  for (let i = 0; i < arraySize; i++) {
    const value = document.getElementById(`element${i}`).value.trim();
    if (value === "") {
      document.getElementById("createResult").innerHTML = "Please enter all elements.";
      return;
    }
    arr.push(value);
  }
  document.getElementById("createResult").innerHTML = `Array created: [${arr.join(", ")}]`;
}

function appendObject() {
  const appendResultDiv = document.getElementById("appendResult");
  if (arr.length === 0) {
    appendResultDiv.innerHTML = "Please create an array first.";
    return;
  }
  let input = document.getElementById("objectInput").value.trim();
  if (input === "" || !input.includes(":")) {
    appendResultDiv.innerHTML = "Enter object in key:value format.";
    return;
  }
  let [key, value] = input.split(":");
  let obj = {};
  obj[key.trim()] = value.trim();
  arr.push(obj);
  appendResultDiv.innerHTML = `Object appended. Updated array: ${JSON.stringify(arr)}`;
}
