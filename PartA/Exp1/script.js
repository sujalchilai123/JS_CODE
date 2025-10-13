function calculateTriangleArea() {
  const a = parseFloat(document.getElementById("sideA").value);
  const b = parseFloat(document.getElementById("sideB").value);
  const c = parseFloat(document.getElementById("sideC").value);

  if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.getElementById("triangleResult").textContent = `Area: ${area.toFixed(2)} sq. units`;
  } else {
    document.getElementById("triangleResult").textContent = "Invalid sides for a triangle.";
  }
}

function calculateRectangleArea() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  if (length > 0 && width > 0) {
    const area = length * width;
    document.getElementById("rectangleResult").textContent = `Area: ${area.toFixed(2)} sq. units`;
  } else {
    document.getElementById("rectangleResult").textContent = "Please enter valid dimensions.";
  }
}

function calculateCircleArea() {
  const radius = parseFloat(document.getElementById("radius").value);

  if (radius > 0) {
    const area = Math.PI * radius * radius;
    document.getElementById("circleResult").textContent = `Area: ${area.toFixed(2)} sq. units`;
  } else {
    document.getElementById("circleResult").textContent = "Please enter a valid radius.";
  }
}
