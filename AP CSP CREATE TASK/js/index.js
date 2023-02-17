import "../css/style.css";
/*
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

/* import { data } from "./array";



DOMSelectors.input.addEventListener("click", function () {
  function chance(min, max) {
    min = Math.ceil(1);
    max = Math.floor(8);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function gChance() {
    let gumball = chance();
    console.log(gumball);

    data
      .filter((gum) => gum.value == gumball)
      .forEach((gumi) => console.log(gumi.flavor));
    function gResult() {
      data
        .filter((gum) => gum.value == gumball)
        .forEach((gumi) => {
          console.log(gumi.rating);
          if (gumi.rating >= 50) {
            console.log("Acceptable");
          } else {
            console.log("no");
          }
        });
    }
    gResult();
  }
  gChance();
});

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
    test2();
    data
      .filter((gum) => gum.value == gumball)
      .forEach(
        (gumi) =>
          function () {
            if (gumi.value >= 50) {
              console.log("It is acceptable");
            } else {
              console.log("Unacceptable");
            }
          }
      );
  }

  test3();
}

test();
 */

const DOMSelectors = {
  display: document.getElementById("display"),
};

const quotes = "https://api.goprogram.ai/inspiration";
const dog = "https://random.dog/woof";

async function getQuote(quotes) {
  try {
    const response = await fetch(quotes);
    const data = await response.json();
    document.getElementById("api-response").innerHTML = data.quote;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getQuote(quotes);

async function getDog() {
  try {
    const response = await fetch(dog);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
    } else {
      const data = await response.json();
      console.log(data);
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `<img alt = "A dog" src = "${data.url}">`
      );
    }
  } catch (error) {
    console.log(error);
    console.log("Get outta here fix your code");
  }
}
getDog();
