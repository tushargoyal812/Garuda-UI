var modalClick=document.querySelector('.modal-btn')
var topModal=document.querySelector('.modal')

topModal.style.display='none'
modalClick.addEventListener("click",()=>{
    topModal.style.display='block'
})