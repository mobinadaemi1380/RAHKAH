setTimeout(function(){
    
    $(".container").css("display","block")
},3000)

function moveToLoginPage(){
    window.location.href='./login.html'
  
}
function closeReqestOfLogin(){
    $(".container").css("display","none")
}


$("#yes").click(moveToLoginPage)
$("#no").click(closeReqestOfLogin)

