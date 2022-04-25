// Store the wallet amount to your local storage with key "amount"
function addToWallet(){
    let amount = Number(document.getElementById("amount").value)+Number(JSON.parse(localStorage.getItem("amount")))||0;
    amount=+amount;
    localStorage.setItem("amount",JSON.stringify(amount));

}
document.getElementById("wallet").innerText=JSON.parse(localStorage.getItem("amount"))


