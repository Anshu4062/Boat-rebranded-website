let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = Math.ceil(items.length / 2);
let directionForward = true;
function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  directionForward = true;
  loadShow();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  directionForward = false;
  loadShow();
};
// Automatic scrolling animation
function autoScroll() {
  if (directionForward) {
    active = active + 1 < items.length ? active + 1 : active;
    if (active === items.length - 1) {
      directionForward = false;
    }
  } else {
    active = active - 1 >= 0 ? active - 1 : active;
    if (active === 0) {
      directionForward = true;
    }
  }
  loadShow();
}

setInterval(autoScroll, 4000); // Adjust the interval time as needed

gsap.to(".header-overlay", {
  width: "100%", // Target width to animate to
  scrollTrigger: {
    scroller: "#js-scroll", // Optional scroller element
    trigger: "#Category", // Trigger element ID or selector
    start: "top top", // Start trigger when top of trigger element hits the top of the viewport
    end: "bottom 50%", // End animation when bottom of viewport hits top of trigger element
    scrub: 1, // Smooth animation effect
  },
  duration: 4, // Animation duration in seconds
});
