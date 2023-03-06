import "../css/style.css";

const DOMSelectors = {
  display: document.getElementById("display"),
  button: document.getElementById("combination"),
  reject: document.getElementById("reject"),
  accept: document.getElementById("accept"),
  apiSwitch: document.getElementById("imageSwitch"),
  historyDisplay: document.getElementById("historydisplay"),
};

const history = []; //History array is declared.
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
    const data2 = await response3.json(history); //function retrieves responses from the api's and turns them into usable json objects.

    console.log(data, data1, data2);
    history.forEach((element) => history.splice(history.indexOf(element)));
    history.push({ data, data1, data2 }); //Previous data in the history array is removed, and new data recieved from the function is now pushed into the array.
    console.log(history);

    function pageLoad() {
      console.log(history);
      if (DOMSelectors.display.classList.contains("cat")) {
        history.forEach(
          (item) =>
            DOMSelectors.display.insertAdjacentHTML(
              "afterbegin",
              `  <div class = "output">
        <h1 id= "quoteHeader">${item.data.content}</h1>
  <img id = "catImg" src = ${item.data2[0]}>
  </div>`
            ) //If the display div class contains "cat" inside of it, then a cat image and a quote will be displayed.
        );
      } else if (DOMSelectors.display.classList.contains("dog")) {
        console.log(`dog`);
        history.forEach(
          (item) =>
            DOMSelectors.display.insertAdjacentHTML(
              "afterbegin",
              `  <h1 id= "quoteHeader">${item.data.content}</h1>
    <img id = "dogImg" src = ${item.data1.url}>
    </div>`
            ) //If the display div class contains "cat" inside of it, then a dog image and a quote will be displayed.
        );
      }
    }

    pageLoad();

    return history;
  } catch (error) {
    console.log(error);
  }
}

get(quotes, dog, cat); //THe function is run in the global scope.

function test1() {
  if (DOMSelectors.display.classList.contains("dog")) {
    DOMSelectors.display.classList.add("cat");
    DOMSelectors.display.classList.remove("dog");
    DOMSelectors.apiSwitch.innerHTML = `cat`;
    DOMSelectors.display.innerHTML = ""; //When the function is ran, it will replace the class inside of the display div with either "cat" or "dog" depending on what is already there.
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

DOMSelectors.accept.addEventListener("click", function () {
  get(quotes, dog, cat);
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
    ); //If the user chooses to accept the image combination, then the function uses the history array to display the proper combination of image and quote.
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
}); //If the user decides to reject the image combination, then the function will simply be called again, the previous images and quote will be removed from the history array, replaced by a new combination.
