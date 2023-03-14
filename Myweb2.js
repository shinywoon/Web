
var target = 0;
var debounceFlag1 = 0;

var com1ImgMoving = function(positionPx){
  for(var i = 1 ; i <= 2 ; i++){
   $('#img'+i).css('left',positionPx+'px');
  }
};

var highlightFont = function(targetFont){
  
    if(targetFont != 0){
      for(var i = 1; i <= 8; i++){
        if(i == targetFont){
          $("#con2>p>span:nth-of-type("+i+")").css('color','white');
        }else{
          $("#con2>p>span:nth-of-type("+i+")").css('color','rgba(255, 255, 255, 0.5)');
        }
      }
    }else{
      for(var i = 1; i <= 8; i++){
        $("#con2>p>span:nth-of-type("+i+")").css('color','rgba(255, 255, 255, 0.5)');  
      }
    }
    
};

$(window).on('scroll',function(){
  console.log(window.scrollY);

  if(window.scrollY >= 200 && debounceFlag1 == 0){
    com1ImgMoving(0);
    debounceFlag1 = 1;
  }

  if(window.scrollY >= 300 && window.scrollY < 1000){
    $('#wellcomeP1').css('display','block');
    if(window.scrollY >= 400){
      $('#wellcomeP2').css('display','block');
    }
  }else{
    for(var i = 1; i <=2 ; i++){
      $('#wellcomeP'+i).css('display','none');
    }
  }

  if(window.scrollY < 150 && debounceFlag1 == 1 || window.scrollY > 1000){
    debounceFlag1 = 0;
    com1ImgMoving(500);
    $('#wellcomeP1').css('display','none');
  }
  
  if(window.scrollY < 1500 || window.scrollY >= 2400){
    target = 0;
    highlightFont(target);
  }else if(window.scrollY >= 1400 && window.scrollY < 1600){
    target = 1;
    highlightFont(target);
  }
  else if(window.scrollY >= 1600 && window.scrollY < 1800){
    target = 2;
    highlightFont(target);
  }else if(window.scrollY >= 1800 && window.scrollY < 1900){
    target = 3;
    highlightFont(target);
  }else if(window.scrollY >= 1900 && window.scrollY < 2000){
    target = 4;
    highlightFont(target);
  }else if(window.scrollY >= 2000 && window.scrollY < 2100){
    target = 5;
    highlightFont(target);
  }else if(window.scrollY >= 2100 && window.scrollY < 2200){
    target = 6;
    highlightFont(target);
  }else if(window.scrollY >= 2200 && window.scrollY < 2300){
    target = 7;
    highlightFont(target);
  }else if(window.scrollY >= 2300 && window.scrollY < 2400){
    target = 8;
    highlightFont(target);
  }

    if(window.scrollY >= 2800 && window.scrollY < 4500){
      $('#imgWrap3').css('transform','scale(1)');
    }else{
      $('#imgWrap3').css('transform','scale(3)');
    }


});