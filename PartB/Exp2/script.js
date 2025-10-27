 let myarr = [];
    let maxSize = 0;

    function setSize() {
      const n = parseInt(document.getElementById("sizeInput").value);
      if (isNaN(n) || n <= 0) {
        showOutput("Please enter a natural number!");
        return;
      }
      maxSize = n;
      myarr = []; 
      document.getElementById("addSection").style.display = "block";
      document.getElementById("checkSection").style.display = "block";
      showOutput("Size limit set = " + maxSize);
      showOutput("Current Array: " + JSON.stringify(myarr));
    }

    function appendElement() {
      if (maxSize === 0) {
        showOutput("Set the array size first!");
        return;
      }
      if (myarr.length >= maxSize) {
        showOutput("Overflow! Cannot add more than " + maxSize + " elements.");
        return;
      }

      const raw = document.getElementById("valueInput").value.trim();
      if (!raw) {
        showOutput(" Please enter a value!");
        return;
      }

      let value;
      try {
        value = JSON.parse(raw);
      } catch {
        value = raw; 
      }

      myarr.push(value);
      showOutput(" Element added: " + JSON.stringify(value));
      showOutput(" Current Array (" + myarr.length + "/" + maxSize + "): " + JSON.stringify(myarr));
      document.getElementById("valueInput").value = "";
    }

    function checkIfArray() {
      const idx = parseInt(document.getElementById("indexInput").value);
      if (isNaN(idx) || idx < 0 || idx >= myarr.length) {
        showOutput(" Invalid index!");
        return;
      }
      const el = myarr[idx];
      if (Array.isArray(el)) {
        showOutput("Element at index " + idx + " IS an array: " + JSON.stringify(el));
      } else {
        showOutput(" Element at index " + idx + " is NOT an array (" + typeof el + "). Value: " + JSON.stringify(el));
      }
    }

    function showOutput(msg) {
      const out = document.getElementById("output");
      out.innerHTML += msg + "\n\n";
      out.scrollTop = out.scrollHeight;
    }