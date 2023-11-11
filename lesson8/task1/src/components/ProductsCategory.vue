<template>
	<div  class="category-container">
		<div v-for="category in getCategoryList" :key="category.id" class="category-item" :class="{ selected : getCurrentCategory===category.title}" @click="selectedCategory(category.title)">
				<div class="image">
					<img :src="category.imgSrc" alt="image">
				</div>
			<div class="title">
				<h2>{{category.title}}</h2>
			</div>
		</div>

	</div>
</template>

<script>
import { mapGetters , mapActions} from 'vuex'

	export default {
		name:'ProductsCategory',

		computed: {
			...mapGetters(['getCategoryList', 'getCurrentCategory', 'getProductsList']),
		},
		methods: {
			...mapActions(['loadCurrentCategory']),
		selectedCategory(category){
			this.loadCurrentCategory(category)
		}
		},
	}
</script>

<style lang="scss" scoped>
.category-container {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: rgb(238, 234, 234);
	padding: 20px;
	gap: 100px;
	
}
.category-item{
	display: flex;
	flex-direction: column;
	cursor: pointer;
	padding: 10px;
	max-width: 300px;
}

.image {
padding: 10px;

	img{
		max-width: 100%;
		border-radius: 10px;
		padding: 20px;
		

	}
}
.title {
	

}
.selected{
	img{
		border: 2px solid green;
	}
	
}


</style>