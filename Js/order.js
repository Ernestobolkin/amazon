let count = document.querySelector('.zero');
const inc = document.querySelector('.addTo');
// const qty = document.querySelector('')
inc.addEventListener('click', () => {
  if(count.textContent<9){
    count.textContent++;
  }else{
    alert("you cant have more then 9 items. sorry")
  }
});
