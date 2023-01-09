var noOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("i got clicked");
    console.log(this);
    // this.style.color = "white";
    // var sound = "sounds/tom-1.mp3";
    // var audio = new Audio(sound);
    // audio.play();

    //adding switch for selecting
    var buttonPress = this.innerHTML;
    // var buttonpressed = event.key;
    // console.log("button preseesd", buttonpressed);
    makeSong(buttonPress);
    buttonAnimation(buttonPress);
  });
}
document.addEventListener("keydown", function (event) {
  makeSong(event.key);
  buttonAnimation(event.key);
});

function makeSong(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonPress);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
// alert("added js file");
