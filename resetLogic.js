// Functionality to reset

function reset(){
    score1 = 0;
    score2 = 0;
    document.querySelector("#sc1").innerHTML = score1;
    document.querySelector("#sc2").innerHTML = score2;
    document.querySelector("h1").innerHTML = "Press Roll or Spacebar";
}


document.addEventListener("keydown", (event) => {
    if (event.key === "r" || event.key === "R") {
        reset();
    }
});
