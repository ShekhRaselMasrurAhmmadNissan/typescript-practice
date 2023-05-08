/**
 * Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
 */

// type ArrayTuple = [string, number, number];
// type ProductArray = Array<ArrayTuple>;

// const findTotalCost = (products: ProductArray): number => {
// 	const totalCost = products.reduce(
// 		(prev: number, curr: ArrayTuple): number => {
// 			const [name, price, quantity] = curr;
// 			const cost = price * quantity + prev;
// 			return cost;
// 		},
// 		0
// 	);
// 	return totalCost;
// };

// const products: ProductArray = [
// 	['Banana', 10, 12],
// 	['Banana', 1, 2],
// 	['Banana', 1, 7],
// ];
// const result: number = findTotalCost(products);
// console.log(result);
