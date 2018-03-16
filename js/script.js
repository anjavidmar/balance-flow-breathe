function menuButton(x) {
  x.classList.toggle("change");
  $(".menu").slideToggle(1000);
}

var beenCalled = document.getElementsByClassName("been-called");

function callToAction(i) {
  var show = beenCalled[i];
  $(show).slideDown(1000);
}
function hideCall(i) {
  var hide = beenCalled[i];
  $(hide).slideUp(1000);
}

var testimonyButton = document.getElementsByClassName("testimony-button");
var testimony = document.getElementsByClassName("testimony");

function showTestimony(i) {
  var show = testimony[i];
  var hide = testimonyButton[i];
  $(hide).css('opacity', '0');
  $(show).slideDown(1500)
  // setTimeout(
  //   function(){
  //     $(show).slideDown(1500)
  //   }, 500
  // )
}
function hideTestimony(i) {
  var hide = testimony[i];
  var show = testimonyButton[i];
  $(hide).slideUp(1500);
  setTimeout(
    function(){
      $(show).css('opacity', '1');
    }, 1300
  )
}

var details = document.getElementsByClassName("details");
var detailsButton = document.getElementsByClassName("details-button");

console.log(details, detailsButton);


function showDetails(i) {
  var show = details[i];
  var hide = detailsButton[i];
  var newOnClick = 'hideDetails(' + i + ')';
  $(show).slideDown(1500);
  $(hide).attr('onclick', newOnClick).html('[ Hide Details ]');
}
function hideDetails(i) {
  var hide = details[i];
  var show = detailsButton[i];
  var newOnClick = 'showDetails(' + i + ')';
  $(hide).slideUp(1500);
  $(show).attr('onclick', newOnClick).html('[ Show Details ]');
}