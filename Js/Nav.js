document.addEventListener("DOMContentLoaded", function () {
  let activeIndicate = CSSRulePlugin.getRule(
    "#nav  .menu-items p#active::after"
  );

  const toggleBtn = document.querySelector("#nav .burger");
  let isOpen = false;

  gsap.set("#nav  .menu-items p", { y: 255 });

  let tl = gsap.timeline({ paused: true });

  tl.to("#nav  .overlay", {
    duration: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power4.inOut",
  });

  tl.to("#nav .line", {
    duration: 0.5,
    width: "100%",
    ease: "power4.inOut",
  });

  tl.to(
    "#nav  .menu-items p",
    {
      duration: 1,
      y: 0,
      stagger: 0.2,
      ease: "power4.Out",
    },
    "-=1"
  );

  tl.to(
    activeIndicate,
    {
      width: "100%",
      duration: 1,
      ease: "power4.inOut",
      delay: 0.5,
    },
    "<"
  );

  tl.to(
    "#nav  .sub-menu",
    {
      bottom: "10%",
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    },
    "<"
  );

  toggleBtn.addEventListener("click", () => {
    if (isOpen) {
      //   console.log("CC");
      tl.reverse();
    } else {
      tl.play();
      console.log(tl.play());
    }

    isOpen = !isOpen;
  });
});
//Navbar Animation
function NavbarAnimation() {
  const tl = gsap.timeline();
  gsap.to("#nav nav", {
    y: 0,
  });
  // tl.to("#nav nav .info", {
  //   y: 0,
  //   duration: 1,
  //   ease: "elastic.out",
  // })
  //   .to("#nav nav .logo", {
  //     y: 0,
  //     duration: 0.51,
  //     ease: "elastic.out",
  //   })
  //   .to("#nav nav .toggle-btn", {
  //     y: 0,
  //     duration: 0.51,
  //     ease: "elastic.out",
  //   });
}
