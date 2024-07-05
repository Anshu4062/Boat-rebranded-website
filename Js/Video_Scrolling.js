const videos = document.querySelectorAll("#scrolling-container video");
let currentIndex = 0;

// Update carousel positions
function updateCarousel() {
  const totalVideos = videos.length;
  const order = [
    currentIndex,
    (currentIndex + 1) % totalVideos,
    (currentIndex + 2) % totalVideos,
  ];
  order.forEach((index, i) => {
    videos[index].style.order = i;
  });
}

// Initialize carousel order
updateCarousel();

let interval;

const set = () => {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % videos.length;
    updateCarousel();
  }, 5000);
};
set();
// Button click events
document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  updateCarousel();
  if (interval) {
    clearInterval(interval);
    set();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % videos.length;
  updateCarousel();
  if (interval) {
    clearInterval(interval);
    set();
  }
});

// GSAP animation for scaling the carousel on scroll
gsap.to("#scrolling-container", {
  scrollTrigger: {
    scroller: "#js-scroll",
    trigger: "#scrolling-container",
    start: "top top",
    end: "+=200%",
    pin: true,
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      // Scale down the carousel based on scroll progress
      gsap.to("#scrolling-container", {
        scale: 0.5 + 0.5 * (1 - progress), // Scale from 1 to 0.5
        ease: "power4",
        duration: 2,
      });
    },
  },
});

// GSAP animation for changing border radius of videos on scroll
gsap.to("#scrolling-container video", {
  scrollTrigger: {
    scroller: "#js-scroll",
    trigger: "#scrolling-container video",
    start: "top top",
    end: "+=200%",
    scrub: true,
  },
  borderRadius: "100px", // Animate to border radius 50px
  ease: "none",
});
