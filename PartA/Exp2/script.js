let currentLoop = "for";

document.getElementById("forLoopBtn").addEventListener("click", ()=> {
    currentLoop = "for";
});
document.getElementById("whileLoopBtn").addEventListener("click", ()=> {
    currentLoop = "while";
});
document.getElementById("doWhileLoopBtn").addEventListener("click", ()=> {
    currentLoop = "do";
});
document.getElementById("generateBtn").addEventListener("click", ()=> {
    generateTable(currentLoop);
});

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
