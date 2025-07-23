const planets = document.querySelectorAll(".planet-button");

function getNonOverlappingPosition(existingPositions, radius = 100) {
  const maxAttempts = 200;
  let attempt = 0;
  while (attempt < maxAttempts) {
    const x = Math.random() * (window.innerWidth * 0.8) + window.innerWidth * 0.1;
    const y = Math.random() * (window.innerHeight * 0.8) + window.innerHeight * 0.1;

    const tooClose = existingPositions.some(pos => {
      const dx = x - pos.x;
      const dy = y - pos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < radius * 1.5; // 1.5배 거리 확보
    });

    if (!tooClose) return { x, y };
    attempt++;
  }
  return { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // fallback
}

function arrangePlanetsRandomly() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const existing = [];

  planets.forEach((planet, i) => {
    // 초기 중앙
    planet.style.left = `${centerX - 70}px`;
    planet.style.top = `${centerY - 70}px`;
    planet.style.opacity = 1;

    // 위치 계산 후 이동
    setTimeout(() => {
      const { x, y } = getNonOverlappingPosition(existing);
      existing.push({ x, y });

      planet.style.left = `${x - 70}px`;
      planet.style.top = `${y - 70}px`;
      planet.style.transform = "rotate(720deg)";
    }, 500 + i * 200);
  });
}

planets.forEach(planet => {
  planet.addEventListener("click", () => {
    const link = planet.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});

window.onload = arrangePlanetsRandomly;
