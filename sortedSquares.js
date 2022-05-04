array = [1, 2, 3, 5, 6, 8, 9]

sortedSquaredArray = (array) => {
	const sortedArray = new Array(array.length).fill(0)
	
	let i = 0
	let j = array.length - 1
	
	for (let k = array.length - 1; k >= 0 ;k--){
		if (Math.abs(array[i]) > Math.abs(array[j])){
			sortedArray[k] = array[i]*array[i]
			i+=1
		}else {
			sortedArray[k] = array[j]*array[j]
			j-=1
		}
	}
	
	return sortedArray
}
