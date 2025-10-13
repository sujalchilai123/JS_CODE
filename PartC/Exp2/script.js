document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("myForm").addEventListener("submit", handleSubmit);

  const fields = ["name", "address", "city", "state", "mobile", "email"];
  fields.forEach(field => {
    document.getElementById(field).addEventListener("input", function () {
      document.getElementById(field + "Error").innerHTML = "";
    });
  });

  document.querySelectorAll('input[name="gender"]').forEach(radio => {
    radio.addEventListener("change", function () {
      document.getElementById("genderError").innerHTML = "";
    });
  });
});

function handleSubmit(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let address = document.getElementById("address").value.trim();
  let city = document.getElementById("city").value.trim();
  let state = document.getElementById("state").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');
  let mobile = document.getElementById("mobile").value.trim();
  let email = document.getElementById("email").value.trim();

  let namePattern = /^[A-Za-z ]+$/;
  let mobilePattern = /^[0-9]{10}$/;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let isValid = true;

  if (name === "" || !namePattern.test(name)) {
    document.getElementById("nameError").innerHTML = "Enter valid name (alphabets only).";
    isValid = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  if (address === "") {
    document.getElementById("addressError").innerHTML = "Address cannot be empty.";
    isValid = false;
  } else {
    document.getElementById("addressError").innerHTML = "";
  }

  if (city === "" || !namePattern.test(city)) {
    document.getElementById("cityError").innerHTML = "Enter valid city name.";
    isValid = false;
  } else {
    document.getElementById("cityError").innerHTML = "";
  }

  if (state === "" || !namePattern.test(state)) {
    document.getElementById("stateError").innerHTML = "Enter valid state name.";
    isValid = false;
  } else {
    document.getElementById("stateError").innerHTML = "";
  }

  if (!gender) {
    document.getElementById("genderError").innerHTML = "Select gender.";
    isValid = false;
  } else {
    document.getElementById("genderError").innerHTML = "";
  }

  if (!mobilePattern.test(mobile)) {
    document.getElementById("mobileError").innerHTML = "Enter 10-digit mobile number.";
    isValid = false;
  } else {
    document.getElementById("mobileError").innerHTML = "";
  }

  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML = "Enter valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  if (isValid) {
    localStorage.setItem("studentName", name);
    window.location.href = "success.html";
  }
}
