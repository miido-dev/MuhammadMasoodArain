
let vid = document.getElementById("myVideo"); 
// Get the modal
var modal = document.getElementById("myModal");
// var modal = document.getElementById("MergeChefModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// var span1 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}
// btn1.onclick = function() {
// mergeChefModal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
pauseVid();
}
// span1.onclick = function() {
// mergeChefModal.style.display = "none";
// }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    pauseVid();
}
// else if (event.target == mergeChefModal)
// {
//     mergeChefModal.style.display = "none";
// }
}

function pauseVid() { 
vid.pause(); 
vid.currentTime = 0;
}
