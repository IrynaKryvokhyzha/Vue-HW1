<template>
	<student-category />
	<score-category v-model="scoreCategory"/>
	<div>{{scoreCategory}}</div>
	<students-list :student-data="filteredStudentsList"/>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ScoreCategory from './ScoreCategory.vue';
import StudentCategory from './StudentCategory.vue';
import StudentsList from './StudentsList.vue';



	export default {
		name: "StudentsManager",

		components: { StudentsList, ScoreCategory, StudentCategory },
		
		data() {
			return {
				scoreCategory: null
			}
		},
		computed: {
			...mapGetters([
				'getStudentsList',
				'getStudentsListWithCategories', 
				'getFilteredByStudentsCategoryList'
			]),

			filteredStudentsList(){
				if(this.scoreCategory) return this.getStudentsListWithCategories(this.scoreCategory)
				else return this.getFilteredByStudentsCategoryList
			}
		},
		
		methods: {
			...mapActions(['loadStudentsList'])
		},
		
		created(){
			this.loadStudentsList()
		}

	
	}
</script>

<style lang="scss" scoped>

</style>