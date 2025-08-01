const steps = [
    `1. 2007년: 인도 우주연구기구(ISRO) 달 탐사 계획 발표 — 시작의 신호탄<br><br>
    인도 <a href="jab13.html" target="_blank">ISRO</a>는 2007년에 공식적으로 달 탐사 계획을 발표하며, 달 연구에 본격 착수했다.<br><br>
    이 계획은 인도의 우주 기술 역량 강화를 위한 중요한 첫걸음이었다.`,
  
    `2. 2008년: 찬드라얀-1 (Chandrayaan-1) 발사 — 첫 번째 달 탐사선<br><br>
    2008년 10월 22일, <a href="jab14.html" target="_blank">찬드라얀-1</a>이 발사되었다.<br><br>
    이는 인도의 첫 번째 달 탐사선으로, 다양한 센서와 레이더를 탑재하여 달의 표면과 지형, 물의 존재 여부를 탐사했다.<br><br>
    이 미션은 성공적으로 수행되어 달의 얼음과 수소 존재 가능성을 확인하는 성과를 냈다.`,
  
    `3. 2019년: 찬드라얀-2 (Chandrayaan-2) 임무 — 착륙 도전과 교훈<br><br>
    2019년 7월 22일, <a href="jab15.html" target="_blank">찬드라얀-2</a>가 발사되었다.<br><br>
    이 미션은 궤도선, 착륙선, 그리고 탐사차를 포함하는 복합 임무로, 달 남극 부근 착륙을 시도했다.<br><br>
    그러나 착륙선은 착륙 과정에서 통신이 두절되며 실패했지만,<br><br>
    궤도선은 여전히 활발히 임무를 수행하며 귀중한 데이터를 보내고 있다.`,
  
    `4. 2020년대: 달 탐사 기술 발전과 국제 협력 강화<br><br>
    인도는 찬드라얀 시리즈를 통해 축적한 기술력을 바탕으로, 달 탐사 기술을 고도화하고 있다.<br><br>
    국제 우주 기관들과의 협력을 확대하며, 미래의 유인 달 탐사와 장기 임무 준비에 박차를 가하고 있다.`,
  
    `5. 향후 계획: 찬드라얀-3 및 유인 달 탐사 목표<br><br>
    <a href="jab16.html" target="_blank">찬드라얀-3</a>은 착륙선과 탐사차 중심의 미션으로 계획 중이며,<br><br>
    완전한 착륙 성공과 달 남극 탐사를 목표로 하고 있다.<br><br>
    인도는 또한 유인 달 탐사에 대한 연구와 개발을 시작하며,<br><br>
    장기적으로는 달에 인간이 머무를 수 있는 기반 마련을 위해 노력 중이다.`,
  
    `6. 장기 목표: 우주 탐사와 자원 활용<br><br>
    인도는 달을 넘어서 화성 탐사 등 심우주 탐사에 도전하고 있으며,<br><br>
    달 자원 활용, 우주 과학 연구, 우주 기술 자립 등 다방면에서 우주 강국으로 도약하는 것을 목표로 하고 있다.`
  ];
  
  let current = 0;
  
  const description = document.getElementById("description");
  const rocket = document.getElementById("rocket");
  const flash = document.getElementById("star-flash");
  const markersContainer = document.getElementById("markers-container");
  const progressBar = document.getElementById("progress-bar");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const menuButton = document.querySelector('.menu-button');
const sideMenu = document.querySelector('.side-menu');

// 메뉴 버튼 클릭시 열기/닫기 토글 (선택사항)
menuButton.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

// 마우스가 사이드 메뉴 영역 밖으로 나가면 닫기
sideMenu.addEventListener('mouseleave', () => {
  sideMenu.classList.remove('open');
});

// 마우스가 메뉴 버튼에 올라가면 메뉴 열기
menuButton.addEventListener('mouseenter', () => {
  sideMenu.classList.add('open');
});
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
  