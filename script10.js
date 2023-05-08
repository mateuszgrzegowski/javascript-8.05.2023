//obiekty
var result = document.getElementById("result");
//1
var adam = {name : "adam" , age: 25,
show() 
{
    return "Imie: " + this.name + ", wiek: " + this.age + "<br>";
}
};
console.log(adam);

result.innerHTML += adam.age;
result.innerHTML += "lat: " + adam['age'] + "<br>";

result.innerHTML += adam.show();
//2
function Person(name, age)
{
    this.name = name;
    this.age= age;
    this.show = function()
    {
        return "Imie: " + this.name + ", wiek: " + this.age + "<br>";

}
}
var bartek = new Person("Bartek" , 19);
console.log(bartek);
result.innerHTML += bartek.name + "<br>"

var ola = new Person("ola", 22);
console.log(ola);

result.innerHTML += bartek.show();
result.innerHTML += ola.show();