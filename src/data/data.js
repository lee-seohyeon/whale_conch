const answer = document.getElementById(`answer`);
const random = Math.floor(Math.random() * data.length);
answer.textContent = arr[random].quote;

const data = [
	{
		category: "love",
		ans: "연애 예시답변 1",
	},
	{
		category: "love",
		ans: "연애 예시답변 2",
	},
	{
		category: "daily",
		ans: "일상 예시답변 1",
	},
];

export default data;
