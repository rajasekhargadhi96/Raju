const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

// Make "No" button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth * 0.7);
  const y = Math.floor(Math.random() * window.innerHeight * 0.7);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// "Yes" button triggers hearts
yesBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ffe6f0";
  alert("Yay! Love accepted 💖");

  // Create floating hearts
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
});