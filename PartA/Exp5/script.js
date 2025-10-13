function startCountdown() {
  const endDateInput = document.getElementById("endDate").value;
  if (!endDateInput) {
    document.getElementById("countdown").innerHTML = "Please select a valid date and time.";
    return;
  }

  const endDate = new Date(endDateInput).getTime();
  const now = new Date().getTime();

  if (endDate <= now) {
    document.getElementById("countdown").innerHTML = "Please enter a future date and time.";
    return;
  }

  const interval = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = endDate - now;

    if (timeRemaining < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "Countdown Expired!";
      return;
    }

    const seconds = Math.floor(timeRemaining / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    const remMonths = months % 12;
    const remDays = days % 30;
    const remHours = hours % 24;
    const remMinutes = minutes % 60;
    const remSeconds = seconds % 60;

    document.getElementById("countdown").innerHTML =
      `${years}y : ${remMonths}m : ${remDays}d : ${remHours}h : ${remMinutes}m : ${remSeconds}s`;
  }, 1000);
}
