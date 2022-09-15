const answerElem = document.getElementById(`answer`);

//category.html에서 넘겨준 데이터
let receivedData = location.href.split('?')[1];
if (receivedData === undefined || receivedData === "") {
	receivedData = "질문지를 작성해주시거나 카테고리를 선택 해주세요."
} else {
	//첫번째
	// let mydata = JSON.parse(JSON.stringify(data));
	// console.log(mydata);
	//두번째
	let mydata = JSON.parse(JSON.stringify(answer));
	var result = []
	mydata.forEach((item) => {
		if (receivedData === item.category) {
			result = item.data
		}
	});
	const random = Math.floor(Math.random() * result.length);
	let resultText = result[random]

	let myQuestion = sessionStorage.getItem("myQuestion");
	if (myQuestion !== undefined && myQuestion !== null) {
		answerElem.innerText = myQuestion;
		sessionStorage.removeItem("myQuestion");
		//질문작성
		const random_answer = document.getElementById(`random_answer`);
		random_answer.innerText = resultText;
	} else {
		//질문작성x
		const answer_result = document.getElementById(`answer_result`);
		answer_result.innerText = resultText;
		//소라고동님 말씀 아래 위치
		// .innerText = resultText;
	}

}



//전체 스크린 샷하기
function screenShot() {
	
	html2canvas(document.body, {
		allowTaint: true,
		logging: true, letterRendering: 1, 
		foreignObjectRendering: true,
		useCORS: true
	})
	.then(function (canvas) {

		saveAs(canvas.toDataURL(), 'test.jpeg');
	}).catch(function (err) {
		console.log(err);
	});
}

//질문내용 스크린샷
function questionShot() {
	html2canvas(document.getElementById("test"), {
		allowTaint: true
	})
		//id container 부분만 스크린샷
		.then(function (canvas) {
			//이미지 저장
			saveAs(canvas.toDataURL(), 'answerbox.png');
		}).catch(function (err) {
			console.log(err);
		});
}


const saveBtn = document.querySelector(".imgsave-bt")
saveBtn.addEventListener("click", screenShot)

function saveAs(uri, filename) {
	var link = document.createElement('a');
	if (typeof link.download === 'string') {
		link.href = uri;
		link.download = filename;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	} else {
		window.open(uri);
	}
}