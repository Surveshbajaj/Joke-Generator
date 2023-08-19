let btn = document.querySelector("button");
let joke = document.querySelector("#joke");
let apiKey= "U8M3h8PIxTWHJQNsqX1L3Q==mTN9eo6PTAL9zuOw";

let options = {
    method: 'GET',
    headers: {
        "X-Api-Key" : apiKey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/jokes?limit=1";


async function getJoke(){
    try{
        joke.innerText = "Updating...";
        btn.innerText = "Loading...";
        let response = await fetch(apiURL, options);
        let data =  await response.json();
        console.log(data);
        joke.innerText = data[0].joke;
        btn.innerText = "TELL ME JOKE";
    }
    catch(e){
        joke.innerText = "Connection failed.., try again "
        btn.innerText = "Your Offline";
     
       }
}
btn.addEventListener("click", getJoke);
