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

function removeElement() {
  const removeResultDiv = document.getElementById("removeResult");
  if (arr.length === 0) {
    removeResultDiv.innerHTML = "Array is empty.";
    return;
  }
  let element = document.getElementById("removeElement").value.trim();
  let index = arr.indexOf(element);
  if (index !== -1) {
    arr.splice(index, 1);
    removeResultDiv.innerHTML = `Element '${element}' removed from index no '${index}'. Updated array: [${arr.join(", ")}]`;
  } else {
    removeResultDiv.innerHTML = `Element '${element}' not found in array.`;
  }
}

function checkElement() {
  const checkResultDiv = document.getElementById("checkResult");
  if (arr.length === 0) {
    checkResultDiv.innerHTML = "Array is empty.";
    return;
  }
  let element = document.getElementById("checkElement").value.trim();
  if (arr.includes(element)) {
    let index=arr.indexOf(element);
    checkResultDiv.innerHTML = `Yes, array contains '${element}' at index '${index}'.`;
  } else {
    checkResultDiv.innerHTML = `No, array does not contain '${element}'.`;
  }
}

function emptyArray() {
  arr = [];
  document.getElementById("emptyResult").innerHTML = "Array has been emptied.";
}
