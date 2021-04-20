function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function(){
        var x=this.name
        var y=this.number
        console.log(x+": "+y)
    }
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();