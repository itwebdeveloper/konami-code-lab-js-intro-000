const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;
  if (key === codes[index]) {
    console.log(key + " pressed.");
    index++;

    if (index > codes.length) {
      alert("Wrong sequence!");
    }

    if (index === codes.length) {
      window.alert("Hurray!");
    }
  } else {
    console.log(key + " wrongly pressed.");
    window.alert("Wrong sequence!");
  }
}

function init() {
  document.body.addEventListener('keydown',onKeyDownHandler);
}
