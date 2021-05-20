
let container= document.querySelector('.container')

  let arr = [
             {action1:'Keyword Research',
            undertext1:'Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.',
            more1:'Learn More',
            picture1:'animage1.png',
            
            action2:'Seo Optimazadion',
            undertext2:'Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.',
            more2:'Learn More',
            picture2:'animage2',

            action3:'Social Marketing',
            undertext3:'Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.',
            more3:'Learn More',
            picture3:'animage3'},
         ]
  
     export    function fos(){
            let x= document.createElement('div')
            x.classList.add('thing')
            let y= document.createElement('div')
            y.classList.add('thing')
            let z= document.createElement('div')
            z.classList.add('thing')
            arr.forEach(elem => {

                  x.innerHTML= `<img src= './img/animage1.png'/> <h2>${elem.action1}</h2> 
                                 <p>${elem.undertext1}</p> <button>${elem.more1}</button>`

                  y.innerHTML= `<img src= './img/animage2.png'/> <h2>${elem.action2}</h2>
                                 <p>${elem.undertext2}</p> <button>${elem.more2}</button>`

                  z.innerHTML= `<img src= './img/animage3.png'/> <h2>${elem.action3}</h2> 
                                 <p>${elem.undertext3}</p> <button>${elem.more3}</button>`
                
               }); 
              container.append(x)
              container.append(y)
              container.append(z)
            }
         
         