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
	sessionStorage.setItem("myQuestion", questionContent.value)
	location.href = `q-result.html?`;
}

document.querySelector("#btn_question").addEventListener("click", clickQuestion);
