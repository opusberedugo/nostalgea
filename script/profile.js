const links = document.querySelectorAll(".links a")
var ids = ['history','bookings','coupons'];

// fetch("./components/user/desktop/history.html").then((result)=>{
//   return result.text();
// }).then((data)=>{
//   console.log(data)
//   document.querySelector("section.ajax").innerHTML = data
// })
// .catch((e)=>{
//   console.warn(e.message)
// })

$("section.ajax").load("./components/user/desktop/history.html");


links[0].addEventListener("click", (e)=>{
  $("section.ajax").load("./components/user/desktop/history.html");
})

links[1].addEventListener("click", (e)=>{
  $("section.ajax").load("./components/user/desktop/bookings.html");
})

links[2].addEventListener("click", (e)=>{ 
  $("section.ajax").load("./components/user/desktop/coupons.html");
})

document.addEventListener("readystatechange", (e)=>{
  ids.forEach(function (v, i) {
    if (window.location.href.endsWith("#"+v)) {
      links[i].click();
    }
  });
});


