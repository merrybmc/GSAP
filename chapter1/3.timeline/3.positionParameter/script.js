var pixelsPerSecond = 200;

var tl = gsap.timeline();
tl.to("#star", { duration: 1, x: 1150 })
  // Relative Positioning // 상대적 위치
  //   .to("#circle", { duration: 2, x: 1150 }, "+=1") // 앞의 애니메이션 재생이 끝난 후 1초 뒤에 재생
  //   .to("#circle", { duration: 2, x: 1150 }, "-=0.5") // 앞의 애니메이션 재생이 끝나기 0.5초 전에 재생
  //   .to("#circle", { duration: 2, x: 1150 }, "<") // 앞의 애니메이션과 같이 재생
  // .to("#circle", { duration: 2, x: 1150 }, "<") // 앞의 애니메이션과 같이 재생
  // Absolute Positioning // 절대적 위치
  .to("#circle", { duration: 2, x: 1150 }, 2) // 해당 전체 애니메이션 타임라인의 2초대에 재생
  .to("#square", { duration: 1, x: 1150 });

tl.eventCallback("onUpdate", movePlayhead).paused(true);
gsap.to("svg", { autoAlpha: 1 });
var time = document.getElementById("time");
var maxX = tl.duration() * pixelsPerSecond;

var children = tl.getChildren();
var numChildren = children.length;

for (var i = 0; i < numChildren; i++) {
  gsap.set("#tween" + i, { x: children[i].startTime() * pixelsPerSecond });
  gsap.set("#rect" + i, { width: children[i].duration() * pixelsPerSecond });
}

var dragger = Draggable.create("#playhead", {
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
