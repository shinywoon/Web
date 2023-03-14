


$(function(){

  document.querySelector('#nav>ul>li>a').addEventListener('click',function(e){
    e.defaultPrevented();
});

  var c1 = $('#memberWrap');
  var c2 = $('#disWrap');
  var c3 = $('#cupon');

  $('#unbar').css('left','0%');


  $('#l1').on('click',()=>{
    $('#unbar').css('left','0%');
    c1.css('zIndex','99');
    c2.css('zIndex','98');
    c3.css('zIndex','98');
  });

  $('#l2').on('click',()=>{
    $('#unbar').css('left','33.333%');
    c1.css('zIndex','98');
    c2.css('zIndex','99');
    c3.css('zIndex','98');
  });

  $('#l3').on('click',()=>{
    $('#unbar').css('left','66.666%');
    c1.css('zIndex','98');
    c2.css('zIndex','98');
    c3.css('zIndex','99');
  });

});

