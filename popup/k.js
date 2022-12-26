let popup=document.getElementById("popup")
let yes= document.getElementById("yes")
let no= document.getElementById("no")

setInterval(function(){
    popup.style.display="block"

},3000)
yes.addEventListener('click',function(){
    window.location.href='./j.html'
})
no.addEventListener('click',function(){
    popup.style.display="none"
})

