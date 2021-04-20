function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

var p1 = new person(" John ", 42, " green ");
var p2 = new person(" Amy ", 21, " Red ");

document.write(p1.name);
document.write(p1.age);
document.write(p1.color);
document.write(p2.name);
document.write(p2.age);
document.write(p2.color);