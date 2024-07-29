import { PHONE_NUMBER } from "./secret.js";

const button = document.querySelector(".main--button");
const link = document.querySelector("#link");
const github = document.querySelector("#github");
const desktopList = "win16|win32|win64|mac|macintel";

const changeButton = () => {
  if (button) {
    button.innerHTML = "이동 중..";
  }
  link.removeEventListener("click", isDesktop ? openMail : openMessage);
};

const openMail = () => {
  location.href = "https://mail.google.com/mail/?view=cm&to=mooul0529@gmail.com&body=애플뮤직%20신청합니다.";
  changeButton();
};

const openMessage = () => {
  const text = "애플뮤직 신청합니다.";
  location.href = `sms:${PHONE_NUMBER}?body=` + encodeURIComponent(text);
  changeButton();
};

const openGithub = () => {
  window.open("https://github.com/sweetandsourkiss/apple-music", "_blank");
};

const init = () => {
  let isDesktop = false;

  if (navigator.platform) {
    isDesktop = desktopList.indexOf(navigator.platform.toLowerCase()) > 0;
  }

  if (link) {
    if (!isDesktop) {
      link.addEventListener("click", openMessage);
    } else {
      link.addEventListener("click", openMail);
    }
  }

  if (github) {
    github.addEventListener("click", openGithub);
  }
};

init();
