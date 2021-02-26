document.addEventListener("DOMContentLoaded",function(){
  var table=document.getElementById("cart")
  var button=table.getElementsByTagName("button")
  var spans=table.querySelectorAll("tr>td>span")
  var prices=table.querySelectorAll("tr>td:nth-child(5)")
  var dels=table.querySelectorAll("tr>td:nth-child(6)>a")
  var total=document.getElementById("price").getElementsByTagName("span")[0]
  var delall=document.getElementById("price").children[1]
  var a=document.getElementById("price").getElementsByTagName("a")[0]
  var all=parseFloat((total.innerHTML).slice(1))
  var b=0
  var c=0
  var s1,s2,s3=0
  var p1,p2,p3=0
  for(var put of button){
    put.onclick=function(){
      var price=this.parentElement.previousElementSibling.innerHTML
      price=parseFloat(price.slice(1))
      var span=this.parentElement.children[1]
      var n=parseInt(span.innerHTML)
      if(this.innerHTML=="+"){
        n++
        all+=price
      }
      else if(n>1){
        n--
        all-=price
      }
      span.innerHTML=n
      var sub=price*n
      this.parentElement.nextElementSibling.innerHTML=`￥${sub.toFixed(2)}`
      total.innerHTML=`￥${all.toFixed(2)}`
      c=this.parentElement.nextElementSibling.innerHTML
      b=total.innerHTML
      s1=spans[0].innerHTML
      s2=spans[1].innerHTML
      s3=spans[2].innerHTML
      p1=prices[0].innerHTML
      p2=prices[1].innerHTML
      p3=prices[2].innerHTML
      a.href="pay.html?"+`total=${b}`+`&num1=${s1}`+`&num2=${s2}`+`&num3=${s3}`+`&price1=${p1}`+`&price2=${p2}`+`&price3=${p3}`
    }
    s1=spans[0].innerHTML
    s2=spans[1].innerHTML
    s3=spans[2].innerHTML
    p1=prices[0].innerHTML
    p2=prices[1].innerHTML
    p3=prices[2].innerHTML
    a.href="pay.html?"+`total=${total.innerHTML}`+`&num1=${s1}`+`&num2=${s2}`+`&num3=${s3}`+`&price1=${p1}`+`&price2=${p2}`+`&price3=${p3}`
  }
  for(var del of dels){
    del.onclick=function(){
      var tr=this.parentElement.parentElement
      var result=confirm(`是否确定删除？`)
      if(result){
        if(tr.rowIndex==2){
          table.deleteRow(tr.rowIndex)
          total.innerHTML=`￥73.20`
        }
        else{
          table.deleteRow(tr.rowIndex)
          total.innerHTML=`￥71.30`
        }
      }
    }
  }
  delall.onclick=function(){
    var result=confirm(`是否全部删除？`)
    if(result){
      total.innerHTML=`￥0`
      table.deleteRow(1)
      table.deleteRow(1)
      table.deleteRow(1)
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