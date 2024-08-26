(function () {
  let dimPercent = 0.2,
    spinnerImage = "",
    spinnerSize = 5,
    spinnerColor = "#4285f4",
    spinnerBackgroundColor = "#f3f3f3",
    spinnerBorderWidth = 8,
    spinSpeed = 2;

  function setDimPercent(dim) {
    dimPercent = dim;
  }

  function setSpinfoStyles(
    size,
    color,
    backgroundColor,
    borderWidth,
    speed,
    image,
  ) {
    spinnerSize = size ?? 5;
    spinnerColor = color ?? "#4285f4";
    spinnerBackgroundColor = backgroundColor ?? "#f3f3f3";
    spinnerBorderWidth = borderWidth ?? 8;
    spinSpeed = speed ?? 2;
    spinnerImage = image;
  }

  function applySpinfoStyles() {
    const style = document.createElement("style");
    console.log(spinnerSize);
    style.textContent = `
      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      #spinfo-cover { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; user-select: none; pointer-events: none; z-index: 99999; background-color: rgba(0, 0, 0, ${dimPercent}); display: none; }
      #spinfo-spinner, #spinfo-img-spinner { position: absolute; top: calc(50% - ${spinnerSize / 2}vw); left: calc(50% - ${spinnerSize / 2}vw); width: ${spinnerSize}vw; aspect-ratio: 1; animation: spin ${spinSpeed}s linear infinite; }
      #spinfo-spinner { border: ${spinnerBorderWidth}px solid ${spinnerBackgroundColor}; border-top: ${spinnerBorderWidth}px solid ${spinnerColor}; border-radius: 50%; }
      #spinfo-text { position: absolute; bottom: 1vh; left: 1vw; color: white; font-family: system-ui, sans-serif; width: 30vw; }
    `;
    document.head.appendChild(style);
  }

  let cover;

  const load = () => {
    cover.style.display = "block";
  };

  const stop = () => {
    cover.style.display = "none";
  };

  let tipList = [
    "Eating food makes you less hungry.",
    "Fire can be hot, so don't touch it with your bare skin.",
    "This project was made by Jordan Lerner.",
  ];

  const setTips = (array) => {
    tipList = array;
  };

  const refreshTip = () => {
    const textTip = document.getElementById("spinfo-text");
    let newText;
    do {
      newText = tipList[Math.floor(Math.random() * tipList.length)];
    } while (newText === textTip.innerHTML);
    textTip.innerHTML = newText;
  };

  const init = () => {
    applySpinfoStyles();
    cover = document.createElement("div");
    cover.id = "spinfo-cover";
    document.body.appendChild(cover);
    buildSpinner();
    refreshTip();
    setInterval(refreshTip, 30000);
  };

  const buildSpinner = () => {
    const spinner = spinnerImage
      ? Object.assign(document.createElement("img"), {
          src: spinnerImage,
          id: "spinfo-img-spinner",
        })
      : Object.assign(document.createElement("div"), { id: "spinfo-spinner" });

    const textTip = document.createElement("h1");
    textTip.id = "spinfo-text";

    cover.append(spinner, textTip);
  };

  // Public functions
  window.spinfo = { init, setTips, load, stop, setSpinfoStyles, setDimPercent };
})();
