<template>
	<products-category />
	<products-list />
	<!-- :product-data="getFilteredProductsByCategory" -->
</template>

<script>
import { mapActions} from "vuex";
import ProductsList from "@/components/ProductsList.vue"
import ProductsCategory from './ProductsCategory.vue';
	export default {
		name:'ProductsManager',
		components: {
			ProductsList,
			ProductsCategory,
		},
		// computed: {
		// 	...mapGetters(['getFilteredProductsByCategory']),
		
		// },

		methods: {
			...mapActions(['loadProductsList', 'loadCategoryList'])
		},
		created(){
			this.loadProductsList(),
			this.loadCategoryList()
		}
	}
</script>

<style lang="scss" scoped>

</style>