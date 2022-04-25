// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// https://omdbapi.com/?s=Star%20wars&apikey=631af2db


// let movie_div=document.getElementById("movies");
// let id;
// async function searchMovie(){
//     try{
//         const search=document.getElementById("search").value;
//         let res=fetch(`https://omdbapi.com/?s=Star%20wars&apikey=631af2db `)
//         let data=await res.json()
//         console.log(data)
//         let movie=data.Search;
//        return movie;
//     }catch(err){
//         console.log(err)
//     }
// }
// function appendData(data){
//     movie_div.innerText=null;
//  var movie_data=JSON.parse(localStorage.getItem("MovieData"))||[]
//     data.forEach(function(el){
//         // let div=document.createElement("div")
//         let img=document.querySelector("img")
//         img.src=el.Poster

//         let title=document.querySelector("h4")
//         title.innerText=el.Title

//         let btn=document.createElement("button",function(){
//             btn.innerText="book_now"
//             book_now(el);
  
//         })
      

//           movie_div.append(img,title.btn)
//     })
//     function book_now(el){
//      movie_data.push(data)
//      localStorage.setItem("MovieData",JSON.stringify(movie_data))
//     }
// }
// async function main(){
//     let data=await searchMovie()
//     if(data===undefined)
//     {
//         return false
//     }
//     appendData(data)
// }
// function debounce(func,delay){
//     {
//         if(id)
//         {
//             clearTimeout(id)
//         }
      
//     }
//     id=setTimeout(function(){
//         func();
//     },delay)
// }


let movies_div=document.getElementById("movies")
let id;


async function SearchMovies(){
     try{
  const query=document.getElementById("search").value;

  let res= await fetch(`https://omdbapi.com/?s=Star%20wars&apikey=631af2db`)
    
  let data=await res.json()
  console.log(data)
  let movies=data.Search
  return movies;

}
catch(err){
  console.log(err)
}
} 
function appendMovies(data){
  let Moviedat=JSON.parse(localStorage.getItem("moviesData"))||[]
  movies_div.innerText=null;
data.forEach(function(el){
  let div=document.createElement("div")
    let title=document.createElement("p")
    title.innerText=el.Title
   let poster=document.createElement("img")
   poster.src=el.Poster
  
   var btn=document.createElement("button")
       btn.innerText="book_now"
     btn.addEventListener("click",function(){
         booknow(el)
       
     })
div.append(poster,title,btn)
   movies_div.append(div)
})

 function booknow(el)
 {
    window.location.href=chekout.html
    Moviedat.push(data)
localStorage.setItem("moviesData",JSON.stringify(Moviedat))
 }
}
 

async function main(){
  let data= await SearchMovies()
  if(data===undefined)
  {
      return false
  }



  appendMovies(data)
}
 

 function debounce(func, delay)
 {

  if(id){
      clearTimeout(id)
  }
    id= setTimeout(function(){
         func();
         
     },delay)

 }