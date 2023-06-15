var Student = {
    name: "",
    printDetails: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};
var student = Object.create(Student);
student.name = "Mithun";
student.printDetails();
