import "../css/style.css";
import { data } from "./array";

const DOMSelectors = {
  display: document.getElementById("display"),
  button: document.getElementById("combination"),
  reject: document.getElementById("reject"),
  accept: document.getElementById("accept"),
  apiSwitch: document.getElementById("imageSwitch"),
  counter: document.getElementById("counter"),
  historyDisplay: document.getElementById("historydisplay"),
};

DOMSelectors.apiSwitch.addEventListener("click", function () {
  if (DOMSelectors.display.classList.contains("dog")) {
    DOMSelectors.display.classList.add("cat");
    DOMSelectors.display.classList.remove("dog");
    DOMSelectors.apiSwitch.innerHTML = `cats`;
  } else {
    DOMSelectors.display.classList.add("dog");
    DOMSelectors.display.classList.remove("cat");
    DOMSelectors.apiSwitch.innerHTML = `dogs`;
  }
}); // This function uses a button and click input by the user to change the class of the div in the html file where the output/result will be displayed. It detects whether or not this class is cat or dog, and if it is either cat or dog, then it switches it to the opposite name. Either way, the first result seen by the user will be an image of a cat, since everything is set up to be with a cat when the user first opens the web page. The user can then choose to run the code contuining to use the cat images exclusively, or to switch it to dog images, or back again.

const history = [];
const quotes = "https://api.quotable.io/random"; //quotes provided by the api.quoatable.io api. Github page: https://github.com/lukePeavey/quotable
const dog = "https://random.dog/woof.json"; //images provided by the random.dog api.
const cat = "https://cataas.com/cat?json=true"; //Images provided by the cats as a service rest api.

async function get(quotes, dog, cat) {
  try {
    DOMSelectors.display.innerHTML = "";
    const response = await fetch(quotes);
    const response1 = await fetch(dog);
    const response2 = await fetch(cat);
    const data = await response.json();
    const data1 = await response1.json();
    const data2 = await response2.json(); //functions fetches and retrieves all apis and returns usable json objects.
    /*     document.getElementById("api-response").innerHTML = data.content; */

    if (DOMSelectors.display.classList.contains("cat")) {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `
  <div id = "output">
  <h1 id= "quoteHeader">${data.content}</h1>
  <img id = "catImg" src = https://cataas.com/${data2.url}>
  </div>
  `
      ); //This code checks whether or not the div in where the results will be displayed contains the "cat" class. If it does, then the function will insert quote from the quote api regardless, however inserts a cat image and not a dog image.
    } else {
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `
      <div id = "output">
      <h1 id= "quoteHeader">${data.content}</h1>
      <img id = "dogImg" src = ${data1.url}>
      </div>`
      ); //This code checks whether or not the div in where the results will be displayed contains anything but the "cat" class. If it does contain a different class other than "cat" (in this case dog, as predetermined by the apiSwitch button), then the function will insert a quote from the quote api regardless of this class change, however inserts a dog image and not a cat image.
      history.push(`${data.content}, ${data1.url}`);
      console.log(history);
      console.log(history[0]);
    }

    console.log(data, data1, data2);
  } catch (error) {
    console.log(error);
  }
}

get(quotes, dog, cat); //This code will immediatly run upon the user loading the page. Because everything is set to "cat" by default, the user will automatically recieve an image of a cat.

let i = 0; //Declares the used counter variable in global scope.
DOMSelectors.accept.addEventListener("click", function () {
  get(quotes, dog, cat); //Gets the quote, with the option of dog or cat depending on the user's choice from the earlier apiSwitch button.
  i++; //Adds the number "1" to the counter.
  console.log(i);
  DOMSelectors.counter.innerHTML = "";
  DOMSelectors.counter.insertAdjacentHTML(
    "afterbegin",
    `<h2 class = "counterSize ">${i}</h2>`
  ); //Inserts the new number that the counter now has into the page.
});

DOMSelectors.reject.addEventListener("click", function () {
  get(quotes, dog, cat);
  if (i <= 0) {
    //Checks whether or not counter is below or equal to zero.
    DOMSelectors.counter.innerHTML = "";
    let i = 0; //If the counter is below/equal to zero, the counter sets itself to the "0" number.
    DOMSelectors.counter.insertAdjacentHTML(
      "afterbegin",
      `<h2 class = "counterSize ">${i}</h2>`
    );
  } else {
    i--; //If the counter is, in this case, above 0, then it will subtract the number "1" from the counter.
    console.log(i);
    DOMSelectors.counter.innerHTML = "";
    DOMSelectors.counter.insertAdjacentHTML(
      "afterbegin",
      `<h2 class = "counterSize ">${i}</h2>`
    );
  }
});
