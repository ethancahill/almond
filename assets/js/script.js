var BigAlmond = document.getElementById("biggest-almond")
var MainBody = document.getElementById("big-almond")
var TheHeader= document.getElementById("theheader")
var MegaHeader= document.getElementById("megaheader")
var locationtag= document.getElementById("location-tag")
// var test = AlmondTime()

function AlmondTime(){
    var name = prompt("Please Enter Your First Name");
    if (name == 'Ethan' || name == 'Agustina' || name == 'Ashlyn' || name == 'Amy' || name== 'Kyle' ||name== 'Kade' || name =='Tiffany'||name == 'ethan' || name == 'agustina' || name == 'ashlyn' || name == 'amy' || name== 'kyle' ||name== 'kade' || name =='tiffany'||name=='stu'||name=='stuart'||name=='Stuart'||name=='Stu'){
        alert(name + ", you are now under the power of big almond. Hope you aren't alergic to nuts!");
        MegaHeader.style.background ="black";
        TheHeader.style.color ="red";
        TheHeader.textContent = name + " is now a proud supporter of Almonds and Hates the Environment";
        locationtag.textContent = ""
        BigAlmond.removeEventListener("click", AlmondTime)
        BigAlmond.addEventListener('click', function(){
            alert('Hey ' + name + ' that tickles!')
        })
        
        return name
    }
    else if (name == 'bubba'||name == 'Bubba'|| name == 'will'|| name== 'Will'||name =="William"|| name =="william"){
        alert(name + ", you are now under the power of big almond. And Alabama can suck a butt!");
        MegaHeader.style.background ="black";
        TheHeader.style.color ="gold";
        BigAlmond.src='./assets/images/knightro.jpeg'
        locationtag.style.color ="gold"
        locationtag.style.fontSize = "32px"
        locationtag.style.background= "black"
        locationtag.textContent = 'Charge On'
        TheHeader.textContent = name + " is now a proud supporter of Almonds and Hates the Environment. Alabama Sucks, Go Knights and Charge On!";
        BigAlmond.removeEventListener("click", AlmondTime)
        BigAlmond.addEventListener('click', function(){
            alert('Hey ' + name + ' Charge On')
        })
        return name
        
    }
    else {
        alert('Hey idiot! ' + name + ' is not your name, and Big Almond Knows it!')
        AlmondTime()
    }
}



// function ToggleAlmond() {
//     if (BigAlmond.src=="./assets/images/big_almond.jpeg"){
//         BigAlmond.src='./assets/images/ashlyn.jpeg'
    
//     } else {
//         BigAlmond.src="./assets/images/big_almond.jpeg"
//     }
// }

// function AshlynTime(){
//     if (test== 'Ethan' || test == 'Agustina' || test== 'Ashlyn' || test== 'Amy' || test== 'Kyle' ||test== 'Kade' || test =='Tiffany'||test == 'ethan' || test == 'agustina' ||test == 'ashlyn' || test == 'amy' || test== 'kyle' ||test== 'kade' || test=='tiffany'||test=='stu'||test=='stuart'||test=='Stuart'||test=='Stu')
//     ToggleAlmond()
// }


BigAlmond.addEventListener("click", AlmondTime)
// BigAlmond.addEventListener("mouseover", AshlynTime)


