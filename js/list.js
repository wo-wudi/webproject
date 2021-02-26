document.addEventListener("DOMContentLoaded",function(){
  window.addEventListener('scroll',function(){
    let tou = document.querySelector('.header');            
    if(window.scrollY>0){
      tou.classList.add("bian");
     }
    else{
      tou.classList.remove("bian");
    }
  })
})