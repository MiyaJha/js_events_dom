//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function() {
    
    //Get the element with an id of onload
    let onload = document.getElementById("onload");

//Add some HTML within the element we grabbed
    onload.innerHTML = "<h1> This is some loaded content </h1>";
});

//Get the element that will show our key code
const directionEL = document.getElementById("direction");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function(event) {
   
// When a key is pressed, the element with the id of direction will show the message
    directionEL.innerText = `the key that was pressed was ${event.key}`;
});

// this lets the above example disappear when you realease the key
// document.addEventListener("keyup", function() {
// directionEL.innerText = ""
// });

// Practice Click Event
let button = document.getElementById("clickME")
button.addEventListener("click", function(){
    button.innerText = "You clicked me!";
})

// function greet({
//     console.log("Hey Girl Hey!")
// })

// Exercise: Background Random Color (works when Dark Mode is muted,
//  both use body as a target)
let colorBtn = document.getElementById("randomColorBTN");

const body = document.body;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

randomColorBtn.addEventListener('click', function() {
  body.style.backgroundColor = getRandomColor();
});
console.log(getRandomColor());


// // classList Toggle Demo
function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); // Toggles glow effect
   };
   



//    Dark Mode Exercise (works when Background randonm color is muted.
//  both examples use body as the target)

const forceBtn = document.getElementById("changeme");
const body = document.body;

forceBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    forceBtn.textContent = "Dark Mode";
  } else {
    body.classList.add("dark-mode");
    forceBtn.textContent = "Light Mode";
  }
});