document.addEventListener("DOMContentLoaded",function(){
  var count=document.getElementById("count")
  var button=count.getElementsByTagName("button")
  var span=count.getElementsByTagName("span")[0]
  var n=span.innerHTML
  for(var anniu of button){
    anniu.onclick=function(){
      if(this.innerHTML=="+"){
        n++ 
      }
      else if(n>1){
        n--
      }
      span.innerHTML=n
    }
  }
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