const nonClick = document.querySelectorAll(".non-click");



function handleClick(event) {
	// div에서 모든 "click" 클래스 제거
	nonClick.forEach((e) => {
		e.classList.remove("click");
	});
	// 클릭한 div만 "click"클래스 추가
	event.target.classList.add("click");


	//console.log(event.target.id)
	location.href = `question.html?${event.target.id}`;


}

nonClick.forEach((e) => {
	e.addEventListener("click", handleClick);
});
