// Button elements
const forBtn = document.getElementById("forLoopBtn");
const whileBtn = document.getElementById("whileLoopBtn");
const doBtn = document.getElementById("doWhileLoopBtn");
const loopButtons = [forBtn, whileBtn, doBtn];

let currentLoop = "for";

// Set initial active button and message
setActiveButton(forBtn);
updateLoopMsg();

// Highlight which button is active
function setActiveButton(selectedBtn) {
    loopButtons.forEach(btn => btn.classList.remove("active"));
    selectedBtn.classList.add("active");
}

// Update message for the selected loop
function updateLoopMsg() {
    const loopNames = { for: "For Loop", while: "While Loop", do: "Do-While Loop" };
    document.getElementById("currentLoopMsg").innerText = `Currently using: ${loopNames[currentLoop]}`;
}

// Button event listeners
forBtn.addEventListener("click", () => {
    currentLoop = "for";
    setActiveButton(forBtn);
    updateLoopMsg();
});
whileBtn.addEventListener("click", () => {
    currentLoop = "while";
    setActiveButton(whileBtn);
    updateLoopMsg();
});
doBtn.addEventListener("click", () => {
    currentLoop = "do";
    setActiveButton(doBtn);
    updateLoopMsg();
});
document.getElementById("generateBtn").addEventListener("click", () => {
    generateTable(currentLoop);
});

// Table generation logic
function generateTable(loopType) {
    const num = parseInt(document.getElementById("num").value);
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    if (isNaN(num) || num == 0) {
        outputDiv.innerHTML = "<p style='color:red'>Please enter a valid number!</p>";
        return;
    }
    let table = "<table><tr><th>Expression</th><th>Result</th></tr>";
    if (loopType === "for") {
        for (let i = 1; i <= 10; i++) {
            table += `<tr><td>${num} × ${i}</td><td>${num * i}</td></tr>`;
        }
    } else if (loopType === "while") {
        let i = 1;
        while (i <= 10) {
            table += `<tr><td>${num} × ${i}</td><td>${num * i}</td></tr>`;
            i++;
        }
    } else if (loopType === "do") {
        let i = 1;
        do {
            table += `<tr><td>${num} × ${i}</td><td>${num * i}</td></tr>`;
            i++;
        } while (i <= 10);
    }
    table += "</table>";
    outputDiv.innerHTML = table;
}
