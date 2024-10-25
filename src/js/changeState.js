const stateButtons = document.querySelectorAll(".state-button");

stateButtons.forEach((stateButton) => {
  const srText = stateButton.querySelector(".sr-only");
  const stateBadge = stateButton.querySelector(".state-text");
  let isOnline = stateButton.classList.contains("state-online");

  stateButton.addEventListener("click", () => {
    isOnline = !isOnline;

    // 버튼 클래스 토글
    stateButton.classList.toggle("state-online");
    stateButton.classList.toggle("state-offline");

    // 텍스트 변경
    const name = srText.textContent.split(" ")[0];
    srText.textContent = `${name} 회원 ${isOnline ? "온라인" : "오프라인"}`;
  });
});
