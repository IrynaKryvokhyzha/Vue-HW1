import { createStore } from "vuex";
import students from '../data/students.json'
import { getScoreInCategory } from "./helpers";
export default createStore({
  state() {
	return{
		studentsList: ['ok'],
		currentCategory: undefined
	}
  },

  getters: {
	// getFilteredByStudentsCategoryList:({studentsList, currentCategory})=>
	// 	studentsList.filter(student=>student.scores>=currentCategory.minValue&&student.scores<=currentCategory.maxValue),
		// or the
		getFilteredByStudentsCategoryList:({studentsList, currentCategory})=>{
			if(!currentCategory) return studentsList
			else return studentsList.filter(
				(student)=>student.score>=currentCategory.minValue&&student.score<=currentCategory.maxValue)
		},
		
	getCurrentCategory:({currentCategory})=>currentCategory,
	getStudentsList:({studentsList})=>studentsList,
	// Варіант 1
	// getStudentsListWithCategories:(state)=>{
	// 	return (scoreCategory)=>{
	// 		if(scoreCategory===12)return state.studentsList
			
	// 			return state.studentsList.map((student)=>({
	// 				...student,
	// 				score: getScoreInCategory(student.score)
	// 			}))
	// 	}
	// },

	// Варіант 3
	// getStudentsListWithCategories:(state)=>(scoreCategory)=>
	// 	scoreCategory===12 
	// 		? state.studentsList 
	// 		: state.studentsList.map((student)=>({
	// 					...student,
	// 					score: getScoreInCategory(student.score)
	// 		}))
	// Варіант 2
	getStudentsListWithCategories:(state, getters)=>{
		return (scoreCategory)=>{
			if(scoreCategory===12) return getters.getFilteredByStudentsCategoryList
			else {
				const studentsListCopy = JSON.parse(JSON.stringify(getters.getFilteredByStudentsCategoryList))
				studentsListCopy.forEach((student) => {
					student.score = getScoreInCategory(student.score)
				})
				return studentsListCopy
			}
		}
	}
	
  },
  mutations: {
	setStudentsList(state, list){
		state.studentsList=list
	},
	setCategory(state,category){
		state.currentCategory=category
	}
  },
  actions: {
	loadStudentsList({commit}){
		commit('setStudentsList', students)
	},
	setStudentCategory({commit}, category){
		commit('setCategory',category)
	}
  },
  modules: {},
});
