<template>
<currency-selector/>	
<products-list/>
<cart-product-list/>

</template>

<script>
import { mapActions } from 'vuex';
import CartProductList from './CartProductList.vue';
import CurrencySelector from './CurrencySelector.vue';
import ProductsList from './ProductsList.vue'
	export default {
		name:'ProductsManager',
		components: {
			ProductsList,
			CurrencySelector,
CartProductList

		},
		methods: {
			...mapActions(['loadDataFromFile'])
		},
		created(){
			this.loadDataFromFile()
		}
	}
</script>

<style lang="scss" scoped>

</style>
