
const price = 53.4;
var total = 0;

$(function(){
  $('#total').val(price);

  var target = $('#cnt');

  target.on('change',()=>{
    
   total = price * target.val();

   $('#total').val(total);

  });
});