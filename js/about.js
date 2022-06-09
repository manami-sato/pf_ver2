{

	const aboutWrap = document.querySelector(".profileWrap");
	window.addEventListener("load",()=>{
		aboutWrap.style.opacity = "1";
		aboutWrap.style.transform = "translateX(0px)";
		aboutWrap.style.transition = "0.5s ease-in-out transform,0.5s ease-in-out opacity";
	})

	$.ajax(
		{
			url:"https://click.ecc.ac.jp/ecc/msatou/portfolio/js/about.php",
			method:"GET",
			dataType:"json",
			timeout:3000,
			cache:false
		}
	)
	.done(
		function(res){
			for (let i = 0; i < res.length; i++) {
				let num = i+1;
				let toolsBox = $(`.aboutTxt>div:nth-child(${num}) .tools`);
				const ttlData = res[i].title;
				const toolsData = res[i].tools;
				console.log(toolsData);
				$(`.aboutTxt>div:nth-child(${num}) .sort`).append(ttlData);
				for (let i2 = 0; i2 < toolsData.length-1; i2++) {
					toolsBox.clone().insertAfter(toolsBox);
				}
				let toolsBox2 = $(`.aboutTxt>div:nth-child(${num}) .tools`);
				for (let i2 = 0; i2 < toolsData.length; i2++) {
					toolsBox2[i2].append(toolsData[i2]);
				}
			};
		}
	);

}