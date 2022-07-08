function sumFinder(arr, num) {
	let obj = {}
	let diff

	for (let i = 0; i < arr.length; i++) {
		diff = num - arr[i]

		if (obj[diff]) {
			return true
		} else {
			obj[arr[i]] = true
		}
	}
	return false
}

let sumFinderResult = sumFinder([6, 4, 3, 2], 7)
// returns true

let anotherSumFinderResult = sumFinder([6, 4, 3, 2], 1)
// returns false

console.log(sumFinderResult)
console.log(anotherSumFinderResult)
