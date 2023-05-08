/**
 * Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.
 */

// class Person {
// 	constructor(public name: string, public age: number) {}

// 	public getDetails(): void {
// 		console.log(`${this.name} is ${this.age} years old.`);
// 	}
// }

// class Student extends Person {
// 	constructor(name: string, age: number, private grade: string) {
// 		super(name, age);
// 	}

// 	public get getGrade(): string {
// 		return this.grade;
// 	}
// }

// const student1 = new Student('Nissan', 10, 'A+');
// const grade = student1.getGrade;
// console.log(grade);
