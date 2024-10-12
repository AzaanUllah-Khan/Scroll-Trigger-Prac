gsap.to(".container h1",{
    Transform: "translateX(-430%)",
    scrollTrigger:{
        trigger:".container",
        pin:true,
        scrub:true
    }
})
gsap.from(".container h2",{
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:".container h2",
        scrub: 1
    }
})
gsap.to(".container h2.last", {
    x: 500,
    y:100,
    color:"blue",
    duration: 1,
    delay: 2,
    scrollTrigger: {
        trigger: ".container h2.last",
        scrub: 1
    }
});