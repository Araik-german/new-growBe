
let numberPart= document.querySelector('.numberPart')

export let Num= function(){
 let fitsNUm = Math.floor( Math.random()*100) 
 let secondNUm = Math.floor( Math.random()*100) 
 let thirdNUm = Math.floor( Math.random()*100) 
 let fourthNUm = Math.floor( Math.random()*100) 

 let x = document.createElement('div')
 x.classList.add('randoms')
 x.innerHTML= `<div>${fitsNUm} <br> <span>Happy Clients</span></div>

   <div class="midle"></div> 

   <div>${secondNUm} <br> <span>Project Done</span></div>

   <div class="midle1"></div>

   <div>${thirdNUm} +  <br> <span>Years Of Experince</span></div> 

   <div class= "midle2"></div> 

   <div>${fourthNUm}  <br> <span>National Awards</span></div> `

numberPart.append(x)
 
} 
