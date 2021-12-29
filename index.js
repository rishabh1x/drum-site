function playSound(keyString) {
    var drumSound = "sounds/snare.mp3";
        switch (keyString) {
            case "w":
                drumSound = "sounds/tom-1.mp3";
                break;
            case "a":
                drumSound = "sounds/tom-2.mp3";
                break;
            case "s":
                drumSound = "sounds/tom-3.mp3";
                break;
            case "d":
                drumSound = "sounds/tom-4.mp3";
                break;
            case "j":            
                drumSound = "sounds/crash.mp3";
                break;
            case "k":
                drumSound = "sounds/kick-bass.mp3";
                break;
            case "l":
                drumSound = "sounds/snare.mp3";
                break;        
            default:
                break;
        }
        var audio = new Audio(drumSound);
        audio.play();
}

function buttonAnimation(currentKey) {
    let buttonElement = document.querySelector("." + currentKey);
    buttonElement.classList.add("pressed");

    setTimeout(() => {
        buttonElement.classList.remove("pressed");
    }, 0.5);
}

let allBtns = document.querySelectorAll("button");
for (var btn of allBtns) {
    btn.addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});