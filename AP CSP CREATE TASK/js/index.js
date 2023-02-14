/* import "../css/style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
 */

import { data } from "./array";

function chance(min, max) {
  min = Math.ceil(1);
  max = Math.floor(8);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function test() {
  let gumball = chance();
  console.log(gumball);

  function test2() {
    data
      .filter((gum) => gum.value == gumball)
      .forEach((gumi) => console.log(gumi.flavor));
  }

  function test3() {
    console.log("Flavor:");
    data
      .filter((gum) => gum.value == gumball)
      .forEach((gumi) => console.log(gumi.rating));
  }

  test3();
}

test();
