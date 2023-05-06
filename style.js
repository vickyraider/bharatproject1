var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$("#audiobtn").on("click", function() {
		var audio = document.getElementById("audiosec4");
		audio.play();
    $(".sec4btnstp").on("click", function() {
      		audio.pause();
      	});

	});
// $(".sec4btnstp").on("click", function() {
//   		var audio = document.getElementById("audiosec4");
//   		audio.stop();
//   	});
