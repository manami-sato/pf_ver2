{
  loadEvent();
  const article = $(".works__wrap article");

  $.ajax({
    url: "https://click.ecc.ac.jp/ecc/msatou/portfolio/js/web.php",
    method: "GET",
    dataType: "json",
    timeout: 3000,
    cache: false,
  }).done(function (res) {
    for (let i = 0; i < res.length; i++) {
      if (i !== 0 && i < res.length) {
        article.clone().insertAfter(article);
      }
    }
    for (let i = 0; i < res.length; i++) {
      let num = i + 1;
      let sortBox = $(`.works__wrap article:nth-child(${num}) .sort`);
      const imgData = res[i].img;
      const ttlData = res[i].title;
      const txtData = res[i].text;
      const urlData = res[i].URL;
      const sortData = res[i].sort;
      const yearData = res[i].year;
      for (let i2 = 0; i2 < sortData.length - 1; i2++) {
        sortBox.clone().insertAfter(sortBox);
      }
      let sortBox2 = $(`.works__wrap article:nth-child(${num}) .sort`);
      for (let i2 = 0; i2 < sortData.length; i2++) {
        sortBox2[i2].append(sortData[i2]);
      }
      $(`.works__wrap article:nth-child(${num}) .works__img img`).attr({
        src: `img/${imgData}`,
        alt: ttlData,
      });
      $(`.works__wrap article:nth-child(${num}) .works__ttl h3`).append(
        ttlData
      );
      $(`.works__wrap article:nth-child(${num}) .works__txt`).append(txtData);
      $(`.works__wrap article:nth-child(${num}) a`).attr("href", urlData);
      $(`.works__wrap article:nth-child(${num})`).attr("data-year", yearData);
      sort("block");
    }
  });
}
