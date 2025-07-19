var randomnumber = Math.floor(Math.random()*6+1);

var randomdiceimage = "dice" + randomnumber + ".png";

var randomimage = "images/" + randomdiceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimage);



var randomnumber2 = Math.floor(Math.random()*6+1);

var randomdiceimage2 = "dice" + randomnumber2 + ".png";

var randomimage2 = "images/" + randomdiceimage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimage2);

if (randomnumber > randomnumber2){
    document.querySelector("h2").innerHTML = "Arey 2 Geluvu ra poooooka";
}

else if (randomnumber < randomnumber2){
    document.querySelector("h2").innerHTML = "Arey 1 erripoooka nuvvu odipoyav ra";

}
else {
    document.querySelector("h2").innerHTML = "Iddaru erripokulayyaru ra";
}




