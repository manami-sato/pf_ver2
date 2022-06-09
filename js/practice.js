{
  loadEvent();
  const article = $(".works__wrap article");

  $.ajax({
    url: "https://click.ecc.ac.jp/ecc/msatou/portfolio/js/practice.php",
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
      const ttlData = res[i].title;
      const sortData = res[i].sort;
      const txtData = res[i].text;
      const urlData = res[i].URL;
      const yearData = res[i].year;
      $(`.works__wrap article:nth-child(${num}) .works__ttl h3`).append(
        ttlData
      );
      $(`.works__wrap article:nth-child(${num}) .sort`).append(sortData);
      $(`.works__wrap article:nth-child(${num}) .works__txt`).append(txtData);
      $(`.works__wrap article:nth-child(${num}) a`).attr("href", urlData);
      $(`.works__wrap article:nth-child(${num})`).attr("data-year", yearData);
      sort("grid");
    }
  });
}
