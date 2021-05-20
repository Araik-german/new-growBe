let experts = document.querySelector('.experts')

 export let fet = function(){fetch('https://reqres.in/api/users?page=1')
  .then((response) => {
    return response.json();
  })
  .then((datas) => {
     let dataNext= datas.data.slice(0, 4)
     console.log(dataNext)
      dataNext.forEach(elem => {
         let x = document.createElement('div')
         x.classList.add('exp')
         x.innerHTML=`<img src= ${elem.avatar}> <h4>${elem.first_name}</h4>
                     <h5>${elem.last_name}</h5><p>${elem.email}</p>`
        console.log(elem.first_name);
          experts.append(x)
     });
   
  });}
 
