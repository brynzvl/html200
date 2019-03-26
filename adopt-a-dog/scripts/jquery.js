$(function() {
  "use strict";

$('.dog-profile').hover(function(e) {
  $('.dog-profile').toggleClass('dog-profile-red');
})

$('.dog-page-profile').hover(function(e) {
  $('.dog-page-profile').toggleClass('dog-profile-red');
})

$('button').click(function(e) {
  $('.button').toggleClass('button-blue');
})


});
