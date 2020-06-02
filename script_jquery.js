$(function(){
  $('#button-hide').click(function(){
    $('#hide').hide();
  });
  
  $('#button-red').click(function(){
    $('#red').css("color", "red");
    $('#red').fadeOut('slow');
    $('#red').fadeIn('fast');
  });
});
