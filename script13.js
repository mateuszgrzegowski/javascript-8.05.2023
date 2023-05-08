//lekcja 14 dom

console.log(document);

var placeholder = document.getElementById("placeholder");
//placeholder.innerText = "<b>JavaScript</b>";
placeholder.innerHTML = "<b>JavaScript</b>";

var goods = document.getElementsByClassName("good");
console.log(goods);

for (var i = 0; i < goods.length; i++)
{
    goods[i].inneText += "- OK";
}

var li =document.getElementsByClassName("li");
console.log(li);

var newLi = document.createElement("li");
var text = documnet.createTextNode("Tekst 6");
newLi.appendChild(text);

var list = document.getElementById("list");
list.appendChild(newLi);
newLi2.appendChild(text2);

list.insertBefore(newLi2, document.getElementById("li4"));

var newLi3 = document.createElement("li");
var text3 = document.createTextNode("Nagłówek");
newLi3.appendChild(text3);

list.replaceChild(newLi3, firstLi);

list.appendChild(list.lastElementChild.cloneNode());
list.removeChild(list.lastElementChild)
var last = list.lastElementChild;

last.parentNode.removeChild(last);