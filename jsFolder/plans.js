let plans = document.querySelector('.plans')

let arr =[
   {
      title:'Plus',
      valute:'$',
      price:'30',
      time:'/mounth',
      content:'50GB Bandwidth Business & Financ Analysing 24 Hour Support Customer Managemet',
      btn:'Get Started'
   },
   {
      title:'Beginer',
      valute:'$',
      price:'50',
      time:'/mounth',
      content:'50GB Bandwidth Business & Financ Analysing 24 Hour Support Customer Managemet',
      btn:'Get Started'
   },
   {
      title:'Advanced',
      valute:'$',
      price:'127',
      time:'/mounth',
      content:'50GB Bandwidth Business & Financ Analysing 24 Hour Support Customer Managemet',
      btn:'Get Started'
   },
]

  export let packs = function(){
   arr.forEach(element => {
      let x = document.createElement('div')
      x.classList.add('offers')
      x.innerHTML=`<h2>${element.title}</h2><div class="prs"><p>${element.valute}</p>
                  <strong>${element.price}</strong><spna>${element.time}</spna></div> 
                  <p class="p">${element.content}</p><button>${element.btn}</button> ` 
      plans.append(x)
   });

}



