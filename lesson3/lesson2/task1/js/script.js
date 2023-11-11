const userList=[
	{
		name: "user1",
		password: "123"
	},
	{
		name: "user2",
		password: "456"
	},
	{
		name: "user3",
		password: "789"
	}
]

const {createApp} = Vue 

const app = createApp({
	data(){
		return{
			userName: "",
			userPassword: "",
			errorMessage: "Wrong login or password",
			smileImage: "./img/smile.png",
		}
	},

	computed:{
		isTyped(){
			return this.userName && this.userPassword
		},
		isAuthorized(){
			if(this.isTyped){
				const result = userList.find( user  => user.name === this.userName && user.password === this.userPassword)
				return result
			}
		},
		errorMessageColor(){
			if(this.isTyped){
				let currentColor
				if(this.userName === "Іван") {
					currentColor = "blue-text"
				}
				else 
					currentColor = "red-text"
					return currentColor
				}
			}
			
	},
	
})

app.mount('#app')