// // getting all the cards
// const allCards = document.querySelectorAll(".Blog-scroll .c");
// const containerHeight =
//   document.querySelector(".blog-row").getBoundingClientRect().top +
//   window.pageYOffset;
// const headerHeight = 5;
// const baseWidth = 60;
// const cardsCount = allCards.length;
// console.log("d");
// const cardsClickHandler = (index) => {
//   let topScrollValue = self.innerHeight * index - headerHeight * index;
//   topScrollValue = Math.max(0, topScrollValue);

//   const element = allCards[index];
//   const { marginTop } = window.getComputedStyle(element);

//   if (index === cardsCount - 1) {
//     topScrollValue =
//       topScrollValue - parseInt(marginTop) + headerHeight * 2 + 10;
//   }

//   const finalOffset = topScrollValue + containerHeight;
//   const duration = 800;
//   const startingY = window.pageYOffset;
//   const diff = finalOffset - startingY;
//   let start = null;

//   // start and end slowly effect
//   const easeInOutQuad = (t) => {
//     return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//   };

//   const step = (timestamp) => {
//     if (!start) start = timestamp;
//     const time = timestamp - start;
//     const percent = easeInOutQuad(Math.min(time / duration, 1));
//     window.scrollTo(0, startingY + diff * percent);
//     if (time < duration) {
//       window.requestAnimationFrame(step);
//     }
//   };
//   window.requestAnimationFrame(step);
// };

// if (cardsCount) {
//   allCards.forEach((card, i) => {
//     const incValue = i * headerHeight;
//     const decValue = (cardsCount - i - 1) * headerHeight;
//     const widthValue = (cardsCount - i) * baseWidth;
//     const heightValue = cardsCount * headerHeight - headerHeight;

//     const totalHeaders = cardsCount * headerHeight; // getting height of all cards
//     const reduceValue = (cardsCount - i) * headerHeight;

//     let bottomValue =
//       self.innerHeight - totalHeaders - reduceValue + headerHeight;
//     bottomValue = bottomValue > 0 ? "-" + bottomValue : Math.abs(bottomValue); // make minus and plus values

//     const fontSize = 20 + 4 * i;
//     card.style.fontSize = `${fontSize}px`;

//     // we can optimize like this for
//     card.style.marginTop = `${incValue}px`;
//     card.style.marginBottom = `${decValue}px`;
//     card.style.top = `${incValue}px`;
//     card.style.bottom = `${bottomValue}px`;
//     card.style.maxWidth = `calc(100% - ${widthValue}px)`;
//     card.style.maxHeight = `calc(100vh - ${heightValue - 3}px)`;

//     card.addEventListener("click", () => cardsClickHandler(i));
//   });
// }
const tl = gsap.timeline({
  scrollTrigger: {
    scroller: "#js-scroll",
    trigger: ".Blog-scroll",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    // markers: true, // Uncomment for debugging
  },
});

// Animation for each card
const bcards = document.querySelectorAll(".c");
bcards.forEach((card, index) => {
  tl.to(card, {
    opacity: 1,
    y: `-${index * 100}%`,
    duration: 0.5,
    stagger: 0.2,
  });
});
