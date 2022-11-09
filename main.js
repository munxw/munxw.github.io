// let hack_login = prompt("enter your login");
// let hack_pass = prompt("enter your password");
// console.log(hack_login);
// console.log(hack_pass);
// console.log(document.referre);
document.querySelector(".button_focuse").onclick = myclick;

function myclick() {
  //   console.log("work");
  let a = document.querySelector(".input_focuse").value;
  console.log(a);
  document.querySelector(".out").innerHTML = a;
}
