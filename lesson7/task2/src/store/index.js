import { createStore } from "vuex";
import productsData from "../data/products.json";

export default createStore({
  state(){
	return{
		products:['ok'],
		cart:[],
		currencyRate: 1, //1 - це грн, а інакше -$
	}
  },
  getters: {
	getTotalSum:(state)=>(state.cart.reduce((prevSum,product)=>prevSum+product.price,0)*state.currencyRate).toFixed(2),
	getCartList:({cart})=> cart,
	getProducts:({products})=> products,

	currencyTitle:(state)=>(state.currencyRate===1 ? 'грн' : '$'),

	getCurrencyPrice:(state)=>(price)=>(price*state.currencyRate).toFixed(2),

	getCurrencyRate:({currencyRate})=> currencyRate
  },
  mutations: {
	setProducts(state, list){
		state.products=list
	},
	changeCurrencyRate(state, val){
		state.currencyRate=val
	},
	addProductToCartList(state, product){
		state.cart.push(product)
	},
	removeProductFromCart(state, ProductId){
		state.cart=state.cart.filter((product)=>product.id!==ProductId)
	}
  },
  actions: {
	loadDataFromFile({commit}){
		commit('setProducts',productsData)
	},
	setCurrencyRate({commit}, currency){
		commit('changeCurrencyRate', currency)
	},
	buyProduct({commit},product){
		commit('addProductToCartList', product)
	},
	rejectProduct({commit}, prodId){
		commit('removeProductFromCart', prodId)
	}
  },
  modules: {},
});
