class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	get Name(){
		return this.name;
	}
	set Age(newAge){
		this.age = newAge;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

let obj = new Person('John', 25);

console.log(obj.Name); // Outputs: John

obj.Age = 30; // Sets the age to 30

console.log(obj.age); // Outputs: 30
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
