const qty = document.querySelector(".selector");


// let selectval = document.querySelector(".selector").selectedIndex;
let a;
qty.addEventListener("change",()=>{
  a = qty.selectedIndex
})

// working
let count = document.querySelector(".zero");
const inc = document.querySelector(".addTo");
inc.addEventListener("click", () => {
  if (count.textContent < 9) {
  // count.textContent = a;
    count.textContent++
    console.log(count);
  } else {
    alert("you cant have more then 9 items. sorry");
  }
});







const smallPhoto = document.querySelectorAll(".px")
const hoverPhoto = document.querySelector(".hoverPhoto")

smallPhoto.forEach((photo,i)=>{
  photo.addEventListener("mouseover",()=>{
    hoverPhoto.style.backgroundImage =`url('../assets/img/hover-photos/gp${i+1}.jpg')`
  })
  
})



