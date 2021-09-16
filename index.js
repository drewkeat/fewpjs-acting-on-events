// Your code here

function moveDodgerLeft() {
    const left = parseInt(dodger.style.left)
    if (left > 0) {
    dodger.style.left = `${left - 5}px`;
    };
};

function moveDodgerRight() {
    const left = parseInt(dodger.style.left)
    if (left < 360){
    dodger.style.left = `${left + 5}px`;
    };
}

function moveDodgerUp() {
    const left = parseInt(dodger.style.left)
    if (left < 360){
    dodger.style.left = `${left + 5}px`;
    };
}


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    };
    console.log(e.key)
});