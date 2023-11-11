<template>
	<div>
		Категорія
		<select v-model="currentCategory">
			<option v-for="category in studentsCategoryList"
			:key="category.name" :value="category" >{{category.name}}</option>
		</select>
	</div>
</template>

<script>
import { mapGetters , mapActions} from 'vuex'
import {studentsCategoryList} from './settings'
	export default {
		name: 'StudentCategory',


		computed: {
			...mapGetters(['getCurrentCategory']),
			studentsCategoryList(){
				return studentsCategoryList
			},
			currentCategory:{
				get(){
					return this.getCurrentCategory
				},
				set(val){
					this.setStudentCategory(val)
				}
			}
		},
		methods: {
			...mapActions(['setStudentCategory'])
		},
	}
</script>

<style lang="scss" scoped>

</style>