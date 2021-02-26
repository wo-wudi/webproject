document.addEventListener("DOMContentLoaded",function(){
  function GetRequest() {
  var url = location.search; //获取url中"?"符后的字串
  var theRequest = new Object();//创建一个空对象
  if (url.indexOf("?") != -1) { //判断能找到？的话表示该字符串中存在？
    var str = url.substr(1);//截取字符串中第一个字符后的所有字符串
    strs = str.split("&");//将字符串以&切割开并变成数组
    for (var i = 0; i < strs.length; i++) {
       theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
       //数组的下标.取出的字符串以=切割开变成数组取出下标为0的元素和1的元素
       //decodeURIComponent对url中进行解码
       //强制加入对象中
      }
    }
    return theRequest;
  }
  var a=GetRequest()['total'];
  var p1=GetRequest()['price1']
  var p2=GetRequest()['price2']
  var p3=GetRequest()['price3']
  var n1=GetRequest()['num1']
  var n2=GetRequest()['num2']
  var n3=GetRequest()['num3']
  var span=document.getElementById("total")
  var prices=document.querySelectorAll(".d-flex>span:nth-child(2)")
  var nums=document.querySelectorAll(".d-flex>span>span")
  span.innerHTML=a
  prices[1].innerHTML=p1
  prices[2].innerHTML=p2
  prices[3].innerHTML=p3
  nums[0].innerHTML=n1
  nums[1].innerHTML=n2
  nums[2].innerHTML=n3
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