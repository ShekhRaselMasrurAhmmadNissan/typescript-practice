/**
 * Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
 */
type ArrayType = Array<number>;

const findSum = (numbers: ArrayType): number => {
	return numbers.reduce((prev: number, curr: number): number => {
		if (curr % 2 === 0) {
			return prev + curr;
		} else {
			return prev;
		}
	}, 0);
};

const numbers: ArrayType = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findSum(numbers));
