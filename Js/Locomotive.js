const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#js-scroll"),
  smooth: true,
});
const Loco = () => {
  gsap.registerPlugin(ScrollTrigger);

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#js-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#js-scroll").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // Refresh ScrollTrigger and Locomotive Scroll
  ScrollTrigger.refresh();
};

Loco();
