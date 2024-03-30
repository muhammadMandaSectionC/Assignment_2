$(document).ready(function() {
  $(".horse-card").click(function() {
    var colors = ['#007bff', '#28a745', '#ffc107']; // Array of background colors
    var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Select random color from array
    $(".hero").css("background-color", randomColor); // Change background color of hero section
  });
});
