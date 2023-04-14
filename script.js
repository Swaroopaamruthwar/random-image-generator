var container = document.querySelector(".container");
var images = document.querySelectorAll(".image");
var text = document.querySelector(".text");
// const directions = ["move-top", "move-left", "move-right", "move-bottom"];

text.addEventListener("click", function () {
  // Hide the text and show a random image
  text.style.display = "none";
  var randomIndex = Math.floor(Math.random() * images.length);
  //   var randomInd = Math.floor(Math.random() * directions.length);
  //   const randomDirection = directions[randomInd];
  var randomImage = images[randomIndex];
  randomImage.style.display = "block";
  randomImage.style.top =
    Math.floor(
      Math.random() * (container.clientHeight - randomImage.clientHeight)
    ) + "px";
  randomImage.style.left =
    Math.floor(
      Math.random() * (container.clientWidth - randomImage.clientWidth)
    ) + "px";
  //   randomImage.style.animation = "move";
  //   randomImage.style.animationDuration = "3s";
  //   randomImage.style.animationTimingFunction = "linear";
  //   const animationDistance =
  //     Math.floor(Math.random() * 10) < 5 ? "-100vw" : "100vw";
  //   document.documentElement.style.setProperty(
  //     "--randomDirection",
  //     randomDirection
  //   );
  //   document.documentElement.style.setProperty(
  //     "--animation-distance",
  //     animationDistance
  //   );

  randomImage.classList.add("styles");
});

container.addEventListener("click", function (event) {
  // Generate a new image at the clicked position
  var randomIndex = Math.floor(Math.random() * images.length);
  //   var randomInd = Math.floor(Math.random() * directions.length);
  //   const randomDirection = directions[randomInd];
  var randomImage = images[randomIndex];
  var newImage = document.createElement("img");
  newImage.src = randomImage.src;
  newImage.style.position = "absolute";
  newImage.style.top = event.clientY - container.offsetTop + "px";
  newImage.style.left = event.clientX - container.offsetLeft + "px";
  //   newImage.style.animation = "move";
  //   newImage.style.animationDuration = "3s";
  //   newImage.style.animationTimingFunction = "linear";
  //   const animationDistance =
  //     Math.floor(Math.random() * 10) < 5 ? "-100vw" : "100vw";
  //   document.documentElement.style.setProperty(
  //     "--animation-distance",
  //     animationDistance
  //   );
  //   document.documentElement.style.setProperty(
  //     "--randomDirection",
  //     randomDirection
  //   );
  newImage.classList.add("styles");
  container.appendChild(newImage);
});
