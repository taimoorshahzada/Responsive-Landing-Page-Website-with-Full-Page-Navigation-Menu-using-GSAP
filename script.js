var tll = gsap.timeline();
tll.from(".content",{
    duration: 2,
    opacity: 1,
    skewY: "10%",
    x: "5%",
    stagger: {
        amount: .4
    }
});
tll.from(".img-divs",{
    duration: .5,
    opacity: 0,
    y: "5%",
    stagger: {
        amount: .4
    }
});

var tl = gsap.timeline(
    {
        paused: "true"
    }
);

tl.to(".menu",{
    duration: .5,
    y: "0%",
    opacity: 1
})
tl.from(".ul",{
    duration: .5,
    y: "-20%",
    opacity: 0,
    stagger: {
        amount: .4
    }
});
tl.from(".showcase",{
    duration: 1,
    x: "-4%",
    opacity: 0,
    stagger: {
        amount: .4
    }
});
function toggle(){
    tl.play();
}
function togglerev(){
    tl.reverse();
}