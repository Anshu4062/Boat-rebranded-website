window.addEventListener("DOMContentLoaded", () => {
  gsap.to(".sticky", {
    scrollTrigger: {
      trigger: ".sticky",
      start: "top top",
      end: () => {
        return (
          "+=" +
          (window.innerHeight +
            document.querySelector(".web-content").offsetHeight -
            0.5)
        );
      },
      scrub: 1,
      pin: true,
    },
    y: 250,
    scale: 0.8,
    rotation: -15,
    ease: "power3.out",
  });

  gsap.fromTo(
    ".web-content",
    {
      x: -100,
      scale: 0.7,
      rotation: 15,
    },
    {
      scrollTrigger: {
        trigger: ".web-content",
        start: "top top",
        end: "bottom 50%",
        scrub: 1,
        pin: true,
      },
      x: 0,
      scale: 1,
      rotation: 0,
      ease: "power3.out",
    }
  );
});

const tracker = document.querySelector(".tracker");
const emoji = document.querySelector(".emoji");
const emoji_face = document.querySelector(".emoji-face");

const MouseE = (e) => {
  const wrapperRect = tracker.getBoundingClientRect();
  const relx = e.clientX - wrapperRect.left;
  const rely = e.clientY - wrapperRect.top;
  const emojimaxDisplacement = 50;
  const emojifaceMaxDisplacement = 75;

  const emojiDisplacementX =
    (relx / wrapperRect.width - 0.5) * emojimaxDisplacement;
  const emojiDisplacementY =
    (rely / wrapperRect.height - 0.5) * emojimaxDisplacement;

  const emojiFaceDisplacementx =
    (relx / wrapperRect.width - 0.5) * emojifaceMaxDisplacement;
  const emojiFaceDisplacementy =
    (rely / wrapperRect.height - 0.5) * emojifaceMaxDisplacement;

  gsap.to(emoji, {
    x: emojiDisplacementX,
    y: emojiDisplacementY,
    duration: 0.5,
    ease: "power3.out",
  });

  gsap.to(emoji_face, {
    x: emojiFaceDisplacementx,
    y: emojiFaceDisplacementy,
    duration: 0.5,
    ease: "power3.out",
  });
};
const leaveEvent = () => {
  gsap.to([emoji, emoji_face], {
    x: 0,
    y: 0,
    duration: 1,
    ease: "power3.out",
  });
};

window.addEventListener("mousemove", MouseE);
window.addEventListener("mouseleave", leaveEvent);

const elements = document.querySelectorAll(".text");
elements.forEach((ele, i) => {
  let innerText = ele.innerText;
  ele.innerHTML = "";
  let textContainer = document.createElement("div");
  textContainer.classList.add("block");

  for (let letter of innerText) {
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("letter");

    textContainer.appendChild(span);
  }

  ele.appendChild(textContainer);
  ele.appendChild(textContainer.cloneNode(true));
});
