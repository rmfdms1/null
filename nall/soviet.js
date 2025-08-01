const steps = [
    `1. 1957년 10월 4일: 스푸트니크 1호 발사 — 세계 최초 인공위성<br><br>
    소련이 세계 최초로 인공위성 스푸트니크 1호를 성공적으로 발사하며 우주 시대의 막을 열었다.<br><br>
    이는 냉전 체제에서 소련의 기술력을 과시하며 미국과 우주 경쟁을 본격화하는 계기가 되었다.`,
  
    `2. 1961년 4월 12일: 유리 가가린의 우주 비행 — 인류 최초 유인 우주 비행 성공<br><br>
    소련 우주비행사 유리 가가린이 <a href="jab6.html" target="_blank">보스토크 1호</a>를 타고 지구 궤도를 돌며 인류 최초 유인 우주 비행에 성공하였다.<br><br>
    이는 소련의 우주 기술 우위를 세계에 보여주는 상징적인 사건이었다.`,
  
    `3. 1963년: 루나 프로그램 시작 — 무인 달 탐사 본격화<br><br>
    소련은 <a href="jab7.html" target="_blank">루나 프로그램</a>을 통해 무인 탐사선을 잇따라 발사하며 달 궤도 진입, 착륙, 샘플 회수 실험을 진행하였다.<br><br>
    1966년 루나 9호는 세계 최초로 달에 무인 착륙에 성공했다.`,
  
    `4. 1968년 9월 12일: 루나 14호 발사 — 달 궤도 탐사<br><br>
    루나 14호가 달 궤도에 진입하여 다양한 과학 임무를 수행하며 달 환경 연구를 확대하였다.<br><br>
    이는 소련이 달 착륙을 위한 기술적 준비를 강화하는 단계였다.`,
  
    `5. 1970년: 루나 16호 — 세계 최초 달 샘플 무인 회수 성공<br><br>
    루나 16호가 달 표면에서 샘플을 채취하여 지구로 무인 귀환에 성공하였다.<br><br>
    이는 달 탐사 역사상 첫 무인 샘플 회수 임무로 기록되었다.`,
  
    `6. 1976년: 루나 24호 — 마지막 무인 샘플 반환 임무<br><br>
    루나 24호는 소련의 마지막 무인 달 샘플 반환 임무로, 성공적으로 달 표본을 지구로 가져왔다.<br><br>
    이후 소련은 유인 달 탐사 대신 다른 우주 분야에 집중하게 되었다.`,
  
    `7. 1970년대 후반 이후: 유인 달 탐사 실패와 중단<br><br>
    소련은 유인 달 착륙 계획인 <a href="jab8.html" target="_blank">N1 로켓</a> 개발에 실패하며 유인 달 탐사 계획을 중단하였다.<br><br>
    이는 미국 아폴로 계획에 대응하기 위한 시도였으나, 기술적 난관으로 인해 실행되지 못했다.`,
  
    `8. 1980년대 이후: 우주정거장과 다른 우주 프로그램에 집중<br><br>
    소련은 우주정거장 프로그램인 <a href="jab9.html" target="_blank">살류트, 미르</a>에 집중하며 지구 저궤도 우주 개발에 힘썼다.<br><br>
    달 탐사 대신 다른 우주 분야에서 우주 기술을 발전시키는 전략으로 방향을 전환하였다.`
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
  