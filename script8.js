//lekcja 9 funcje c.d return i rekuremcja

var box = document.getElementById("result");

//return

function add(a,b)
{
   return "wynik =" + (a + b);
   alert("Next....");
}

add(5, 5);

var sum = add(5,5)
box.innerHTML += "Suma = " + sum + "<br>"
alert(add(10, 30));

//rekurencja

function silnia(n)
{
    if (n == 1)
    return 1;
    else
    return n * silnia(n-1);
}
box.innerHTML += "Silnia = " + silnia(4);