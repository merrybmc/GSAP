let pixelsPerSecond = 200;

let tl = gsap.timeline();
tl.to("#star", { duration: 1, x: 1150 })
  .to("#circle", { duration: 2, x: 1150 }, "+=1")
  .to("#square", { duration: 1, x: 1150 }, 1);

tl.eventCallback("onUpdate", movePlayhead).paused(true);
gsap.to("svg", { autoAlpha: 1 });
let time = document.getElementById("time");
let maxX = tl.duration() * pixelsPerSecond;

let children = tl.getChildren();
let numChildren = children.length;

for (let i = 0; i < numChildren; i++) {
  gsap.set("#tween" + i, { x: children[i].startTime() * pixelsPerSecond });
  gsap.set("#rect" + i, { width: children[i].duration() * pixelsPerSecond });
}

let dragger = Draggable.create("#playhead", {
  type: "x",

  cursor: "pointer",
  trigger: "#timeline",
  bounds: { minX: 0, maxX: maxX },
  onDrag: function () {
    tl.pause();
    time.textContent = tl.time().toFixed(1);
    tl.progress(this.x / maxX);
  },
});

function movePlayhead() {
  gsap.set("#playhead", { x: tl.progress() * maxX });
  time.textContent = tl.time().toFixed(1);
}

document.getElementById("play").onclick = function () {
  tl.play();
};

document.getElementById("pause").onclick = function () {
  tl.pause();
};

document.getElementById("reverse").onclick = function () {
  tl.reverse();
};

// Read gsap.timeline() docs: https://greensock.com/docs/v3/GSAP/gsap.timeline()
