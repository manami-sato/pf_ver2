{
	// ----------------------- スライドを複製
	// スライドショーひとつめ
	const first = document.querySelector(".first");
	// スライドショー最後
	let last = document.querySelector(".last");
	// ひとつめをコピー
	const copy = first.cloneNode(true);
	// ラストにコピー版を複製
	last.after(copy);
	// ----------------------- 複製完了
	// 最初のスライド(三枚)
	const contents = document.querySelectorAll(".box div");
	for (let i = 0; i < contents.length; i++) {
		let countup1 = () =>{
			contents[i].style.transform = "translateX(-100%)";
			contents[i].style.transition = "0.5s ease-in-out";
			setTimeout(countup2, 1000);
		}
		let countup2 = () =>{
			contents[i].style.transform = "translateX(-200%)";
			contents[i].style.transition = "0";
			setTimeout(countup3, 1000);
		}
		let countup3 = () =>{
			contents[i].style.transform = "translateX(0%)";
			contents[i].style.transition = "none";
			setTimeout(countup1, 0);
		}
		setTimeout(countup1, 1000);
	}
}