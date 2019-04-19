$('input').focus(function(){
$('#lastName').css('border', ' 1px solid green');
$('#firstName').css('border', ' 1px solid green');
})
$('input').focusout(function(){
$('#firstName').css('border', '1px solid red');
$('#lastName').css('border', '1px solid red');
})
