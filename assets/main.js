
let vid = document.getElementById("myVideo"); 
// Get the modal
var modal = document.getElementById("myModal");
var mergeModal = document.getElementById("MergeChefModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnTwo = document.getElementById("BtnTwo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementById("MergeChefModal").getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}
btnTwo.onclick = function() {
    mergeModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
pauseVid();
}
span1.onclick = function() {
    mergeModal.style.display = "none";
pauseVid();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
    pauseVid();
}
else if (event.target == mergeModal) {
    mergeModal.style.display = "none";
    // pauseVid();
}
}

function pauseVid() { 
vid.pause(); 
vid.currentTime = 0;
}
