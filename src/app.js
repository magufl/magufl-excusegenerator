/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird", "Remi"];

  let action = ["ate", "peed", "crushed", "broke", "dance on top of"];

  let what = [
    "my homework",
    "my phone",
    "the car",
    "Empire State",
    "the dead sea"
  ];

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let frase = [who + action + what + when];
  /*  document.querySelector("#excuse").innerHTML = randomnumber; */

  function NUMRANDOM(NUM) {
    return Math.floor(Math.random() * NUM);
  }

  let text = " ";
  frase.map(item => {
    text += "item.who";
  });

  console.log(frase);
};
