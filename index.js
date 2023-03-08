let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response.then((v) =>{
    return v.json();
}).then((contests) =>{
    console.log(contests);
    ihtml = ""

  for(item in contests){
        console.log(contests[item]);
       
        ihtml += `
        <div class="card border-dark mb-3 card mx-2 my-2 bg-info " style="width: 20rem;">
        <img src='https://source.unsplash.com/random/?technology&1' class="card-img-top" alt="..."> 
        <div class="card-body " >
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text"> Status is ${contests[item].status} </p>
          <h6 class="card-text"> Site :  ${contests[item].site} </h6>
          <p class="card-text"> In 24 Hours ? ${contests[item].in_24_hours} </p>
          <p>Starts at: ${contests[item].start_time}</p>
          <p>Ends at: ${contests[item].end_time}</p>
          <a href="${contests[item].url}" class="btn btn-dark my-4 btn-lg ">Visit Contest</a>
        </div>
      </div>

        
        `
       

      }

    
      cardContainer.innerHTML = ihtml
        
          
    // const SearchContests = () =>{

      // let filter = document.getElementById('myInput').value;

      // let div = document.getElementById('cardContainer');
      // let h5 = div.getElementsByTagName('h5');

      // for(var item = 0 ; i<h5.length; item++){
      //   let a = h5[item].textContent;
      //   let b = h5[item].innerHTML;
   

      //   let textValue = a || b ;

      //   if(textValue.indexOf(filter) > -1){
      //     ihtml2 += `
      //     <div class="card border-info mb-3 card mx-2 my-2 bg-light" style="width: 20rem;">
      //     <img src='https://source.unsplash.com/random/?technology&1' class="card-img-top" alt="..."> 
      //     <div class="card-body ">
      //       <h5 class="card-title">${contests[item].name}</h5>
      //       <p class="card-text"> Status is ${contests[item].status} </p>
      //       <h6 class="card-text"> Site :  ${contests[item].site} </h6>
      //       <p class="card-text"> In 24 Hours ? ${contests[item].in_24_hours} </p>
      //       <p>Starts at: ${contests[item].start_time}</p>
      //       <p>Ends at: ${contests[item].end_time}</p>
      //       <a href="${contests[item].url}" class="btn btn-dark my-4 btn-lg ">Visit Contest</a>
      //     </div>
      //   </div>
          
      //     `
          
      // cardContainer.innerHTML = ihtml2
      //   }else{
          
      //     ihtml3 += `
      //     <div class="card border-info mb-3 card mx-2 my-2 bg-light" style="width: 20rem;">
      //     <img src='https://source.unsplash.com/random/?technology&1' class="card-img-top" alt="..."> 
      //     <div class="card-body ">
      //       <h5 class="card-title">${contests[none].name}</h5>
      //       <p class="card-text"> Status is ${contests[none].status} </p>
      //       <h6 class="card-text"> Site :  ${contests[none].site} </h6>
      //       <p class="card-text"> In 24 Hours ? ${contests[none].in_24_hours} </p>
      //       <p>Starts at: ${contests[none].start_time}</p>
      //       <p>Ends at: ${contests[none].end_time}</p>
      //       <a href="${contests[none].url}" class="btn btn-dark my-4 btn-lg ">Visit Contest</a>
      //     </div>
      //   </div>
          
      //     `

          
    //   cardContainer.innerHTML = ihtml2

    //     }


    //   }
    // }


  })
  
  
  