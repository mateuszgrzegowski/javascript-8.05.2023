//tablice

var box = document.getElementById("result");

var tab = new Array("Poniedziałek", "Wtorek" , "środa");
box.innerHTML += tab[0] + "<br>";
tab[3] = "Czwartek";
tab[4] = "Piątek";
tab[5] = "Sobota";
tab[6] = "Niedziela";
box.innerHTML += "Długość = " + tab.length + "<br>"

console.log(tab);

box.innerHTML += "----------------<br>"

for (var i =0; i < tab.length; i++ )
{
    box.innerHTML += tab[i] + "<br>";
}

tab.forEach(x =>console.log(x));

var tab2 = new Array(3);
tab2[0] = 10;
tab2[1] = true;
tab2[2] = "javascript";

console.log(tab2);

var tab3 = ["wiosna" , "lato", "jesien" , "zima"];
console.log(tab3);

var tab4 = (tab.concat(tab2)).concat(tab3);