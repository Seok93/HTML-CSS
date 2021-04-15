const aimContainer = document.querySelector(".aim");
const aimImage = document.querySelector(".aim__img");
const aimText = document.querySelector(".aim__text");
const aimHorizon = document.querySelector(".aim__horizontal");
const aimVertical = document.querySelector(".aim__vertical");

aimContainer.addEventListener("mousemove", (event) => {
  // 마우스 좌표
  const xPos = event.clientX;
  const yPos = event.clientY;

  // 이미지 위치 설정
  aimImage.style.top = `${yPos}px`;
  aimImage.style.left = `${xPos}px`;

  // 좌표 설정
  aimText.innerText = `${xPos}px, ${yPos}px`;
  aimText.style.top = `${yPos}px`;
  aimText.style.left = `${xPos}px`;

  // 수평선 설정
  aimHorizon.style.top = `${yPos}px`;

  // 수직선 설정
  aimVertical.style.left = `${xPos}px`;
});
