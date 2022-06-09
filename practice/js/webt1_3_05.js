{

	const mouse = document.querySelector(".mouse");
	document.addEventListener("mousemove",(el)=>{
		let clientX = el.clientX;
		let clientY = el.clientY;
		// console.log(clientX);
		mouse.style.transform = "translate(" + clientX + "px," + clientY + "px)";
	});

	const link = document.querySelectorAll("a");
	for (let i = 0; i < link.length; i++) {
		link[i].addEventListener("mouseover",()=>{
			mouse.setAttribute("id","linkHover");
		});
		link[i].addEventListener("mouseout",()=>{
			mouse.removeAttribute("id");
		});
	}
}

