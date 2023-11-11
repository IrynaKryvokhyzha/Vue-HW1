const dataArr = [
	{
		id: 1,
		logoSrc: "./images/1.png",
		name: "Vue.js",
		href: "https://vuejs.org/",
		title: "Vue.js - The Progressive JavaScript Framework | Vue.js",
		description: "WebJavaScript Framework. An approachable, performant and versatile framework for building web user interfaces. Why Vue Get Started Install. Special Sponsor Build like a team of …",
	},
	{
		id: 2,
		logoSrc: "./images/2.png",
		name: "Vue",
		href: "https://www.myvue.com",
		title: "Vue | Cinema Listings and Latest Movies | Book Film Tickets",
		description: "WebSee the latest films and live events in 2D, 3D, IMAX and IMAX 3D at Vue cinemas. Browse movie times at a cinema near you and book your tickets online today.",
	},
	{
		id: 3,
		logoSrc: "./images/3.png",
		name: "MDN Web Docs",
		href: "https://developer.mozilla.org/.../Vue_getting_started",
		title: "Getting started with Vue - Learn web development | MDN",
		description: "WebVue is a modern JavaScript framework that provides useful facilities for progressive enhancement — unlike many other frameworks, you can use Vue to enhance …",
	}
]
const {createApp} = Vue 

const app = createApp({
	data(){
		return{
			
		}
	},
	computed:{
		dataArray(){
			return dataArr
		}
	},
})

app.mount('#app')











