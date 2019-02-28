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
  console.log(key + " pressed.");
  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    alert("Wrong sequence!");
    index = 0;
  }
}

function init() {
  document.body.addEventListener('click',onKeyDownHandler);
}
