//complete this code
class Person {
	constructor(){
		this.name = name;
		this.age = age;
	}
	let obj = new Person(name,age);
	get Name(){
		return this.name;
	}
	set age(){
		this.age = age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is stduying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching
		`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
