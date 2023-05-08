/**
 * You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.
 */

// interface IProduct {
// 	id: number;
// 	name: string;
// 	price: number;
// 	category: string;
// }

// const filterProducts = <T extends IProduct, Y extends keyof T>(
// 	products: Array<T>,
// 	targetField: Y,
// 	criteria: string
// ): Array<T> => {
// 	const filtered = products.filter(
// 		(product: T) => product[targetField] === criteria
// 	);
// 	return filtered;
// };

// const products: Array<IProduct> = [
// 	{ id: 1, name: 'Banana', price: 210, category: 'Fruits' },
// 	{ id: 2, name: 'Strawberry', price: 210, category: 'Fruits' },
// 	{ id: 3, name: 'Mango', price: 450, category: 'Fruits' },
// 	{ id: 4, name: 'Fries', price: 89, category: 'Fast-Foods' },
// 	{ id: 5, name: 'Burger', price: 89, category: 'Fast-Foods' },
// 	{ id: 6, name: 'Pizza', price: 480, category: 'Fast-Foods' },
// ];

// console.log(filterProducts(products, 'category', 'Fruits'));
