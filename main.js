const DefaultSetter = () => {
  gsap.set("#nav nav", { y: -100 });
  // gsap.set("#nav nav .info", { y: -100 });
  // gsap.set("#nav nav .logo", { y: -100 });
  // gsap.set("#nav nav .toggle-btn", { y: -100 });
};

function PreLoader() {
  const PreLoaderConatiner = document.querySelector("#preLoader");
  const LoaderContent = document.querySelector(".l-loader");
  const bacgroundLoaderScreen = document.querySelector(".l-red-backgrond");
  const whiteheading = document.querySelectorAll(
    "#preLoader .l-loader h1.l-h-white"
  );
  const tl = gsap.timeline({ paused: false });
  //  .to(
  //       "#l-img",
  //       {
  //         y: "0",
  //         opacity: 1,
  //       },
  //       ".."
  //     )
  tl.to(
    "#preLoader .l-loader #l-h-1",
    {
      delay: 0.2,
      display: "block",
    },
    ".."
  )

    .to("#preLoader .l-loader #l-h-2", {
      delay: 0.03,
      display: "block",
    })
    .to(
      "#preLoader .l-loader #l-h-1",
      {
        display: "none",
      },
      "."
    )
    .to(
      "#preLoader .l-loader #l-h-2",
      {
        display: "none",
      },
      "."
    );

  tl.to(
    LoaderContent,
    {
      backgroundColor: "red",
      duration: 0.2,
    },
    "c"
  );
  whiteheading.forEach((ele) => {
    tl.to(ele, {
      display: "flex",
      duration: 0.2,
    });
  });

  tl.to(whiteheading, {
    display: "none",
    duration: 0.2,
  });

  // whiteheading.forEach((ele, i) => {
  //   console.log(whiteheading.length - i - 1);
  //   tl.to(whiteheading[whiteheading.length - i - 1], {
  //     display: "none",
  //     duration: 0.2,
  //   });
  // });

  tl.to(LoaderContent, {
    backgroundColor: "#000",
  });
  tl.to("#preLoader .l-loader #l-h-7", {
    display: "block",
  });

  // .to(
  //   "#l-img",
  //   {
  //     y: "100%",
  //     opacity: 0,
  //   },
  //   "a"
  // );
  tl.to(
    LoaderContent,
    {
      delay: 0.2,
      y: "-100%",
      duration: 1,
      ease: "power4.out",
    },
    "a"
  )
    .to(
      bacgroundLoaderScreen,
      {
        delay: 0.4,
        y: "-100%",
        duration: 1,
        ease: "power4.out",
      },
      "a"
    )
    .to(
      PreLoaderConatiner,
      {
        delay: 0.3,
        y: "-100%",
        duration: 1,
        ease: "power4.out",
        onComplete: () => {
          NavbarAnimation();
        },
      },
      "a"
    )
    .add(() => {
      locoScroll.init();
    });
}

window.onload = () => {
  PreLoader();
};

DefaultSetter();

// Best Sellor Animaton
const BestSellervideos = document.querySelectorAll(".bsVideo");
console.log(BestSellervideos);
// Add event listeners for hover
BestSellervideos.forEach((video) => {
  video.parentElement.addEventListener("mouseenter", () => {
    video.play();
  });

  video.parentElement.addEventListener("mouseleave", () => {
    video.pause();
  });
});

const InPressAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "#js-scroll",
      trigger: "#Press",
      start: "top top+=100",
      end: "bottom+=2000 top+=800",
      scrub: true,
      // markers: true,
      pin: true,
    },
    defaults: { ease: "none" },
  });
  tl.fromTo("#Press .afterImage", { xPercent: 100, x: 0 }, { xPercent: 0 }, 0)
    .fromTo(
      "#Press .afterImage .overlay",
      { xPercent: -100, x: 0 },
      { xPercent: 0 },
      0
    )
    .fromTo("#Press .thirdImage", { xPercent: 100, x: 0 }, { xPercent: 0 }, 1)
    .fromTo(
      "#Press .thirdImage .overlay",
      { xPercent: -100, x: 0 },
      { xPercent: 0 },
      1
    )
    .to("#Footer", {
      display: "block",
    });
};

InPressAnimation();

window.addEventListener("mousemove", (e) => {
  gsap.to("#cursor", {
    x: e.x,
    y: e.y,
    ease: "back.out",
  });
});
