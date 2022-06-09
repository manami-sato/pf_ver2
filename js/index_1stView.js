{

	let letter = $(".ltr");
  let letter1 = $(".index__first--ttl").html();
  let letter2 = $(".index__first--concept").html();
  // let letter3 = $(".index__first--txt").html();
  let text1 = $.trim(letter1);
  let text2 = $.trim(letter2);
  // let text3 = $.trim(letter3);
  let newTxt1 = "";
  let newTxt2 = "";
  // let newTxt3 = "";
  text1.split("").forEach(function (el) {
    newTxt1 += `<span>${el}</span>`;
  });
  text2.split("").forEach(function (el) {
    newTxt2 += `<span>${el}</span>`;
  });
  // text3.split("").forEach(function (el) {
  //   newTxt3 += `<span>${el}</span>`;
  // });
  // let count = 0;
  // $.each(letter,() => {
  //   console.log(letter[count].text());
  //   count++;
  // });
  $(".index__first--ttl").html(newTxt1);
  $(".index__first--concept").html(newTxt2);
  // $(".index__first--txt").html(newTxt3);
  let i1 = 0;
  let i2 = 0;
  // let i3 = 0;
  let setLetter1 = $(".index__first--ttl span");
  let setLetter2 = $(".index__first--concept span");
  // let setLetter3 = $(".index__first--txt span");
  const letterView1 = () => {
    setLetter1[i1].style.opacity = "1";
    i1++;
    if (i1 < setLetter1.length) {
      setTimeout(letterView1, 100);
    }
  };
  const letterView2 = () => {
    setLetter2[i2].style.opacity = "1";
    i2++;
    if (i2 < setLetter2.length) {
      setTimeout(letterView2, 400);
    }
  };
  // const letterView3 = () => {
  //   setLetter3[i3].style.opacity = "1";
  //   i3++;
  //   if (i3 < setLetter3.length) {
  //     setTimeout(letterView3, 20);
  //   }
  // };
  window.addEventListener("load", () => {
    setTimeout(letterView1, 100);
    setTimeout(letterView2, 400);
    // setTimeout(letterView3, 20);
  });

}