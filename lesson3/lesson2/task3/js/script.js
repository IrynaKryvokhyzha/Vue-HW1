
const wordsArr = [
	{
		word: "apple",
		imgSrc: "./image/apple.jpg",
		translation: "яблуко"
	},
	{
		word: "orange",
		imgSrc: "./image/orange.jpg",
		translation: "апельсин"
	},
	{
		word: "peach",
		imgSrc: "./image/peach.jpg",
		translation: "персик"
	},
	{
		word: "pear",
		imgSrc: "./image/pear.jpg",
		translation: "груша"
	},
	{
		word: "plum",
		imgSrc: "./image/plum.jpg",
		translation: "слива"
	}
]


const {createApp} = Vue 

const app = createApp({
	data(){
		return{
			word: wordsArr,
			userAnswer: null,
			currentWordIndex: 0,
			feedback: null,
			imgBorder: null,
			correctAnswer: null,
			inCorrectAnswer: null
		}
	},
	methods:{
		answerCheck(){
			let currentUserAnswer = this.userAnswer.toLowerCase()
			if(currentUserAnswer === this.currentWord.translation) {
				this.feedback = "Добре, Молодець!"
				this.imgBorder = "green-border"
				this.correctAnswer = true
				this.inCorrectAnswer = false
			}else{
				this.feedback = "Невірно, спробуйте ще раз"
				this.imgBorder = "red-border"
				this.correctAnswer = false
				this.inCorrectAnswer = true
			}
		},
		nextWord(){
			if(this.correctAnswer = true){
				this.userAnswer = ""
				this.feedback = ""
				this.imgBorder = ""
				this.currentWordIndex++
			}
			
			
		}
		
	},
	computed:{
		currentWord(){
			return this.word[this.currentWordIndex]
		},
	}
})

app.mount('#app')