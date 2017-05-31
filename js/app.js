/*=============================================>>>>>
= show and hide =
===============================================>>>>>*/

function hide(select){
  select.addClass('dontShow');
}
function show(select){
  select.removeClass('dontShow');
}
function showButton() {
  $('.js-showAll').removeClass('dontShow');
}
function hideButton() {
  $('.js-showAll').addClass('dontShow');
}

/*= End of show and hide =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= Shows and hides as needed =
===============================================>>>>>*/
$('.card-tag').on('click', '.js-prog', function (){
  hide($('.card'));
  show($('.prog'));
  showButton();
});
$('.card-tag').on('click', '.js-net', function (){
  hide($('.card'));
  show($('.net'));
  showButton();
});
$('.card-tag').on('click', '.js-play', function (){
  hide($('.card'));
  show($('.play'));
  showButton();
});

$('.js-prog').on('click', function (){
  hide($('.card'));
  show($('.prog'));
  showButton();
});
$('.js-net').on('click', function (){
  hide($('.card'));
  show($('.net'));
  showButton();
});
$('.js-play').on('click', function (){
  hide($('.card'));
  show($('.play'));
  showButton();
});


$('.js-showAll').on('click', function(){
  hideButton();
  show($('.card'));
});
/*= End of Shows and hides as needed =*/
/*=============================================<<<<<*/
