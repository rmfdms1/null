const quizzes = {
    usa: generateQuizzes("usa"),
    china: generateQuizzes("china"),
    soviet: generateQuizzes("soviet"),
    japan: generateQuizzes("japan"),
    india: generateQuizzes("india")
  };
  
  function generateQuizzes(nation) {
    const quiz = [];
    for (let i = 0; i < 20; i++) {
      const a = Math.floor(Math.random() * 10);
      const b = Math.floor(Math.random() * 10);
      quiz.push({ q: `${a} + ${b} = ?`, a: a + b });
    }
    return quiz;
  }
  
  const quizContainer = document.querySelector(".quiz-container");
  const pillars = document.querySelectorAll(".pillar");
  let currentNation = null;
  let currentIndex = 0;
  let correctStreak = 0;
  
  pillars.forEach(pillar => {
    pillar.addEventListener("click", () => {
      currentNation = pillar.dataset.nation;
      currentIndex = 0;
      correctStreak = 0;
      showQuiz();
    });
  });
  
  function showQuiz() {
    const q = quizzes[currentNation][currentIndex];
    quizContainer.innerHTML = `
      <div><strong>${currentNation.toUpperCase()}</strong> 퀴즈 ${currentIndex + 1}/20</div>
      <div style="margin: 20px 0; font-size: 24px;">${q.q}</div>
      <input id="answer" type="number" style="font-size: 18px; padding: 5px;" />
      <button onclick="checkAnswer()" style="margin-left: 10px; padding: 6px 10px; font-size: 16px;">확인</button>
    `;
    document.getElementById("answer").focus();
  }
  
  function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const correct = quizzes[currentNation][currentIndex].a;
    if (userAnswer === correct) {
      correctStreak++;
      if (correctStreak >= 10) {
        placeFlag();
        quizContainer.innerHTML = `<div style='font-size: 22px;'>축하합니다! ${currentNation.toUpperCase()} 깃발이 꽂혔습니다!</div>`;
        return;
      }
    } else {
      correctStreak = 0;
    }
  
    currentIndex++;
    if (currentIndex < quizzes[currentNation].length) {
      showQuiz();
    } else {
      quizContainer.innerHTML = `<div>퀴즈 종료. 연속 정답 수: ${correctStreak}</div>`;
    }
  }
  
  function placeFlag() {
    const flag = document.querySelector(`.pillar[data-nation="${currentNation}"] .flag`);
    flag.classList.add("visible");
  }
  