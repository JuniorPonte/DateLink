document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const imageOne = document.querySelector(".image-1");
  const imageTwo = document.querySelector(".image-2");
  const btnYes = document.querySelector(".btn-yes");
  const btnNo = document.querySelector(".btn-no");
  const whatsappButton = document.querySelector(".btn-whatsapp");

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  btnNo.addEventListener("mouseover", (event) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop, newLeft;

    do {
      newTop = getRandomNumber(0, containerHeight - btnHeight);
    } while (Math.abs(newTop - btnTop) < containerHeight / 3);

    do {
      newLeft = getRandomNumber(0, containerWidth - btnWidth);
    } while (Math.abs(newLeft - btnLeft) < containerWidth / 3);

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
  });

  btnYes.addEventListener("click", () => {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
    btnYes.classList.add("hide");
    whatsappButton.classList.remove("hide"); // Mostrar el botón de WhatsApp
  });
});
