
var userDto = {
  name : '신영운',
  phoneNumber : '01048295984'
};

$(function(){

  var resiFlag = 0;

  $("#ph").on("focus",()=>{
    var pw1 = $("#pw1");
    var pw2 = $("#pw2");
    if(pw1.val() != pw2.val()){
      alert("비밀번호 입력 오류. 다시 입력해 주세요");
      pw1.val("");
      pw2.val("");
      pw1.focus();
    }else if(pw1.val() == ''){

    }else{
      resiFlag += 1;
    }
  });


  $('#Pbtn').on("click",()=>{
    var inputUserName = $('#Username');
    var inputPhNumer = $('#ph');
    if(inputUserName.val() == userDto.name){
      if(inputPhNumer.val() == userDto.phoneNumber){
        alert('본인 확인 완료');
        resiFlag += 1;
        $('#email').focus();
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

  $('#home').on('click',function(){
    location.href = "Myweb.html";
  });

  $('#resi').on('click', function(){
    if(resiFlag >= 2){
      alert('예약완료 되었습니다.');
      location.reload();
    }else {
      alert('본인 확인 등 입력값을 확인 해 주세요!!');
    }
  });

});
