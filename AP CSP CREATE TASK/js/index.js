import "../css/style.css";

const DOMSelectors = {
  display: document.getElementById("display"),
  qbutton: document.getElementById("quote"),
};

const quotes = "https://api.quotable.io/random";
const dog = "https://random.dog/woof.json";

async function get(quotes) {
  try {
    const response = await fetch(quotes);
    const data = await response.json();
    /*     document.getElementById("api-response").innerHTML = data.content; */
    DOMSelectors.display.insertAdjacentHTML(
      "afterbegin",
      `
<div id = "test">
<h1 id= "quoteHeader">${data.content}</h1>
</div>
`
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

/* async function getDog(dog) {
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
}
 */
DOMSelectors.qbutton.addEventListener("click", function () {
  get(quotes, dog);
});
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
