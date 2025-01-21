const mode = document.querySelector("#mode");
mode.addEventListener("click", () => {
  // 버튼의 텍스트가 다크모드로 만들기 되어 있을 때
  document.body.classList.toggle("dark-theme");
  if (mode.textContent == "다크 모드") {
    mode.textContent = "라이트 모드";
    // 그렇지 않은 경우 라이트 모드로 되어 있을 경우
  } else {
    mode.textContent = "다크 모드";
  }
});