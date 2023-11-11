export function getScoreInCategory(score){
	let res 
	if(score>=10) res = 5
	else if(score>=7) res = 4
	else if(score>=4) res = 3
	else res = 2
	return res

}