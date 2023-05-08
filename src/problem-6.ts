/**
 * Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
 */

// interface IPerson {
// 	name: string;
// 	age: number;
// 	email: string;
// }

// const getPerson = <T extends IPerson>(
// 	persons: Array<T>,
// 	email: string
// ): T | null => {
// 	const result = persons.find((person: T) => person.email === email);
// 	if (result) {
// 		return result;
// 	} else {
// 		return null;
// 	}
// };

// const persons: Array<IPerson> = [
// 	{ name: 'Rasel', age: 10, email: 'abc@gmail.com' },
// 	{ name: 'Rasel', age: 11, email: 'abc1@gmail.com' },
// 	{ name: 'Rasel', age: 12, email: 'abc2@gmail.com' },
// 	{ name: 'Rasel', age: 13, email: 'abc3@gmail.com' },
// ];

// const result = getPerson(persons, 'abc10@gmail.com');
// console.log(result);
