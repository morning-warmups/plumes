$(document).ready(function() {

  var $tucanButton = $("#tucan");
  var $macawButton = $("#macaw");
  var $parulaButton = $("#parula");

  $parulaButton.on("click", {index: 0, color: "rgba(14, 207, 88, 0.65)"}, showScreen);
  $macawButton.on("click",  {index: 1, color: "rgba(33, 172, 255, 0.65)"}, showScreen);
  $tucanButton.on("click",  {index: 2, color: "rgba(255, 33, 119, 0.65)"}, showScreen);
});

function showScreen(event) {
  var $slider = $(".plume-slider");
  var targetIndex = -266 * event.data.index;
  console.log(targetIndex);
  $slider.css("right", targetIndex);
  $(".overlay").css("backgroundColor", event.data.color);
}
