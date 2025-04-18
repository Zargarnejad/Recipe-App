// ********************** Global Variabels***********************/
// *************************************************************/

let recipes;
let recipePrice;

let recipeCounter = 1;
let ingredientNumber = 4;
let isTimerRunning = false;

let categories = [
  { id: 1, name: "Appetizers" },
  { id: 2, name: "Pasta" },
  { id: 3, name: "Cake" },
  { id: 4, name: "Salad" },
  { id: 5, name: "Drink" },
  { id: 6, name: "Soup" },
  { id: 7, name: "Dessert" },
  { id: 8, name: "Chicken" },
  { id: 9, name: "Meat" },
];

// **********************Fetch functions***********************/
// ***********************************************************/

async function fetchRecipes() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Zargarnejad/zargarnejad.github.io/refs/heads/main/data.json"
    );
    recipes = await response.json();
    renderRecipesInGrid(recipes);
  } catch (error) {
    console.error("Some errors happened:", error);
  }
}

async function fetchRecipePrices() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Zargarnejad/zargarnejad.github.io/refs/heads/main/ingredient-price.json"
    );
    recipePrice = await response.json();
  } catch (error) {
    console.error("Some errors happened:", error);
  }
}
fetchRecipes();
fetchRecipePrices();

// ********************** AddListeners **********************/
// *********************************************************/

document
  .getElementById("addRecipeBtn")
  .addEventListener("click", addRecipeClick);

document
  .getElementById("closeRecipieDetails")
  .addEventListener("click", hideRecipie);
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

//********************* Show recipes in grid **********************/

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
  cardTitle.addEventListener("click", () => {
    showRecipe(recipeObject);
  });

  /* create a section for showing some info about recipes */

  const recipeMoreInfo = document.createElement("div");
  recipeMoreInfo.classList.add("moreInfo");
  recipeCard.appendChild(recipeMoreInfo);

  /* add cooking time */
  const recipeCookingTime = document.createElement("div");
  recipeCookingTime.classList.add("cardCookTime");

  const timeIcon = document.createElement("i");
  timeIcon.classList.add("fa-solid");
  timeIcon.classList.add("fa-clock");

  const cooktimeText = document.createElement("a");
  cooktimeText.classList.add("card-ing");
  cooktimeText.innerText = " " + recipeObject.cooking_time + " min";

  recipeCookingTime.appendChild(timeIcon);
  recipeCookingTime.appendChild(cooktimeText);

  recipeCookingTime.addEventListener("click", () => {
    recipeCookingTimeClicked(recipeObject.cooking_time);
  });

  recipeMoreInfo.appendChild(recipeCookingTime);

  /* add amount of ingrediant */

  const ingCountainer = document.createElement("div");
  ingCountainer.classList.add("cardCookTime");

  /* add amount of ingrediant */

  const cardRecipeIng = document.createElement("p");
  cardRecipeIng.classList.add("card-ing");
  cardTitleLink.appendChild(cardRecipeIng);
  ingCountainer.appendChild(cardRecipeIng);
  recipeMoreInfo.appendChild(ingCountainer);
  cardRecipeIng.innerText =
    "ingredient count: " + recipeObject.ingredients.length;

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

//********************* Hide main page **********************/


function hideRecipie() {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.classList.remove("hidden");

  const recipeDetailContainer = document.getElementById(
    "recipeDetailContainer"
  );
  recipeDetailContainer.classList.add("hidden");
}

//********************* Display each recipe **********************/

function showRecipe(recipe) {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.classList.add("hidden");

  const recipeDetailContainer = document.getElementById(
    "recipeDetailContainer"
  );
  recipeDetailContainer.classList.remove("hidden");

  const recipePageFoodImg = document.getElementById("recipePageFoodImg");
  recipePageFoodImg.src = recipe.picture_url;

  const recipeCategoryTitle = document.getElementById("recipeCategoryTitle");
  recipeCategoryTitle.innerHTML = recipe.category;

  const recipeName = document.getElementById("recipeName");
  recipeName.innerHTML = recipe.title;

  const recipeCookingTime = document.getElementById("recipeCookingTime");
  recipeCookingTime.innerHTML = recipe.cooking_time + " min";
  recipeCookingTime.addEventListener("click", () => {
    recipeCookingTimeClicked(recipe.cooking_time);
  });

  const recipeIngredientList = document.getElementById("recipeIngredientList");
  recipeIngredientList.innerHTML = "";
  recipe.ingredients.forEach((ing) => {
    const ingLi = document.createElement("li");

    const amountEl = document.createElement("p");
    amountEl.innerHTML = ing.AMOUNT;

    const ingNameEl = document.createElement("p");
    ingNameEl.innerHTML = ing.NAME;
    ingNameEl.classList.add("ingredientName");

    ingLi.appendChild(amountEl);
    ingLi.appendChild(ingNameEl);

    recipeIngredientList.appendChild(ingLi);
  });

  const recipeDescription = document.getElementById("recipeDescription");
  recipeDescription.innerHTML = recipe.description;
}

//********************* Show the price of each recipe **********************/

function priceClick(recipe) {
  const recipePriceContainerShow = document.getElementById(
    "recipePriceContainer"
  );

  /* create a form for showing prices */

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
}

/* calculate the price*/

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
  const cooking_time = document.getElementById("cookingTime").value;

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
    cooking_time,
  };
  recipes.push(newRecipe);

  addRecipeToGrid(newRecipe);
  cancelBtnClicked();
}

//*************************** Add new ingredient  **************************/

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
  try {
    const searchTextBox = document.getElementById("search");
    const searchTextBoxValue = searchTextBox.value.toLowerCase();

    const searchResult = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTextBoxValue)
    );

    renderRecipesInGrid(searchResult);
  } catch (error) {
    console.error("Some errors happened:", error);
  }
}
// //************************ Search between ingredients ************************/

async function searchIngredients() {
  try {
    const searchTextBox = document.getElementById("search");
    const searchTextBoxValue = searchTextBox.value.toLowerCase();

    if (!recipes || recipes.length === 0) {
      await fetchRecipes();
    }

    const searchResult = recipes.filter((recipe) => {
      let matchedIngredients = recipe.ingredients.filter((ing) =>
        ing.NAME.toLowerCase().includes(searchTextBoxValue)
      );
      return matchedIngredients.length > 0;
    });

    renderRecipesInGrid(searchResult);
  } catch (error) {
    console.error("Some errors happened:", error);
  }
}

//**************** Sort amount of ingredients *****************/

function sortAsc() {
  try {
    recipes.sort(
      (recipeA, recipeB) =>
        recipeA.ingredients.length - recipeB.ingredients.length
    );

    renderRecipesInGrid(recipes);
  } catch (error) {
    console.error("Some errors happened for sorting:", error);
  }
}

function sortDes() {
  try {
    recipes.sort(
      (recipeA, recipeB) =>
        recipeB.ingredients.length - recipeA.ingredients.length
    );

    renderRecipesInGrid(recipes);
  } catch (error) {
    console.error("Some errors happened for sorting:", error);
  }
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

//*************************** Categories dropBox  ******************************/

const categoriesList = document.getElementById("categoryList");
for (let i = 0; i < categories.length; i++) {
  const categoriesItem = document.createElement("li");
  categoriesItem.innerHTML = categories[i].name;
  categoriesList.appendChild(categoriesItem);
  categoriesItem.addEventListener("click", () => {
    categoryItemClick(categories[i].name);
  });
}

//************************ list of category ************************/
function categoryItemClick(categoryName) {
  const categoriesRecipe = recipes.filter((recipe) => {
    const result = recipe.category === categoryName;
    return result;
  });
  renderRecipesInGrid(categoriesRecipe);
}

//************************ render function  ************************/

function renderRecipesInGrid(recipeList) {
  const recipesContainer = document.getElementById("cards-container");
  recipesContainer.innerHTML = "";
  recipeList.forEach((item) => {
    addRecipeToGrid(item);
  });
}
