const countdownDate = new Date("April 17, 2026 00:00:00").getTime(); // change date if needed

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // When countdown ends
  if (distance < 0) {
    clearInterval(timer);

    document.getElementById("countdown").innerHTML = "🎉 Time's up!";
    document.getElementById("wait-text").style.display = "none";

    // Create button
    const button = document.createElement("button");
    button.innerText = "Click Here 💖";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.marginTop = "20px";
    button.style.cursor = "pointer";

    // Redirect on click
    button.onclick = function () {
      window.location.href = "home.html";
    };

    document.querySelector(".container").appendChild(button);
  }
}, 1000);
