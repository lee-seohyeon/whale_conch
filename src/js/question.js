const open = () => {
	document.querySelector(".modal").classList.remove("hidden");
};

const close = () => {
	document.querySelector(".modal").classList.add("hidden");
};

document.querySelector(".openBtn").addEventListener("click", open);

document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);


const clickQuestion = () => {
	let questionContent =  document.querySelector(".questionbox")
	if (questionContent.value.length <= 10 || questionContent.value.length > 100) {
		open()
		return
	}

	let receivedData = location.href.split('?')[1];

	sessionStorage.setItem("myQuestion", questionContent.value)
	location.href = `q-result.html?${receivedData}`;
}

document.querySelector("#btn_question").addEventListener("click", clickQuestion);


// 넘어가게

const nonClick = document.querySelectorAll(".non-click");



function handleClick(event) {
	// div에서 모든 "click" 클래스 제거
	nonClick.forEach((e) => {
		e.classList.remove("click");
	});
	// 클릭한 div만 "click"클래스 추가
	event.target.classList.add("click");


	//console.log(event.target.id)
	location.href = `q-result.html?${event.target.id}`;


}

nonClick.forEach((e) => {
	e.addEventListener("click", handleClick);
});