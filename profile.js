var h2 = document.querySelector("#point h2")
var h3 = document.querySelector("#point h3")
var h4 = document.querySelector("#point h4")
var h5 = document.querySelector("#point h5")


var tl =gsap.timeline({
     repeat: -1,
});

tl
.to("h2",{
    ease:Expo.Power1,
    top: "0%"
})
.to("h2",{
    ease:Expo.Power1,
    top: "-100%"
})
.to("h3",{
    ease:Expo.Power1,
    top: "0%",
    opacity: 1,
})
.to("h3",{
    ease:Expo.Power1,
    top: "-100%",
    opacity: 1,
})
.to("h4",{
    ease:Expo.Power6,
    top: "0%",
    opacity: 1,
})
.to("h4",{
    ease:Expo.Power6,
    top: "-100%",
    opacity: 1,
})
.to("h5",{
    ease:Expo.Power6,
    top: "0%",
    opacity: 1,
})
.to("h5",{
    ease:Expo.Power6,
    top: "-100%",
    opacity: 1,
})


function timelineOne(){
    var tl = gsap.timeline({scrollTrigger :{
        trigger:"#page2",
        starts: "top top",
        pin: true,
        markers:true,
        end:"30%",
        scrub:2,
    }});


    tl
    .to("#slide1",{
        left:"0%",
        ease:Power1,
    },"a")
    .to("#slide3",{
        left:"0%",
        ease:Power1,
    },"a")

}

function timelinetwo(){
    var tl = gsap.timeline({scrollTrigger :{
        trigger :"#page3",
        starts:"top top",
        pin: true,
        markers:true,
        scrub:2,
    }})
    tl
    .to("#project1",{
        top:"50%",
        ease:Power1
    },"s")
    .to("#details",{
        top:"-100%",
        ease:Power1
    },"s")
    .to("#details1",{
        top:"0%",
        ease:Power1
    },"s")
    
    .to("#project2",{
        top:"50%",
        ease:Power1
    },"r")
    .to("#details1",{
        top:"-100%",
        ease:Power1
    },"r")
    .to("#details2",{
        top:"0%",
        ease:Power1
    },"r")
    .to("#project3",{
        top:"50%",
        ease:Power1
    },"t")
    .to("#details2",{
        top:"-100%",
        ease:Power1
    },"t")
    .to("#details3",{
        top:"0%",
        ease:Power1
    },"t")
    .to("#project4",{
        top:"50%",
        ease:Power1
    },"y")
    .to("#details3",{
        top:"-100%",
        ease:Power1
    },"y")
    .to("#details4",{
        top:"0%",
        ease:Power1
    },"y")
    .to("#project5",{
        top:"50%",
        ease:Power1
    },"u")
    .to("#details4",{
        top:"-100%",
        ease:Power1
    },"u")
    .to("#details5",{
        top:"0%",
        ease:Power1
    },"u")
    .to("#project6",{
        top:"50%",
        ease:Power1
    },"i")
    .to("#details5",{
        top:"-100%",
        ease:Power1
    },"i")
    .to("#details6",{
        top:"0%",
        ease:Power1
    },"i")
    

}
timelineOne();
timelinetwo();