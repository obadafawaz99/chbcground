let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let Fawaz = document.querySelector(".Fawaz");
let main = document.querySelector(".main");
window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  Fawaz.style.fontSize = value + "px";
  if (scrollY >= 67) {
    Fawaz.style.fontSize = 67 + "px";
    Fawaz.style.position = "fixed";
    if (scrollY >= 332) {
      Fawaz.style.display = "none";
    } else {
      Fawaz.style.display = "block";
    }
  }
  if (scrollY >= 83) {
    main.style.background = "linear-gradient(#376281, #10001f)";
  } else {
    main.style.background = "linear-gradient(#240022, #0c0227)";
    console.log("aaaa");
  }
};
