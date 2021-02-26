document.addEventListener("DOMContentLoaded",function(){
  var button=btn.getElementsByTagName("button")
  for(var anniu of button){
    anniu.onclick=function(){
      var span=this.parentElement.children[1]
      var n=parseInt(span.innerHTML)
      if(this.innerHTML=="+"){
        n++
      }
      else if(this.innerHTML=="-" && n>1){
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