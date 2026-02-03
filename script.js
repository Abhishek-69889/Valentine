/* ===============================
   🌹 CURSOR ROSE PETALS (FIXED)
================================ */
let lastPetalTime = 0;

document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastPetalTime < 40) return; // throttle
  lastPetalTime = now;

  const petals = 4;
  const gap = 40;

  for (let i = 0; i < petals; i++) {
    const petal = document.createElement("div");
    petal.className = "rose-petal";
    petal.textContent = "🌹";
    document.body.appendChild(petal);

    gsap.set(petal, {
      x: e.clientX + (i - petals / 2) * gap,
      y: e.clientY,
      scale: Math.random() * 0.4 + 0.6,
      opacity: 1
    });

    gsap.to(petal, {
      y: window.innerHeight + 80,
      rotation: Math.random() * 360,
      opacity: 0,
      duration: 2.2,
      ease: "power1.in",
      onComplete: () => petal.remove()
    });
  }
});

/* ===============================
   😈 NO BUTTON ESCAPE
================================ */
const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseenter", () => {
  const x = (Math.random() - 0.5) * 300;
  const y = (Math.random() - 0.5) * 200;

  gsap.to(noBtn, {
    x,
    y,
    duration: 0.3,
    ease: "power2.out"
  });
});

/* ===============================
   ❤️ YES BUTTON TRANSITION
================================ */
document.getElementById("yes-btn").addEventListener("click", () => {
  // Switch pages
  document.getElementById("invite-section").classList.add("hidden");
  document.getElementById("celebration").classList.remove("hidden");

  // Play video with sound
  const video = document.getElementById("loveVideo");

  video.muted = false;
  video.volume = 1;
  video.currentTime = 0;

  video.play().catch(err => {
    console.error("Video play failed:", err);
  });
});



/* ===============================
   🌟 FLOATING BACKGROUND
================================ */
const bgLayer = document.getElementById("bg-layer");

function spawnSymbol() {
  const span = document.createElement("span");
  span.textContent = ["❤️", "🌹", "⭐"][Math.floor(Math.random() * 3)];
  bgLayer.appendChild(span);

  const size = Math.random() * 16 + 16;
  const x = Math.random() * window.innerWidth;

  gsap.set(span, {
    x,
    y: window.innerHeight + 40,
    fontSize: size
  });

  gsap.to(span, {
    y: -100,
    rotation: Math.random() * 360,
    duration: 12 + Math.random() * 6,
    ease: "none",
    onComplete: () => span.remove()
  });
}

setInterval(spawnSymbol, 300);
