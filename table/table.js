

   let submit =document.getElementById('submit')
let nume =document.getElementById('nume')
let family =document.getElementById('family')
let table =document.getElementById('table')

let count= 0



submit.addEventListener('dblclick',function(){
    count+=1
    
    let newPwrsone= document.createElement("tr")
    let count_row= document.createElement("td")
    let newPwrsone_name= document.createElement("td")
    let newPwrsone_family= document.createElement("td")
    let delet= document.createElement("td")
    let closeIcon=document.createElement('i')
    let penIcon=document.createElement('i')
  


    table.append(newPwrsone)

    newPwrsone.append(count_row,newPwrsone_name,newPwrsone_family,delet)
    delet.append(closeIcon,penIcon)


    count_row.innerHTML=count
    newPwrsone_name.innerHTML=nume.value
    newPwrsone_family.innerHTML=family.value
    closeIcon.className="fa fa-close close"
   
    penIcon.className='fa fa-pencil edit'
    newPwrsone_name.className="editName"
    newPwrsone_family.className="editefamily"
    
   

 nume.value=" "
 family.value=" "


 $(document).ready(function(){
   $('.close').click(function(){
       $(this).parent().parent().remove()
   })

   $('.edit').click(function(){
      
      var y=$(this).parent().parent().find('.editName')
      var g=$(this).parent().parent().find('.editefamily')

      nume.value=y.html()
      family.value=g.html()

      $('#submit').click(function(){
         y.html( nume.value)
         g.html(family.value)
        
      })
      
        
     
   })
})


 



})








  
   


   



    

// })



  
  