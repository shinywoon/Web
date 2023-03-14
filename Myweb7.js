

$(function(){

  $('#nav>li>ul>li>a').on('click',function(e){
    var s = $(this).text();
    
    $('#city').text(s);

  });

});