<template>
		<div v-for="student in studentData" :key="student.id" class="students-cnt">
			<div>{{ student.name }}</div>
			<div>{{ student.score }}</div>
		</div>
</template>

<script>



	export default {
		name: 'StudentsList',

		props: {
			studentData: {
				type: Array,
				default: ()=>[]
			},
		},
		
	}
</script>

<style lang="scss" scoped>
.students-cnt{
	display: flex;
	justify-content: space-between;
	max-width: 300px;
}
</style>