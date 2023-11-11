import { createStore } from "vuex";
import {products} from '../constants/data.js';
import {category} from '../constants/data.js';

export default createStore({
  state() {
	return{
		productsList:[],
		categoryList:[],
		currentCategory: ''
	}
  },
  getters: {
	getProductsList:({productsList})=>productsList,
	getCategoryList:({categoryList})=>categoryList,
	getCurrentCategory:({currentCategory})=>currentCategory ,
	getFilteredProductsByCategory:({productsList,currentCategory})=>productsList.filter((product)=>(product.category === currentCategory))
  },
  mutations: {
	setProductsList(state, list){
		state.productsList=list
	},
	setCategoryList(state, list){
		state.categoryList=list
	},
	setCurrentCategory(state, category){
		state.currentCategory=category
	},


  },
  actions: {
	loadProductsList({commit}){
		commit('setProductsList', products)
	},
	loadCategoryList({commit}){
		commit('setCategoryList', category)
	},
	loadCurrentCategory({commit},category){
		commit('setCurrentCategory',category)
	},
	

  },
  modules: {},
});
