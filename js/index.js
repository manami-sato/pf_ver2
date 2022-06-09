{
  //
  // スクロールしたらフェードイン
  //
  const about = document.getElementById("about");
  const works = document.getElementById("works");
  const contact = document.getElementById("contact");
  const height = -600;
  const height2 = 100;
  const motion = (el) => {
    el.style.transform = "translateX(0px)";
    el.style.opacity = "1";
    el.style.transition = "1s";
    window.addEventListener("resize", function () {
      el.style.transition = "0s";
    });
  };
  window.addEventListener("scroll", () => {
    const aboutScroll = about.getBoundingClientRect().top;
    const worksScroll = works.getBoundingClientRect().top;
    const contactScroll = contact.getBoundingClientRect().top;
    let scrollY = window.pageYOffset;
    let windowH = window.innerHeight;
    if (scrollY > aboutScroll + windowH + height) {
      motion(about);
    }
    if (scrollY > worksScroll + windowH + height) {
      motion(works);
    }
    if (scrollY > contactScroll + windowH + height2) {
      motion(contact);
    }
  });

  //
  // works 見てもらいたいサイトのスライド
  //

  // スライドショー版

  // ----------------------- スライドを複製
  // スライドショーひとつめ
  const works1st = document.querySelector(
    ".index__contents--works>li:first-child"
  );
  // スライドショー最後
  let workslast = document.querySelector(
    ".index__contents--works>li:last-child"
  );
  // ひとつめをコピー
  const worksCopy = works1st.cloneNode(true);
  // ラストにコピー版を複製
  workslast.after(worksCopy);
  // ----------------------- 複製完了
  // 最初のスライド(三枚)
  const contents = document.querySelectorAll(".index__contents--works li");
  const circle = document.querySelectorAll(".worksCircle>div");
  const circleRemoveId = () => {
    const circleGetId = document.getElementById("circleGet");
    circleGetId.removeAttribute("id");
  };
  for (let i = 0; i < contents.length; i++) {
    let countup1 = () => {
      contents[i].style.transform = "translateY(-100%)";
      contents[i].style.transition = "0.6s ease-in-out";
      circleRemoveId();
      circle[1].setAttribute("id", "circleGet");
      setTimeout(countup2, 5000);
    };
    let countup2 = () => {
      contents[i].style.transform = "translateY(-200%)";
      contents[i].style.transition = "0.6s ease-in-out";
      circleRemoveId();
      circle[0].setAttribute("id", "circleGet");
      setTimeout(countup3, 5000);
    };
    let countup3 = () => {
      contents[i].style.transform = "translateY(0)";
      contents[i].style.transition = "none";
      setTimeout(countup1, 0);
    };
    setTimeout(countup1, 5000);
  }
}
