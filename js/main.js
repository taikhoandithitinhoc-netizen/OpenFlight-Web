console.clear();

console.log("=================================");
console.log(" OpenFlight Web");
console.log(" Version : v0.1.0-alpha");
console.log(" Build : 001");
console.log("=================================");

const canvas = document.getElementById("gameCanvas");

function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

console.log("Canvas Ready");