var windowHeight = window.innerHeight;
var header = document.getElementById('home');

header.style.height = windowHeight - 50 + 'px';

function menuButton(x) {
  x.classList.toggle("change");
  $(".menu").slideToggle(1000);
}

var beenCalled = document.getElementsByClassName("been-called");

function callToAction(i) {
  var showThis = beenCalled[i];
  $(showThis).slideDown(1000);
}
function hideCall(i) {
  var hideThis = beenCalled[i];
  $(hideThis).slideUp(1000);
}

var testimonyButton = document.getElementsByClassName("testimony-button");
var testimony = document.getElementsByClassName("testimony");

function showTestimony(i) {
  var showThis = testimony[i];
  var hideThis = testimonyButton[i];
  $(hideThis).hide();
  $(showThis).slideDown(1500)
}
function hideTestimony(i) {
  var hideThis = testimony[i];
  var showThis = testimonyButton[i];
  $(hideThis).slideUp(1500);
  setTimeout(
    function(){
      $(showThis).show();
    }, 1500
  )
}

var details = document.getElementsByClassName("details");
var detailsButton = document.getElementsByClassName("details-button");

function showDetails(i) {
  var showThis = details[i];
  var hideThis = detailsButton[i];
  var newOnClick = 'hideDetails(' + i + ')';
  $(showThis).slideDown(1500);
  $(hideThis).attr('onclick', newOnClick).html('[ Hide Details ]');
}
function hideDetails(i) {
  var hideThis = details[i];
  var showThis = detailsButton[i];
  var newOnClick = 'showDetails(' + i + ')';
  $(hideThis).slideUp(1500);
  $(showThis).attr('onclick', newOnClick).html('[ Show Details ]');
}
