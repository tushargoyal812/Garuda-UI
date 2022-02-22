var showHamburger=document.querySelector('#hamburger-show')
var notificationList=document.querySelector('.hamburger-notification')
var crossShow=document.querySelector('#cross-show')

showHamburger.addEventListener("click",()=>{
    if(notificationList.style.left ==="0px"){
        notificationList.style.left="-100%"
        showHamburger.innerText='menu'
        
    }else{
        notificationList.style.left="0px"
        showHamburger.innerText='close'
    }
})


// hamburger.addEventListener("click",()=>{
//     crossBtn.style.display='block'
//     hamburger.style.display='none';
//     if(showUI.style.left ==="0px"){
//         showUI.style.left="-100%"
//     }else{
//         showUI.style.left="0px"
//     }
// })