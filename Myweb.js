const id = 'shin';
const pw = 'shin';

$(function(){
  var flag = 0;
  var d = 0;
  var logined = 0;
  const q = $('#navBtn');
  const target = $("#conWrap");
  const target2 = $("#navWrap");
  
  $('#welcome').text("로그인이 필요합니다.");
  $('#userIcon1').css('display','block');
  $('#userIcon2').css('display','none');

  q.on("click",function(){

    
    if(flag == 0){
      target.css({width :'80%'});
      target2.css('left','0%');
      flag = 1;
    }else{
      target.css({width :'100%'});
      target2.css('left' , '-20%');
      target.removeClass('s');
      target2.removeClass('s');
      d = 0;  
      flag = 0;
    }
    
  });

  $("#grayWall").on("mouseover",()=>{
    if(flag == 1){
      if((d==0)){
        for(var i = 1; i<=4; i++){
          $('.con'+i).addClass('s');
        }
        d = 1;
      }
    }
    
  });

  $("#grayWall").on("mouseleave",()=>{
    for(var i = 1; i<=4; i++){
      $('.con'+i).removeClass('s');
    }
    d = 0;
  });

  $('#signIn').on("click",(e)=>{
    e.preventDefault();
    
    $('#loginWrap').css('display','block');
    
  
  });

  $('#loginBtn').on("click",()=>{
    
    $('#loginWrap').css('display','none');
    
    if($('#id').val() == 'shin'){
      if($('#pw').val() == 'shin'){
        $('#welcome').text("신영운님 반갑습니다.");
        $('#userIcon1').css('display','none');
        $('#userIcon2').css('display','block');
        $('#signIn').css('display','none');
        $('#signUp').css('display','none');
      }else{
        alert("PW를 확인 하세요");
       
      }

    }else{
      alert("ID가 존재하지 않습니다.");
  
    }

  });

});