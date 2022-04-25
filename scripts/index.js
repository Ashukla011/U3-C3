// Store the wallet amount to your local storage with key "amount"


function add_to_wallet(){
    event.preventDefault();
     
    var x=document.querySelector("#wallet").innerText;
        console.log(x)
    document.querySelector("#navbar").append(x)
   

}