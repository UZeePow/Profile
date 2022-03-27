/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//Get the button:
let topBtn = document.getElementById("topBtn");
let color = document.getElementById("color")
let imgtag = "";

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function gotoTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function onFileSelected(event) {
  var file = event.target.files[0];
  var r = new FileReader();

  imgtag = document.getElementById("fileImg");
  imgtag.title = file.name;

  r.onload = function (event) {
    imgtag.src = event.target.result;
  };

  r.readAsDataURL(file);
  loadNewColor();
}

function loadNewColor() {
  $.ajax({
    url: "/getColors",
    type: "POST",
    dataType: "json",
    data: { param: imgtag },
  }).done(function (data) {
    $(color).replaceWith(data);
  });
}
