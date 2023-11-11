const workersList= [
		{
			id: '111',
			name: 'Іванов',
			salary: 10000,
		},
		{
			id: '112',
			name: 'Петров',
			salary: 20000,
		},
		{
			id: '113',
			name: 'Сидоров',
			salary: 50000,
		},
      ]
		
const {createApp} = Vue 

const app = createApp({
	data(){
		return{

		}
	},
	computed:{
		workerList(){
			return workersList
		}
	},

})

app.mount('#app')