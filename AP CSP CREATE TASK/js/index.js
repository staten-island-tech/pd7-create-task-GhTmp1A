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
  reject: document.getElementById("reject"),
  accept: document.getElementById("accept"),
  counter: document.getElementById("counter"),
};

const quotes = "https://api.quotable.io/random";
const dog = "https://random.dog/woof.json";
const cat = "https://cataas.com/cat?json=true";

async function get(quotes, dog, cat) {
  try {
    DOMSelectors.display.innerHTML = "";
    const response = await fetch(quotes);
    const response1 = await fetch(dog);
    const response2 = await fetch(cat);
    const data = await response.json();
    const data1 = await response1.json();
    const data2 = await response2.json();
    /*     document.getElementById("api-response").innerHTML = data.content; */
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `
<div id = "test">
<h1 id= "quoteHeader">${data.content}</h1>
<img id = "dogImg" src = ${data1.url}>
<img id = "catImg" src = https://cataas.com/${data2.url}>
</div>
`
    );
    console.log(data, data1, data2);
  } catch (error) {
    console.log(error);
  }
}

get(quotes, dog, cat);

let i = 0;
DOMSelectors.accept.addEventListener("click", function () {
  get(quotes, dog, cat);
  i++;
  console.log(i);
  DOMSelectors.counter.innerHTML = "";
  DOMSelectors.counter.insertAdjacentHTML(
    "afterbegin",
    `<h2 class = "counterSize ">${i}</h2>`
  );
});

DOMSelectors.reject.addEventListener("click", function () {
  get(quotes, dog, cat);
  if (i <= 0) {
    DOMSelectors.counter.innerHTML = "";
    let i = 0;
    DOMSelectors.counter.insertAdjacentHTML(
      "afterbegin",
      `<h2 class = "counterSize ">${i}</h2>`
    );
  } else {
    i--;
    console.log(i);
    DOMSelectors.counter.innerHTML = "";
    DOMSelectors.counter.insertAdjacentHTML(
      "afterbegin",
      `<h2 class = "counterSize ">${i}</h2>`
    );
  }
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
