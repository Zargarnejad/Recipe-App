let recipes;
let recipePrice;

fetch(
  "https://raw.githubusercontent.com/Zargarnejad/zargarnejad.github.io/refs/heads/main/data.json"
).then((response) => {
  recipes = response.json();
  showRecipesInGrid();
});
fetch(
  "https://raw.githubusercontent.com/Zargarnejad/zargarnejad.github.io/refs/heads/main/ingredient-price.json"
).then((response) => {
  recipePrice = response.json();
});

let recipeCounter = 1;
let ingredientNumber = 4;
let isTimerRunning = false;

document
  .getElementById("addRecipeBtn")
  .addEventListener("click", addRecipeClick);

document.getElementById("searchBtn").addEventListener("click", searchRecipe);
document.getElementById("search").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchRecipe();
  }
});

document
  .getElementById("searchIngredientBtn")
  .addEventListener("click", searchIngredients);

document.getElementById("sortAscBtn").addEventListener("click", sortAsc);

document.getElementById("sortDesBtn").addEventListener("click", sortDes);
document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("timeContainer").style.display = "none";
});

// ************************* Functions **************************/
// *************************************************************/

function showRecipesInGrid() {
  const recipesContainer = document.getElementById("cards-container");
  recipesContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    addRecipeToGrid(recipe);
  });
}

//********************* Add a new recipe in grid **********************/

function addRecipeToGrid(recipeObject) {
  const recipeCard = document.createElement("div");
  recipeCard.classList.add("cards");
  const recipesContainer = document.getElementById("cards-container");
  recipesContainer.appendChild(recipeCard);

  /* add image */
  const cardPicture = document.createElement("a");
  cardPicture.classList.add("card-picture");
  recipeCard.appendChild(cardPicture);
  const foodImage = document.createElement("img");
  foodImage.src = recipeObject.picture_url;
  foodImage.classList.add("card-img");
  cardPicture.appendChild(foodImage);

  /* add category */
  const cardRecipeCategory = document.createElement("p");
  cardRecipeCategory.classList.add("card-category");
  recipeCard.appendChild(cardRecipeCategory);
  cardRecipeCategory.innerText = recipeObject.category;

  /* add title */
  const cardTitleLink = document.createElement("a");
  cardTitleLink.classList.add("card-title-link");
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = recipeObject.title;
  cardTitleLink.appendChild(cardTitle);
  recipeCard.appendChild(cardTitleLink);

  /* creat a section for showing some info about food */
  // ***************************************************/

  const recipeMoreInfo = document.createElement("div");
  recipeMoreInfo.classList.add("moreInfo");
  recipeCard.appendChild(recipeMoreInfo);

  // add cooking time
  const recipeCookingTime = document.createElement("div");
  recipeCookingTime.classList.add("cardCookTime");
  const cooktime = document.createElement("a");
  cooktime.classList.add("card-ing");
  recipeCookingTime.appendChild(cooktime);
  recipeMoreInfo.appendChild(recipeCookingTime);
  cooktime.innerText = recipeObject.cooking_time + " min";
  recipeCookingTime.addEventListener("click", () => {
    recipeCookingTimeClicked(recipeObject.cooking_time);
  });

  /* add amount of ingrediant */
  const ingCountainer = document.createElement("div");
  ingCountainer.classList.add("cardCookTime");

  /* add amount of ingrediant */
  const cardRecipeIng = document.createElement("p");
  cardRecipeIng.classList.add("card-ing");
  cardTitleLink.appendChild(cardRecipeIng);
  ingCountainer.appendChild(cardRecipeIng);
  recipeMoreInfo.appendChild(ingCountainer);
  cardRecipeIng.innerText = "ingredients: " + recipeObject.ingredients.length;
  
  const recipePriceContainer = document.createElement("div");
  recipePriceContainer.classList.add("cardCookTime");
  const recipePriceTitle = document.createElement("a");
  recipePriceTitle.classList.add("card-ing");
  recipePriceContainer.appendChild(recipePriceTitle);
  recipePriceTitle.innerText = "Price";
  recipeMoreInfo.appendChild(recipePriceContainer);
  recipePriceTitle.addEventListener("click", () => {
    priceClick(recipeObject);
  });
}

function priceClick(recipe) {
  const recipePriceContainerShow = document.getElementById(
    "recipePriceContainer"
  );

  const recipeIngList = document.getElementById("ingredientsList");
  recipeIngList.innerHTML = "";

  const recipetitle = document.getElementById("foodName");
  recipetitle.innerHTML = recipe.title;
  recipe.ingredients.forEach((ing) => {
    const recipeIngItems = document.createElement("li");
    recipeIngList.appendChild(recipeIngItems);
    const recipeIngItemName = document.createElement("p");
    recipeIngItemName.innerHTML = ing.NAME;
    const recipeIngItemPrice = document.createElement("p");
    recipeIngItemPrice.innerHTML = getIngredientPrice(ing.NAME);
    recipeIngItems.appendChild(recipeIngItemName);
    recipeIngItems.appendChild(recipeIngItemPrice);
    recipeIngList.appendChild(recipeIngItems);
  });

  document.getElementById("totalPrice").innerHTML =
    getTotalPrice(recipe) + " kr.";
  recipePriceContainerShow.style.display = "block";
  document.getElementById("overlay").style.display = "block";

  document.getElementById("closeContainer").addEventListener("click", () => {
    recipePriceContainerShow.style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });

  // recipePriceContainerShow.scrollIntoView();
}

function getIngredientPrice(ingName) {
  for (let i = 0; i < recipePrice.length; i++) {
    if (recipePrice[i].NAME === ingName) {
      return recipePrice[i].Price;
    }
  }
}

function getTotalPrice(recipe) {
  let sum = 0;
  recipe.ingredients.forEach((ingredient) => {
    let price = getIngredientPrice(ingredient.NAME);
    sum = sum + price;
  });
  return sum;
}

//************************ Form visible *************************/

function addRecipeClick() {
  const formShow = document.getElementById("formItemsContainer");
  formShow.style.display = "flex";
  formShow.scrollIntoView();
}

function cancelBtnClicked() {
  const formShow = document.getElementById("formItemsContainer");
  formShow.style.display = "none";
}

//************************ Add new recipe **************************/

function saveBtnClicked() {
  recipeCounter = recipeCounter + 1;

  const title = document.getElementById("title").value;
  const picture_url = document.getElementById("picture").value;
  const description = document.getElementById("descriptionArea").value;
  const category = document.getElementById("category").value;
  const ingredientsList = [];
  for (let i = 0; i <= ingredientNumber; i++) {
    const nameValue = document.getElementById("ingName" + i).value;
    const amountValue = document.getElementById("ingAmount" + i).value;
    const newIng = { NAME: nameValue, AMOUNT: amountValue };
    ingredientsList.push(newIng);
  }

  const newRecipe = {
    id: recipeCounter,
    title,
    picture_url,
    ingredients: ingredientsList,
    description,
    category,
  };
  recipes.push(newRecipe);

  addRecipeToGrid(newRecipe);
  cancelBtnClicked();
}

//*************************** Add new ingredient **************************/

function addIngredient() {
  ingredientNumber = ingredientNumber + 1;
  const newDiv = document.createElement("div");
  newDiv.classList.add("ingInfo");

  const newNameLable = document.createElement("label");
  newNameLable.setAttribute("for", "ingName" + ingredientNumber);
  newNameLable.innerText = "Name:";

  const newNameInput = document.createElement("input");
  newNameInput.classList.add("formInput");
  newNameInput.setAttribute("id", "ingName" + ingredientNumber);
  newNameInput.setAttribute("name", "ingName");
  newNameInput.setAttribute("type", "text");

  const newAmountLable = document.createElement("label");
  newAmountLable.setAttribute("for", "ingAmount" + ingredientNumber);
  newAmountLable.innerText = "Amount:";

  const newAmountInput = document.createElement("input");
  newAmountInput.classList.add("formInput");
  newAmountInput.setAttribute("id", "ingAmount" + ingredientNumber);
  newAmountInput.setAttribute("name", "ingAmount");
  newAmountInput.setAttribute("type", "text");

  newDiv.appendChild(newNameLable);
  newDiv.appendChild(newNameInput);
  newDiv.appendChild(newAmountLable);
  newDiv.appendChild(newAmountInput);

  const ingredientsContainer = document.getElementById("ingredientsContainer");
  ingredientsContainer.appendChild(newDiv);
}

// //************************ Search between recipes ************************/
function searchRecipe() {
  const searchTextBox = document.getElementById("search");
  const searchTextBoxValue = searchTextBox.value.toLowerCase();
  const recipesContainer = document.getElementById("cards-container");
  recipesContainer.innerHTML = "";

  const searchResult = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTextBoxValue)
  );
  searchResult.forEach((item) => {
    addRecipeToGrid(item);
  });
}

// //************************ Search between ingredients ************************/
function searchIngredients() {
  const searchTextBox = document.getElementById("search");
  const searchTextBoxValue = searchTextBox.value.toLowerCase();
  const recipesContainer = document.getElementById("cards-container");
  recipesContainer.innerHTML = "";
  const searchResult = recipes.filter((recipe) => {
    let matchedIngredients = recipe.ingredients.filter((ing) => {
      return ing.NAME.toLowerCase().includes(searchTextBoxValue);
    });
    return matchedIngredients.length > 0;
  });

  searchResult.forEach((item) => {
    addRecipeToGrid(item);
  });
}
//**************** Sort amount of ngredients *****************/

function sortAsc() {
  recipes.sort(function (recipeA, recipeB) {
    if (recipeA.ingredients.length > recipeB.ingredients.length) {
      return 1;
    }
    if (recipeA.ingredients.length < recipeB.ingredients.length) {
      return -1;
    }
    return 0;
  });
  showRecipesInGrid();
}

function sortDes() {
  recipes.sort(function (recipeA, recipeB) {
    if (recipeA.ingredients.length < recipeB.ingredients.length) {
      return 1;
    }
    if (recipeA.ingredients.length > recipeB.ingredients.length) {
      return -1;
    }
    return 0;
  });
  showRecipesInGrid();
}

//*************************** Set cooking timer ******************************/

let startTime = 0;
let timerId;

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startBtnClicked);
const pauseBtn = document.getElementById("pauseBtn");
pauseBtn.addEventListener("click", pauseBtnClicked);

function recipeCookingTimeClicked(cookingTime) {
  stopTimer();
  const timerShow = document.getElementById("timeContainer");
  timerShow.style.display = "flex";

  document.getElementById("timeInput").value = cookingTime;
  const displayTime = document.getElementById("timeDisplay");
  let hrs = 0;
  let mins = 0;
  hrs = Math.floor(cookingTime / 60);

  let formatedHours = hrs.toLocaleString("en", { minimumIntegerDigits: 2 });

  mins = cookingTime % 60;

  let formatedMinutes = mins.toLocaleString("en", { minimumIntegerDigits: 2 });

  displayTime.innerText = formatedHours + ":" + formatedMinutes + ":00";
}

function startBtnClicked() {
  startTime = document.getElementById("timeInput").value * 60;
  document.getElementById("pauseBtn").innerHTML = "Pause";

  startTimer();
}

function startTimer() {
  isTimerRunning = true;
  timerId = setInterval(timerHandler, 1000);
  startBtn.setAttribute("disabled", true);
  pauseBtn.removeAttribute("disabled");
  document.getElementById("timeInput").setAttribute("disabled", true);
}

function timerHandler() {
  startTime--;

  let hrs = Math.floor(startTime / 3600);

  let formatedHours = hrs.toLocaleString("en", {
    minimumIntegerDigits: 2,
  });

  let mins = Math.floor((startTime % 3600) / 60);

  let formatedMinutes = mins.toLocaleString("en", {
    minimumIntegerDigits: 2,
  });

  let secs = Math.floor((startTime % 3600) % 60);

  let formatedSeconds = secs.toLocaleString("en", {
    minimumIntegerDigits: 2,
  });

  const displayTime = document.getElementById("timeDisplay");
  displayTime.innerText =
    formatedHours + ":" + formatedMinutes + ":" + formatedSeconds;
  if (startTime === 0) {
    stopTimer();
    playAlarm();
  }
}

function pauseBtnClicked() {
  if (isTimerRunning) {
    document.getElementById("pauseBtn").innerHTML = "Resume";
    document.getElementById("timeInput").removeAttribute("disabled");

    stopTimer();
  } else {
    document.getElementById("pauseBtn").innerHTML = "Pause";
    document.getElementById("timeInput").setAttribute("disabled", true);
    startTimer();
  }
}

function stopTimer() {
  isTimerRunning = false;
  clearInterval(timerId);
  startBtn.removeAttribute("disabled");
}

function playAlarm() {
  const audio = document.createElement("audio");
  audio.setAttribute("src", "./timer-alarm.mp3");
  audio.play();
}

//*************************** Calculate user's spent time  ******************************/
let second = 0;
let userTimer = document.getElementById("spentTime");

function userTime() {
  second++;
  userTimer.innerHTML = "  " + second + " seconds";
}
let spentTime = setInterval(userTime, 1000);

window.addEventListener("beforeunload", () => clearInterval(spentTime));

//*************************** Add recipe's price**************************/
