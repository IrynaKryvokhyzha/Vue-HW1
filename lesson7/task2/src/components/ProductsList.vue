<template>
<h1>Список товарів</h1>
<div v-for="product in getProducts" :key="product.id" class="product">
	<div>{{product.title}}</div>
	<div>
		<span>{{getCurrencyPrice(product.price)}} {{currencyTitle}}</span>
		<button @click="buyProduct(product)">Купити</button>
		</div>
	
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
	export default {
		name: 'ProductsList',
		computed: {
			...mapGetters(['getProducts', 'currencyTitle', 'getCurrencyPrice'])
		},
		methods: {
			...mapActions(['buyProduct'])
			},
	}
</script>

<style lang="scss" scoped>
.product{
	display: flex;
	justify-content: space-between;
	max-width: 500px;
}
</style>