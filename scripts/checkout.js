// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time






var get =JSON.parse(localStorage.getItem("moviesData"))


function Movie(){
    get.map(function(ele){
var div=document.createElement("div")
        var title=document.createElement("p")
        title.innerHTML=ele.title

        var poster=document.createElement("img")
        poster.src=ele.Poster;


        div.append(title,poster)
        document.querySelector("#movie").append(div)
    })
}