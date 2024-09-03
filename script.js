
 
 
let main = document.querySelector("#main")


 const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function productCursorani(){
  let cursor = document.querySelector(".cursor")
let product = document.querySelectorAll(".product")
document.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    left:dets.x-100,
    top:dets.y-100
  })
})

product.forEach((product)=>{
product.addEventListener("mouseenter",function(){
  gsap.to(cursor,{
    scale:1
  })
})
product.addEventListener("mouseleave",function(){
  gsap.to(cursor,{
    scale:0
  })
})
})
}
productCursorani()

function detsani(){
  
let dets = document.querySelectorAll(".dets")
let dethover = document.querySelector(".det-hover")
dets.forEach((a)=>{
  a.addEventListener("mouseenter",function(e){
    console.log(e.target)
    e.target.style.borderRadius="2vw"
  e.target.children[1].style.display="block"
  
 
 
  // .style.display="block"
  })

  a.addEventListener("mouseleave",function(e){
 
    e.target.children[1].style.display="none"
  })
})
}
detsani()


function stringani(){
   let path = "M 2 10 Q 500 10 1490 10"
   let FinalPath = "M 2 10 Q 500 10 1490 10"
   let string = document.querySelector("#string")
   string.addEventListener("mousemove",function(dets){
      path=`M 2 100 Q ${dets.x} ${dets.y} 1490 100`
  
      gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
      })
    })
    
    string.addEventListener("mouseleave",function(){
    
        gsap.to("svg path",{
            attr:{d:FinalPath},
            duration:1.5,
            ease:"elastic.out(1,0.2)"
          })
    })
  
}

function videoani (){
   let videocon = document.querySelector("#video-container")
   let play = document.querySelector(".play")
   videocon.addEventListener("mouseenter",function(dets){
      gsap.to(play,{
          scale:1
      })
      
       })
      
       
       document.addEventListener("mousemove",function(dets){
         gsap.to(play,{
             
             left:dets.x,
             top:dets.y,
         })
      })
      
       videocon.addEventListener("mouseleave",function(){
          gsap.to(play,{
              scale:0
          })
       })
      
}

 function runAnimation (){
   let anime = document.querySelectorAll("#page1 h1")
   let list = document.querySelectorAll(".list ul li")
   let logo = document.querySelector(".logo")
 gsap.from(".part1 img",{
    y:-40,
    opacity:0,
    delay:0.2,
    duration:0.4
 })
 gsap.from(list,{
    y:-40,
    opacity:0,
    delay:0.3,
    duration:0.4,
    stagger:0.2
 })
 gsap.from(anime,{
    y:100,
    opacity:0,
    delay:0.99,
    duration:0.6,
    stagger:0.4
})

gsap.from("#video-container",{
    scale:0.8,
    opacity:0,
    delay:1,
    duration:0.9,
    
})
 }
 stringani()
 videoani()
runAnimation()