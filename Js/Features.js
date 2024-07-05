let cards = document.querySelectorAll("#Features .card");
let stackArea = document.querySelector(".stack-area");

function rotateCards() {
  let angle = 0;
  cards.forEach((card) => {
    if (card.classList.contains("active")) {
      card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
    } else {
      card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      angle -= 10;
    }
  });
}

rotateCards();

ScrollTrigger.create({
  scroller: "#js-scroll",
  trigger: ".stack-area",
  start: "top top",
  end: "bottom bottom",
  pin: true,
  scrub: true,
  onUpdate: (self) => {
    let proportion = self.progress;
    let n = cards.length;
    let index = Math.ceil(proportion * n);
    index = Math.abs(index) - 1;
    for (let i = 0; i < n; i++) {
      if (i <= index) {
        cards[i].classList.add("active");
      } else {
        cards[i].classList.remove("active");
      }
    }
    rotateCards();
  },
});

// Code for responsiveness
function adjust() {
  let windowWidth = window.innerWidth;
  let left = document.querySelector(".left");
  left.remove();
  if (windowWidth < 800) {
    stackArea.insertAdjacentElement("beforebegin", left);
  } else {
    stackArea.insertAdjacentElement("afterbegin", left);
  }
}
adjust();

// Detect resize
window.addEventListener("resize", adjust);
