function getID() {
  let buttonClicked = event.target.textContent;
  playAudio(buttonClicked);
  document.querySelector("." + buttonClicked).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("." + buttonClicked).classList.remove("pressed");
  }, 500);
}

document.addEventListener("keypress", function (e) {
  playAudio(e.key);
  document.querySelector("." + e.key).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("." + e.key).classList.remove("pressed");
  }, 500);
});

function playAudio(buttonClicked) {
  switch (buttonClicked) {
    case "w":
      let audio1 = new Audio("./sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      let audio2 = new Audio("./sounds/tom-2.mp3");
      audio2.play();
      break;
    case "s":
      let audio3 = new Audio("./sounds/tom-3.mp3");
      audio3.play();
      break;
    case "d":
      let audio4 = new Audio("./sounds/tom-4.mp3");
      audio4.play();
      break;
    case "j":
      let audio5 = new Audio("./sounds/snare.mp3");
      audio5.play();
      break;
    case "k":
      let audio6 = new Audio("./sounds/crash.mp3");
      audio6.play();
      break;
    case "l":
      let audio7 = new Audio("./sounds/kick-bass.mp3");
      audio7.play();
      break;
    default:
      alert("Wrong Button Clicked");
  }
}
