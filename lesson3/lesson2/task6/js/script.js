const {createApp} = Vue 

const app = createApp({
	data(){
		return{
			dish:null,
			waitingList: [],
			processingList: [],
			completedList: []
		}
	},
	methods:{
		onAddToWaitingList(){
			if(this.dish)
			this.waitingList.push({title:this.dish})
			this.dish = null
		},
		onAddToProcessingList(index){
			this.processingList.push(this.waitingList[index])
			this.waitingList.splice(index, 1)
		},
		onAddToCompletedList(index){
			this.completedList.push(this.processingList[index])
			this.processingList.splice(index, 1)
		},
		removeFromCompletedList(index){
			this.completedList.splice(index, 1)
		}
	},
})

app.mount('#app')











