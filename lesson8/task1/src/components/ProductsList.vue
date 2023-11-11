<template>
	<div>{{getCurrentCategory}}</div>
	<div class="products-container">
		<product-item v-for="product in getFilteredProductsByCategory" 
		:key="product.id" :card-data="product"/>
	</div>
	
</template>

<script>
import ProductItem from "@/components/ProductItem.vue"
import { mapGetters } from 'vuex'

	export default {
		name: 'ProductsList',
		components: {
			ProductItem,
		},
		computed: {
			...mapGetters(['getProductsList','getFilteredProductsByCategory', 'getCurrentCategory']),
		},
	}
</script>

<style lang="scss" scoped>
.products-container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 40px;
}

</style>