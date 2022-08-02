var images= ["b1.png", "b2.jpg", "b3.jpg", "b4.jpg", "b5.jpg"];

var namos= ["Robertinho(ele é um bebe)", "Jorge(famoso primo da zueira)", "cagivyfzct(não está mais conosco)","cleitosnildon(um menino com qi de menos 5555555)","joberto(ele dança :)"];

var i= 0;
function updatosa()
{
    i++;
    var numbersOfFamilyMemberInArray = 4
    if(i > numbersOfFamilyMemberInArray)
    {
        i = 0
    }
var updateimage = images[i];
var updatenome = namos[i];

document.getElementById("fotobatatosa").src = updateimage
document.getElementById("nomebatatoso").innerHTML = updatenome
}