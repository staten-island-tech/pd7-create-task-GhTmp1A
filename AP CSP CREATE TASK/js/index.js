import "../css/style.css";
import { data } from "./array";

// let array = data;

// console.log(array);

// Promise.all(data).then((res) => {
//   Promise.all(
//     res.map((item) => {
//       return item.json();
//     })
//   ).then((data) => console.log(data));
// });

/* let array = data;

async function test() {
  try {
    const response = await Promise.all(array);
    const data = await Promise.all(
      response.map((element) => {
        return element.json();
      })
    );
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div id = "output">
    <h1 class="quote">${data[0].content}</h1>
    <img id = "dogImg" src = "${data[1].url}">
    </div>`
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

DOMSelectors.button.addEventListener("click", function () {
  test();
});
 */

const DOMSelectors = {
  display: document.getElementById("display"),
  button: document.getElementById("combination"),
};

const quotes = "https://api.quotable.io/random";
const dog = "https://random.dog/woof.json";

async function get(quotes, dog) {
  try {
    DOMSelectors.display.innerHTML = "";
    const response = await fetch(quotes);
    const response1 = await fetch(dog);
    const data = await response.json();
    const data1 = await response1.json();
    /*     document.getElementById("api-response").innerHTML = data.content; */
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `
<div id = "test">
<h1 id= "quoteHeader">${data.content}</h1>
<img id = "dogImg" src = ${data1.url}>
</div>
`
    );
    console.log(data, data1);
  } catch (error) {
    console.log(error);
  }
}

DOMSelectors.button.addEventListener("click", function () {
  get(quotes, dog);
});
/* async function get(dog) {
  try {
    const response = await fetch(dog);
    const data = await response.json();
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",

      `
      <div id = "dogDiv">
      <img id = "dogImg" src = "${data.url}">
      </div>
      `
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
} */

/* async function getDog() {
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
getDog(); */
