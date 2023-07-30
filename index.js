//document.querySelectorAll("button")[0].addEventListener("click",handleClick);  //passing function listener without parenthesis

var numberOfButtons= document.querySelectorAll("button").length;
for(var i=0;i<numberOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
    // alert("I got clicked");
    //console.log(this.style.color="white");

    
    var buttonInnerHTML = this.innerHTML; 
    makeSound(buttonInnerHTML);
    makeFlash(buttonInnerHTML);
});
}

document.addEventListener("keydown",function(event){
    
   // alert("I got clicked");
    //console.log(event);
    
    makeSound(event.key);
    makeFlash(event.key);
})
function makeSound(key){
    switch (key) {
        case "w":
            //var audioLocation = "./sounds/tom-"
            var audio= new Audio("./sounds/tom-1.mp3");
            audio.play();
            
            break;
        case "a":
            var audio= new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
                var audio= new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
         case "d":
            var audio= new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
         case "j":
            var audio= new Audio("./sounds/snare.mp3");
            audio.play();
            break;
         case "k":
            var audio= new Audio("./sounds/crash.mp3");
            audio.play();
            break;
         case "l":
            var audio= new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default: console.log(buttonInnerHTML);
            break;
    }
}
function makeFlash(key){
    console.log(document.querySelector("."+key).classList.toggle("pressed"));
    setTimeout(function(){
        console.log(document.querySelector("."+key).classList.toggle("pressed"));
    },100);
}
// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("I got clicked");
// }

// var audioLocation = "./sounds/tom-"
//     var audio= new Audio("./sounds/tom-1.mp3");
//     audio.play();