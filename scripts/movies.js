
document.getElementById("wallet").innerText=JSON.parse(localStorage.getItem("amount"))
// Implement debouncing for network request


let id;
let movies_div = document.getElementById("movies");
async function searchMovies() {
    

    try {
        const query = document.getElementById("search").value;
        let res = await fetch(`http://www.omdbapi.com/?apikey=4949f690&s=${query}`)
        const data = await res.json();
        console.log(data);
        const movies = data.Search
        // return movies;
        displayData(data.Search)
    }
    catch (err) {
        console.log(err);
    }
}

let myArr = JSON.parse(localStorage.getItem("key"))||[]
function appendMovies(data) {
    movies_div.innerHTML = null;
    data.forEach(function (element) {
        let p = document.createElement("p");
        p.innerText = element.Title;
        movies_div.append(p);
    })
}

async function main() {
    let data = await searchMovies();
    if (data == undefined) {
        return false;
    }
    appendMovies(data);
}

function debounce(func, delay) {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(function () {
        func();
    }, delay);
}




function displayData(data){
    document.querySelector("#movies").innerHTML=null;
         data.forEach(function(ele,i,arr){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src=ele.Poster

        let title = document.createElement("h2");
        title.innerText=ele.Title;


        let btn = document.createElement("button")
        btn.innerText="book now";
        btn.addEventListener("click",()=>{
           book(ele)
        })
        div.append(img,title,btn);
        document.querySelector("#movies").append(div);
    })
    
 }



 
function book(el){

    let abc = json.parse(localStorage.getItem("amount"));
    abc=abc;
    if(Number(ele.price)<=abc){
        myArr.push(ele);
        alert("Booking Successful!")
        let reduce = abc-ele.price;
        document.getElementById("amount").innerText=JSON.parse(localStorage.getItem("amount"))
        localStorage.setItem("amount",JSON.stringify(reduce));
        localStorage.setItem("key",JSON.stringify(myArr));
    }
    else{
        alert("Insufficient Balance !")
    }
}
 
function book(){
    window.location.href="./checkout.html"
}
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
