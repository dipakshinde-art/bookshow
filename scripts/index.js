// Store the wallet amount to your local storage with key "amount"

let waleetmoney = JSON.parse(localStorage.getItem("amount"));
let display_amount = document.getElementById("wallet");

if (waleetmoney == 0) {
  display_amount.innerHTML = 0;
} else {
  display_amount.innerHTML = waleetmoney;
}

let addmoney = () => {
  //console.log("clicked");
  let waleetamount = document.querySelector("#amount").value;
  total_val=Number(waleetamount)+Number(waleetmoney);
  localStorage.setItem("amount", JSON.stringify(total_val));
  window.location.reload()
};
