
$(window).on('scroll',function(){
  var sv = window.scrollY;

  if(sv >= 30){
    $('#mainWrap>#con1Wrap>h1').css('display','block');
  }
  if (sv >= 80){
    $('#mainWrap>#con1Wrap>p').css('display','block');
  }
  
  if(sv >= 85){
    $('#imgWrap1').css('display','block');
  }

  if(sv >= 100){
    $('#imgWrap1').css('top','10%');
  }

  if(sv >= 200){
    $('#mainWrap>#con2Wrap>h1').css('display','block');
  }
  if (sv >= 300){
    $('#mainWrap>#con2Wrap>p').css('display','block');
  }
  
  if(sv >= 305){
    $('#imgWrap2').css('display','block');
  }

  if(sv >= 320){
    $('#imgWrap2').css('top','30%');
  }

  if(sv >= 450){
    $('#mainWrap>#con3Wrap>h1').css('display','block');
  }

  if(sv >= 500){
    $('#mainWrap>#con3Wrap>p').css('display','block');
  }

  if(sv >= 505){
    $('#imgWrap3').css('display','block');
  }

  if(sv >= 520){
    $('#imgWrap3').css('top','55%');
  }

  if(sv < 50 || sv > 1400){
    $('#mainWrap>#con1Wrap>h1').css('display','none');
    $('#mainWrap>#con1Wrap>p').css('display','none');
    $('#imgWrap1').css('display','none');
    $('#imgWrap1').css('top','40%');

    $('#mainWrap>#con2Wrap>h1').css('display','none');
    $('#mainWrap>#con2Wrap>p').css('display','none');
    $('#imgWrap2').css('display','none');
    $('#imgWrap2').css('top','70%');

    $('#mainWrap>#con3Wrap>h1').css('display','none');
    $('#mainWrap>#con3Wrap>p').css('display','none');
    $('#imgWrap3').css('display','none');
    $('#imgWrap3').css('top','70%');
  }

});