

let header= document.querySelector('header')
let successSteps = document.querySelector('.successSteps')

let all ={
    proces : {
   step : 'Grow Your Business',
   action : 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
   more:'Read More...',
   vector: 'Vector',
   step2 : 'Drive More Sales',
   action2 : 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
   more:'Read More...',
   vector2: 'Vector1',
   step1 : 'Get Quality Ieads',
   action1 : 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
   more:'Read More...',
   vector1: 'Vector2'
    }
}
export function foo(){
    let x = document.createElement('div');
x.classList.add('block')
let y = document.createElement('div');
y.classList.add('block')
let z = document.createElement('div');
z.classList.add('block')
console.log(x)
let doIt= all.proces
let doItt= all.proces

x.innerHTML=`<div class="squer"> <img src = './img/Vector.png'/></div> 
            <h3> ${doIt.step}</h3>  <p>${doItt.action}</p><a href="#">${doIt.more}</a> `

y.innerHTML=`<div class="squer1"> <img src = './img/Vector1.png'/></div> 
            <h3> ${doIt.step1}</h3>  <p>${doItt.action1}</p> <a href="#">${doIt.more}</a> `

z.innerHTML=`<div class="squer2"> <img src = './img/Vector2.png'/></div>
            <h3> ${doIt.step2}</h3>  <p>${doItt.action2}</p> <a href="#">${doIt.more}</a> `




successSteps.append(x)
successSteps.append(y)
successSteps.append(z)
}