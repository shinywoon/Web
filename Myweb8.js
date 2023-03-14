
var removeClass = function(){
  for(var i =1 ; i <= 4 ; i++){
    $('#c'+i).removeClass('target');
  }   
};

var addClass = function(target){
  if(target == 1){
    c1.className = 'target';
  }else if(target == 2){
    c2.className = 'target';
  }else if(target == 3){
    c3.className = 'target';
  }else if(target == 4){
    c4.className = 'target';
  }
};

$(function(){

});

window.onload = function(){

  const c1 = $('#c1');
  const c2 = $('#c2');
  const c3 = $('#c3');
  const c4 = $('#c4');
  const imgWrap = $('#panel');



  $('#c1').on('click',()=>{
    removeClass();
    c1.addClass('target');
    imgWrap.css('marginLeft','0%');
  });

  $('#c2').on('click',()=>{
    removeClass();
    c2.addClass('target');
    imgWrap.css('marginLeft','-100%');
  });

  $('#c3').on('click',()=>{
    removeClass();
    c3.addClass('target');
    imgWrap.css('marginLeft','-200%');
  });

  $('#c4').on('click',()=>{
    removeClass();
    c4.addClass('target');
    imgWrap.css('marginLeft','-300%');
  });
  

}

