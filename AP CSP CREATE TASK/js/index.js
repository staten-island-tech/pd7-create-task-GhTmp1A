import "../css/style.css";

const DOMSelectors = {
  display: document.getElementById("display"),
  button: document.getElementById("combination"),
  reject: document.getElementById("reject"),
  accept: document.getElementById("accept"),
  apiSwitch: document.getElementById("imageSwitch"),
  historyDisplay: document.getElementById("historydisplay"),
};
const history = [];
const quotes = "https://api.quotable.io/random"; //quotes provided by the api.quoatable.io api. Github page: https://github.com/lukePeavey/quotable
const dog = "https://random.dog/woof.json"; //images provided by the random.dog api.
const cat = "https://shibe.online/api/cats?count=1&urls=true&httpsUrls=false"; // images provided by the shibe.online api.

async function get(quotes, dog, cat) {
  try {
    DOMSelectors.display.innerHTML = "";
    const response = await fetch(quotes);
    const response1 = await fetch(dog);
    const response3 = await fetch(cat);
    const data = await response.json(history);
    const data1 = await response1.json(history);
    const data2 = await response3.json(history);

    console.log(data, data1, data2);
    history.forEach((element) => history.splice(history.indexOf(element)));
    history.push({ data, data1, data2 });
    console.log(history);

    function pageLoad() {
      console.log(history);
      if (DOMSelectors.display.classList.contains("cat")) {
        history.forEach((item) =>
          DOMSelectors.display.insertAdjacentHTML(
            "afterbegin",
            `  <div class = "output">
        <h1 id= "quoteHeader">${item.data.content}</h1>
  <img id = "catImg" src = ${item.data2[0]}>
  </div>`
          )
        );
      } else if (DOMSelectors.display.classList.contains("dog")) {
        console.log(`dog`);
        history.forEach((item) =>
          DOMSelectors.display.insertAdjacentHTML(
            "afterbegin",
            `  <h1 id= "quoteHeader">${item.data.content}</h1>
    <img id = "dogImg" src = ${item.data1.url}>
    </div>`
          )
        );
      }
    }

    pageLoad();

    return history;
  } catch (error) {
    console.log(error);
  }
}

get(quotes, dog, cat);

function test1() {
  if (DOMSelectors.display.classList.contains("dog")) {
    DOMSelectors.display.classList.add("cat");
    DOMSelectors.display.classList.remove("dog");
    DOMSelectors.apiSwitch.innerHTML = `cat`;
    DOMSelectors.display.innerHTML = "";
    console.log(history);
    console.log(`cat`);
    history.forEach((item) =>
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `  
        <div class = "output">
        <h1 id= "quoteHeader">${item.data.content}</h1>
<img id = "catImg" src = ${item.data2[0]}>

</div>`
      )
    );
  } else if (DOMSelectors.display.classList.contains("cat")) {
    DOMSelectors.display.classList.add("dog");
    DOMSelectors.display.classList.remove("cat");
    DOMSelectors.apiSwitch.innerHTML = `dog`;
    DOMSelectors.display.innerHTML = "";
    console.log(history);
    console.log(`dog`);
    history.forEach((item) =>
      DOMSelectors.display.insertAdjacentHTML(
        "afterbegin",
        `  <div class = "output">
        <h1 id= "quoteHeader">${item.data.content}</h1>
<img id = "dogImg" src = ${item.data1.url}>
</div>`
      )
    );
  }
}

DOMSelectors.apiSwitch.addEventListener("click", function () {
  test1();
});
// This function uses a button and click input by the user to change the class of the div in the html file where the output/result will be displayed. It detects whether or not this class is cat or dog, and if it is either cat or dog, then it switches it to the opposite name. Either way, the first result seen by the user will be an image of a cat, since everything is set up to be with a cat when the user first opens the web page. The user can then choose to run the code contuining to use the cat images exclusively, or to switch it to dog images, or back again.

DOMSelectors.accept.addEventListener("click", function () {
  get(quotes, dog, cat); //Gets the quote, with the option of dog or cat depending on the user's choice from the earlier apiSwitch button.
  console.log(history);
  if (DOMSelectors.display.classList.contains("cat")) {
    history.forEach((item) =>
      DOMSelectors.historyDisplay.insertAdjacentHTML(
        "afterbegin",
        `  <div class = "output">
        <h1 id= "quoteHeader">${item.data.content}</h1>
  <img id = "catImg" src = ${item.data2[0]}>
  </div>`
      )
    );
  } else {
    history.forEach((item) =>
      DOMSelectors.historyDisplay.insertAdjacentHTML(
        "afterbegin",
        `  <h1 id= "quoteHeader">${item.data.content}</h1>
  <img id = "dogImg" src = ${item.data1.url}>
  </div>`
      )
    );
  }

  console.log(history);
});

DOMSelectors.reject.addEventListener("click", function () {
  get(quotes, dog, cat);
});
