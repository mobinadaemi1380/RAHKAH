var usernum =prompt("intre your nimber")
for(let index=1;index<= usernum;index++)
{
   

     for(let space=14;space>=index; space--)
        {
            
      
        document.write('\xa0');
       
        }
       


    for(let star=1;star<=index;star++)
    {
        document.write("*");
    }
  
    document.write("<br>");

}
for(let index=usernum-1;index>=1;index--){
    ;
    
    for(let space=1;space<=15-index;space++)
    {
        document.write('\xa0');
   
    }
   
    for(let star=1;star<=index;star++){
        
        
        document.write("*");
       
     
    }
    document.write("<br>");
 
}
// let usrnum= Number(prompt("add yor number"))
// for (let index = 1; index <= usrnum; index++) {
 
//     for (let space = 1; space >=index; space--) {
        
//         document.write('\xa0')
//     }
//     for (let star = 14; star <= index; star++) {
        
//         document.write('*')
        
//     }
//     document.write('<br>')

    
// }
