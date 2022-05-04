coins = [5, 7, 1, 1, 2, 3, 22]

minSumChange = (coins) => {
	coins.sort((a ,b) => a - b)
	
	let currSum = 0
	for (i = 0; i < coins.length; i++){
		if (coins[i] > currSum + 1) 
			return currSum + 1
		currSum += coins[i]
	}

	return currSum + 1
}

console.log(minSumChange(coins))
