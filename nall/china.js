const steps = [
  `1. 2007년 10월 24일: 창어 1호 발사 — 중국의 첫 달 탐사선<br><br>
  중국 최초의 달 탐사선인 창어 1호가 발사되어 달 궤도에 진입하였다.<br><br>
  이는 중국의 우주 개발 역사에서 중대한 전환점이 되었으며,<br>
  달 표면 탐사와 과학 연구의 기초 자료를 제공하였다.`,

  `2. 2013년 12월 2일: 창어 3호 착륙선 성공적 달 착륙<br><br>
  창어 3호 착륙선이 성공적으로 달 표면 ‘월령 3구역’에 착륙하였다.<br><br>
  이는 1976년 이후 최초로 달에 착륙한 탐사선이며,<br>
  달 표면에서의 정밀 탐사와 영상 촬영을 수행하였다.`,

  `3. 2019년 1월 3일: 창어 4호 — 인류 최초 달 뒷면 착륙<br><br>
  창어 4호가 인류 최초로 달의 뒷면에 착륙에 성공하였다.<br><br>
  달의 뒷면은 지구와 직접 통신이 불가능한 지역으로,<br>
  중계 위성을 통한 통신 체계를 구축하여 탐사 임무를 완수하였다.<br><br>
  이는 우주 탐사 기술과 통신 기술의 뛰어난 성과로 평가받았다.`,

  `4. 2020년 5월 14일: 창어 5호 발사 — 달 샘플 반환 임무<br><br>
  창어 5호가 발사되어 달 표면에 착륙 후 샘플을 채취하고<br>
  지구로 귀환하는 첫 중국 임무로 기록되었다.<br><br>
  이는 44년 만에 인류가 달에서 샘플을 지구로 가져온 최초의 사건이기도 하다.`,

  `5. 2020년 12월 17일: 창어 5호의 성공적인 귀환<br><br>
  창어 5호가 성공적으로 지구에 귀환하며 달 샘플을 전달하였다.<br><br>
  이를 통해 중국은 우주 탐사 선진국 대열에 합류하였으며,<br>
  과학 연구와 미래 우주 임무의 기반을 확보하였다.`,

  `6. 2022년 5월: 향후 달 탐사 계획 발표 — 유인 탐사와 기지 건설 목표<br><br>
  중국은 장기적 계획으로 유인 달 탐사와 달 기지 건설을 목표로 삼고,<br>
  차세대 달 탐사선을 개발 중이다.<br><br>
  이는 우주 강국으로서 입지를 강화하고,<br>
  미래 우주 탐사 경쟁에서 중요한 역할을 할 것으로 기대된다.`
];

let current = 0;

const description = document.getElementById("description");
const rocket = document.getElementById("rocket");
const flash = document.getElementById("star-flash");
const markersContainer = document.getElementById("markers-container");
const progressBar = document.getElementById("progress-bar");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function renderMarkers() {
  markersContainer.innerHTML = "";
  for (let i = 0; i < steps.length; i++) {
    const marker = document.createElement("div");
    marker.className = "marker";
    marker.addEventListener("click", () => {
      current = i;
      updateContent();
    });
    markersContainer.appendChild(marker);
  }
}

function updateContent() {
  description.innerHTML = steps[current];

  const barWidth = progressBar.offsetWidth;
  const maxIndex = steps.length - 1;
  const stepWidth = maxIndex > 0 ? barWidth / maxIndex : 0;

  rocket.style.left = `${stepWidth * current - rocket.offsetWidth / 2}px`;
  flash.style.left = `${stepWidth * current - flash.offsetWidth / 2}px`;

  flash.style.opacity = 1;
  flash.style.top = "20px";
  setTimeout(() => {
    flash.style.opacity = 0;
  }, 400);

  const markers = markersContainer.querySelectorAll(".marker");
  markers.forEach((m, i) => {
    m.classList.toggle("active", i === current);
  });

  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === maxIndex;
  prevBtn.style.opacity = prevBtn.disabled ? "0.4" : "1";
  nextBtn.style.opacity = nextBtn.disabled ? "0.4" : "1";
}

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    updateContent();
  }
});
nextBtn.addEventListener("click", () => {
  if (current < steps.length - 1) {
    current++;
    updateContent();
  }
});

window.onload = () => {
  renderMarkers();
  updateContent();
};
