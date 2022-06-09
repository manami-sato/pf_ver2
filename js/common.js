{
  //
  // スクロールトップ
  //
  const back = document.querySelector(".back");
  const back_text = document.querySelector(".back a");
  const back_background = document.querySelector(".back span");
  back_text.addEventListener("mouseover", () => {
    back_background.style.width = "50px";
    back_text.setAttribute("id", "backTxt");
  });
  back_text.addEventListener("mouseout", () => {
    back_background.style.width = "200px";
    back_text.removeAttribute("id", "backTxt");
  });
  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    let height = 550;
    if (scrollY > height) {
      back.style.transform = "translateX(0)";
      // }
      // if(back_text.hasAttribute("id") == true){
      // 	back.style.transform = "translateX(0)";
    } else {
      back.style.transform = "translateX(100%)";
    }
  });
}
