//prosta gra
var input = document.getElementById("input");
var button = document.getElementById("button");
var answer = document.getElementById("answer");
var list = document.getElementById("list");

var i = 0;

var los = Math.floor(Math.random() * 10) + 1;

button.addEventListener("click", sprawdz);

function sprawdz()
{
    var value = Number(input.value);
    if (Number.isInteger(value) && value >= 1 && value <= 10)
    {
        i++;
        if (los > value)
        {
          
    answer.innerHTML = "wylosowana liczba jest wieksza od twojej";
        }
        else if (los < value)
        {
            answer.innerHTML ="wylosowana liczba jest mniejsza od twojej ";
        }
        else
        {
            answer.innerHTML = "Brawo zgadles za " + i + "razem";
            answer.classList.add("good");
            button.innerHTML ="odswiez";
            button.removeEventListener("click",sprawdz);

        }
    
    var li = document.createElement("li");
    list.appendChild(li);
    list.lastChild.innerHTML = i.toString() + ":" + value;
    }
    else
    {
        alert("Bledna liczba");
    }
}

function odswiez()
{
    location.reload();
}