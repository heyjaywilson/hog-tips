/*=============================================>>>>>
= Shows and hides as needed =
===============================================>>>>>*/
$('.card-tag').on('click', '.js-prog', function (){
  $('.card').addClass('dontShow');
  $('.prog').removeClass('dontShow');
});
$('.card-tag').on('click', '.js-net', function (){
  $('.card').addClass('dontShow');
  $('.net').removeClass('dontShow');
});
$('.card-tag').on('click', '.js-play', function (){
  $('.card').addClass('dontShow');
  $('.play').removeClass('dontShow');
});

/*= End of Shows and hides as needed =*/
/*=============================================<<<<<*/
