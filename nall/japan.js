const steps = [
    `1. 1990년대 초: 일본 우주개발 초기 — 탐사 계획 착수<br><br>
    일본은 1990년대 초부터 우주 개발에 박차를 가하며 달 탐사에 대한 관심을 키웠다.<br><br>
    일본 우주항공연구개발기구(JAXA)의 전신인 NASDA가 다양한 우주 탐사 임무를 계획하기 시작했다.`,
  
    `2. 1998년: 하야부사(Hayabusa) 미션 시작 — 소행성 탐사를 통한 기술 축적<br><br>
    하야부사 미션은 소행성 탐사와 샘플 수집에 집중하며, 원격 탐사 및 착륙 기술 개발에 큰 도움을 주었다.<br><br>
    이 경험은 후속 달 탐사 임무 준비에 큰 자산이 되었다.`,
  
    `3. 2007년: 가구야(Kaguya) 발사 — 본격적인 달 탐사 임무<br><br>
    일본 최초의 대형 달 탐사선인 가구야(SELENE)가 발사되어 달 표면 및 환경에 대한 상세한 지도 작성과 조사에 성공했다.<br><br>
    다양한 센서와 카메라를 이용해 달의 지형, 중력장, 자성 등을 연구했다.`,
  
    `4. 2013년: 가구야 임무 종료 — 소중한 데이터 확보<br><br>
    가구야 임무는 2013년 성공적으로 종료되었으며, 달에 대한 매우 정밀한 데이터를 과학계에 제공했다.<br><br>
    이를 바탕으로 일본은 다음 단계인 달 표면 탐사 계획에 집중할 수 있었다.`,
  
    `5. 2020년대 초: 유인 달 탐사 및 달 착륙 계획 수립<br><br>
    일본은 미국, 유럽, 인도 등과의 협력을 확대하며 유인 달 탐사 계획을 구체화하였다.<br><br>
    민간 및 국제 협력을 통한 기술 개발과 달 착륙 준비가 활발히 진행 중이다.`,
  
    `6. 향후 계획: 달 표면 탐사 및 장기 거주 연구<br><br>
    일본은 달 착륙을 목표로 하여 로봇 탐사선 발사와 달 기지 건설 연구에 힘쓰고 있다.<br><br>
    장기적으로는 달 거주 및 자원 활용을 위한 기술 개발에 주력할 계획이다.`
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
  