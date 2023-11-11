const {createApp} = Vue 

const app = createApp({
	data(){
		return{
			businessImg: "./images/business.webp",
			economImg: "./images/economy.jpg",
			drinks: null,
			ticketClass: null,
		}
	},
	
})

app.mount('#app')