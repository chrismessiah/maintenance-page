import Typed from 'typed.js';

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

var phrases = [
    "Hi there!",
    "Aloha!",
    "こんにちは!",
    "Bonjour!",
    "¡Hola!",
];

function master() {
    var typed = new Typed("#title", {
        strings: phrases,
        typeSpeed: 40,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
}


ready(master);
