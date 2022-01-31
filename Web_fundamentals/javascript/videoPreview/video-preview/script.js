console.log("page loaded...");

var video = document.getElementById("myVideo");

function hoverOver(element) {
    video.play();
}

function hoverOut(element) {
    video.pause();
}