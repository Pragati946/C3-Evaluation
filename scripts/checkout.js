document.getElementById("wallet").innerText=JSON.parse(localStorage.getItem("amount"))
// Each ticket will cost 100 Rupees
let myArr = JSON.parse(localStorage.getItem("key"))||[]

function book(ele){

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


let book = JSON.parse(localStorage.getItem("key"))||[];
function appendbookData(bookData){
    document.querySelector("#movie").innerHTML=null;
    bookData.forEach((ele,i)=>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src=ele.Poster

        let title = document.createElement("h2");
        title.innerText=ele.Title;

       div.append(img,title);
       document.querySelector("#movie").append(div);
    })
}
       
appendbookData(data)

// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
