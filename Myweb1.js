
var userDto = {
  name : '신영운',
  phoneNumber : '01048295984',
  birth : '940211'
};

$(function(){
  $("#ph").on("focus",()=>{
    var pw1 = $("#pw1");
    var pw2 = $("#pw2");
    if(pw1.val() != pw2.val()){
      alert("비밀번호 입력 오류. 다시 입력해 주세요");
      pw1.val("");
      pw2.val("");
      pw1.focus();
    }
  });


  $('#Pbtn').on("click",()=>{
    var inputUserName = $('#Username');
    var inputPhNumer = $('#ph');
    var menNum = $('#menNum');
    if(inputUserName.val() == userDto.name){
      if(inputPhNumer.val() == userDto.phoneNumber){
        alert('이미 존재하는 유저 입니다!!');
        inputUserName.val("");
        inputPhNumer.val("");
        inputUserName.focus();
      }else{
        if(menNum.val() != userDto.birth){
          alert('본인 확인 완료');
        }
      }
    }else{
      if(menNum.val() != userDto.birth){
        if(inputPhNumer.val() != userDto.phoneNumber){
          alert('본인 확인 완료');
        }
        
      }
    }
  });

  $('#sel').on('change',()=>{
    console.log($('#sel').val());
    if(($('#sel').val() != 'i')){
      if($('#sel').val() != 's'){
        $('#add').val($('#sel').val());
      }else{
        alert('e-mail 선택하세요!');
      }
    }else{
      $('#add').val('');
      $('#add').focus();
    }
  });


});
