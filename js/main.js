gsap.registerPlugin(ScrollTrigger)

const body = document.body
body.style = "overflow-y: visible"
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".rotate",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
    }
})
tl.to(".rotate", { rotate: "360deg", duration: 2 })
// .to(".box", { y: 200, duration: 3 })
// .to(".box", { x: 0, duration: 2 })