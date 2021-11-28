
// selector testing
const qty = document.querySelector("select");
const op = document.querySelector("option");


  let selectval = document.querySelector("select").value;
  console.log(selectval);
// function getSelectOp(selectval){
//   let opt;
//   for(let i = 0; )
// }

// console.log(qty.options[qty.selectedIndex]);
op.addEventListener("click", () => {
  console.log("working")
});



// working
let count = document.querySelector(".zero");
const inc = document.querySelector(".addTo");
inc.addEventListener("click", () => {
  if (count.textContent < 9) {
    count.textContent++;
  } else {
    alert("you cant have more then 9 items. sorry");
  }
});
