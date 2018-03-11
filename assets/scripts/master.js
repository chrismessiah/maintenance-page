import Typed from 'typed.js';

const phrases = [
  "Hi there",
  "Bonjour",
  "こんにちは",
  "Tjena",
  "你好",
  "Hola",
  "안녕",
  "Aloha",
  "Xin chào!",
  "Привет",
];

const ready = fn => {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

const master = () => {
  new Typed("#title", {
    strings: phrases,
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });
}

ready(master);
