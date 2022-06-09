const loadEvent = () => {
  const worksWrap = document.querySelector(".works__wrap");
  worksWrap.style.opacity = "1";
  worksWrap.style.transform = "translateX(0px)";
  worksWrap.style.transition =
    "0.5s ease-in-out transform,0.5s ease-in-out opacity";
};

const sort = (displayStyle) => {
  const clickEv = (el) => {
    let setItem = el.parentNode.querySelector(".set--web__sort--item");
    setItem.classList.remove("set--web__sort--item");
    el.classList.add("set--web__sort--item");
  };
  //
  // 順番
  //
  const worksArticle = $(".works__wrap article");
  const webSortItem1 = document.querySelectorAll(
    ".web__sort--wrap:nth-child(1) .web__sort--item"
  );
  const webSortItem2 = document.querySelectorAll(
    ".web__sort--wrap:nth-child(2) .web__sort--item"
  );
  let sortCount = 0;
  for (let i = 0; i < webSortItem1.length; i++) {
    webSortItem1[i].addEventListener("click", (el) => {
      clickEv(el.target);
      sortCount++;
      if (sortCount % 2 !== 0) {
        for (let i = 0; i < worksArticle.length; i++) {
          let num = worksArticle.length - i;
          worksArticle[i].style.order = `${num}`;
        }
      }
      if (sortCount % 2 === 0) {
        for (let i = 0; i < worksArticle.length; i++) {
          worksArticle[i].style.order = "";
        }
      }
    });
  }
  // 
  // 学年
  // 
  const article2 = $(".works__wrap article");
  const other = $(".graphic__other");
  for (let i = 0; i < webSortItem2.length; i++) {
    webSortItem2[i].addEventListener("click", (el) => {
      let getYear = el.target.dataset.year;
      clickEv(el.target);
      let viewCount = 0;
      for (let i2 = 0; i2 < article2.length; i2++) {
        if(i == 3){
          article2[i2].style.display = displayStyle;
        }else{
					if (article2[i2].dataset.year == getYear) {
						article2[i2].style.display = displayStyle;
					}
					if (article2[i2].dataset.year !== getYear) {
						article2[i2].style.display = "none";
						viewCount++;
					}
				}
      }
			if (viewCount == article2.length) {
				other.css("display", "flex");
			}
			if (viewCount !== article2.length) {
				other.css("display", "none");
			}
    });
  }
};
