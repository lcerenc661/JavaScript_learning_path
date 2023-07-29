/* POLYMORPHISM : Polymorphism means "many forms" and is actually a simple concept.
 It's the ability of one method to return different values according to certain conditions*/


 /*Override */
 class Employee{
    constructor(name, salary){
    this.name = name;
    this.salary = salary;
    }
    obtainDetails(){
        return `Employee: name: ${this.name} - salary: ${this.salary}`;
    }
 }

 class Manager extends Employee{
    constructor(name, salary, department){
    super(name, salary);
    this.department = department;
    }
    obtainDetails(){
        return super.obtainDetails() + `- department: ${this.department}`;
    }
 }

 /* Using this line, the function can have multiple shapes */
function print(type){
    console.log(type.obtainDetails());
 }

 let employee1 = new Employee('Doe', 10000);
 let manager1 = new Manager('John', 30000, 'IT');


print(employee1);
print(manager1);

console.log( employee1 instanceof Employee)
console.log( employee1 instanceof Manager)

console.log( manager1 instanceof Employee)
console.log( manager1 instanceof Manager)