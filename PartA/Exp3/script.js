function reverseString() {
  const str = document.getElementById("reverseInput").value;
  if (!str) {
    document.getElementById("reverseResult").innerText = "Please enter a string!";
    return;
  }
  const reversed = str.split("").reverse().join("");
  document.getElementById("reverseResult").innerText = "Reversed String: " + reversed;
}

function replaceCharacter() {
  const str = document.getElementById("replaceInput").value;
  const oldChar = document.getElementById("oldChar").value;
  const newChar = document.getElementById("newChar").value;

  if (!str || !oldChar || !newChar) {
    document.getElementById("replaceResult").innerText = "Please fill all fields!";
    return;
  }

  if (!str.includes(oldChar)) {
    document.getElementById("replaceResult").innerText = `Character "${oldChar}" not found in the string!`;
    return;
  }

  const result = str.split(oldChar).join(newChar);
  document.getElementById("replaceResult").innerText = "Result: " + result;
}


function checkPalindrome() {
  const str = document.getElementById("palindromeInput").value;
  if (!str) {
    document.getElementById("palindromeResult").innerText = "Please enter a string!";
    return;
  }
  const reversed = str.split("").reverse().join("");
  const result = str === reversed ? "It is a Palindrome!" : "Not a Palindrome!";
  document.getElementById("palindromeResult").innerText = result;
}
