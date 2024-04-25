let tl = gsap.timeline();
// orange
gsap.utils.toArray(".box:nth-child(1)").forEach((el, i) => {
  gsap.set(el, {
    x: 0,
    y: 0
  });
  tl.to(
    el,
    {
      repeat: -1,
      keyframes: [
        { x: 40, scale: 0.75 },
        { y: 40, scale: 1 },
        { x: 0, scale: 0.75 },
        { rotate: 90 },
        { y: 0, scale: 1 }
      ]
    },
    i * 1
  );
});

// gold
gsap.utils.toArray(".box:nth-child(2)").forEach((el, i) => {
  gsap.set(el, {
    x: 0,
    y: 0
  });
  tl.to(
    el,
    {
      repeat: -1,
      keyframes: [
        { y: 40, scale: 0.75 },
        { x: -40, scale: 1 },
        { y: 0, scale: 0.75 },
        { x: 0, scale: 1 }
      ]
    },
    i * 1
  );
});

// green
gsap.utils.toArray(".box:nth-child(3)").forEach((el, i) => {
  gsap.set(el, {
    x: 0,
    y: 0
  });
  tl.to(
    el,
    {
      repeat: -1,
      keyframes: [
        { y: -40, scale: 0.75 },
        { x: 40, scale: 1 },
        { y: 0, scale: 0.75 },
        { x: 0, scale: 1 }
      ]
    },
    i * 1
  );
});

// blue
gsap.utils.toArray(".box:nth-child(4)").forEach((el, i) => {
  gsap.set(el, {
    x: 0,
    y: 0
  });
  tl.to(
    el,
    {
      repeat: -1,
      keyframes: [
        { x: -40, scale: 0.75 },
        { y: -40, scale: 1 },
        { x: 0, scale: 0.75 },
        { rotate: 90 },
        { y: 0, scale: 1 }
      ]
    },
    i * 1
  );
});