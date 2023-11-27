// gsap setup
gsap.registerPlugin(ScrollTrigger);
// lenus setup
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


// Navigation
gsap.fromTo("nav ul li", { opacity: 0, }, { opacity: 1, duration: 3, stagger: 0.2 })
// chakra
ScrollTrigger.observe({
    target: window,
    type: "pointer",
    onMove: ({ deltaX, deltaY }) => {
        gsap.to(".chakra", { x: -deltaX * 0.4, y: -deltaY * 0.4 });
    },
});

gsap
    .timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top 100%",
            end: "bottom 0%",
            scrub: 1,
        },
    })
    .to(".chakra", { rotate: 360 });


gsap.fromTo(".chakra", { opacity: 0 }, { opacity: 1, duration: 3 })

// carousel
gsap.fromTo(".carousel-wrapper", { transform: "translateY(-3rem), opacity: 0" }, { transform: "translateY(0)", duration: 3, opacity: 1 })

const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".carousel-wrapper",
        start: "top 50%",
        end: "top 0%",
        // markers: true,
        scrub: 1,
        snap: 1
    },
});

t1.to(".camera_wrap", {
    scale: 1,
    yoyo: true,
    onComplete: () => {
        $(document).ready(function () {
            $(".camera_wrap").cameraResume();
        });
    },
});