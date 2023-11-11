<template>
	<h1>Список товарів корзини</h1>
	<div v-for="product in getCartList" :key="product.id" class="product">
		<div>{{product.title}}</div>
		<div>
			<span>{{getCurrencyPrice(product.price)}} {{currencyTitle}}</span>
			<button @click="rejectProduct(product.id)">Відмовитись</button>
		</div>
		
	</div>
	<div>Разом до оплати: {{getTotalSum}} {{currencyTitle}}</div>
	</template>
	
	<script>
	import { mapGetters ,mapActions} from 'vuex';
		export default {
			name: 'ProductsList',
			computed: {
				...mapGetters(['getCartList', 'currencyTitle', 'getCurrencyPrice', 'getTotalSum'])
			},
			methods: {
				...mapActions(['rejectProduct'])
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