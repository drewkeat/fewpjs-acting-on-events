// Your code here

function moveDodgerLeft() {
    let left = parseInt(dodger.style.left)
    if (dodger.style.left != "0px") {
        dodger.style.left = `${left - 1}px`
    };
};

function moveDodgerRight() {
    let left = parseInt(dodger.style.left)
    if (dodger.style.left != "360px") {
        dodger.style.left = `${left + 1}px`
    };
};

addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
       moveDodgerRight(); 
    };
    console.log(e.key)
});