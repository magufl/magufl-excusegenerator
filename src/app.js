/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = resultado();
  });

  let resultado = () => {
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

    let aleatoriowho = Math.floor(Math.random() * who.length);
    let aleatorioaction = Math.floor(Math.random() * action.length);
    let aleatoriowhat = Math.floor(Math.random() * what.length);
    let aleatoriowhen = Math.floor(Math.random() * when.length);

    return (
      who[aleatoriowho] +
      " " +
      action[aleatorioaction] +
      " " +
      what[aleatoriowhat] +
      " " +
      when[aleatoriowhen]
    );
  };
};
