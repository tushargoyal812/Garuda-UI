var hamburger=document.querySelector('#hamburger')
var showUI=document.querySelector('.responsive-sidebar')
var crossBtn=document.querySelector('#cross')

crossBtn.style.display='none'
hamburger.addEventListener("click",()=>{
    crossBtn.style.display='block'
    hamburger.style.display='none';
    if(showUI.style.left ==="0px"){
        showUI.style.left="-100%"
    }else{
        showUI.style.left="0px"
    }
})

crossBtn.addEventListener("click",()=>{
    crossBtn.style.display='none'
    hamburger.style.display='block';
    if(showUI.style.left ==="0px"){
        showUI.style.left="-100%"
    }else{
        showUI.style.left="0px"
    }
})