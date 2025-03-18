let recipeCounter = 1;
let ingredientNumber = 4;

document
  .getElementById("addRecipeBtn")
  .addEventListener("click", addRecipeClick);

document.getElementById("searchBtn").addEventListener("click", searchRecipe);
document.getElementById("search").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchRecipe();
  }
});

document.getElementById("sortAscBtn").addEventListener("click", sortAsc);

document.getElementById("sortDesBtn").addEventListener("click", sortDes);

//*********************************** show recipes in grid **************************************/

// ************************* Functions **************************/
// *************************************************************/

function showRecipesInGrid() {
  const recipesContainer = document.getElementById("cards-container");
  recipesContainer.innerHTML = "";
  recipes.forEach((recipe) => {
    addRecipeToGrid(recipe);
  });
}

showRecipesInGrid();

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
  ingCountainer.classList.add("cardCookTme");

  /* add amount of ingrediant */
  const cardRecipeIng = document.createElement("p");
  cardRecipeIng.classList.add("card-ing");
  cardTitleLink.appendChild(cardRecipeIng);
  ingCountainer.appendChild(cardRecipeIng);
  recipeMoreInfo.appendChild(ingCountainer);
  cardRecipeIng.innerText = "ingredients: " + recipeObject.ingredients.length;
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

let startTimeInMin = 0;
let timerId;
let hrs = 0;
let mins = 0;
let secs = 0;

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startBtnClicked);
const pauseBtn = document.getElementById("pauseBtn");
pauseBtn.addEventListener("click", pauseBtnClicked);
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetBtnClicked);

function recipeCookingTimeClicked(cookingTime) {
  const timerShow = document.getElementById("timeContainer");
  timerShow.style.display = "flex";

  document.getElementById("timeInput").value = cookingTime;
  const displayTime = document.getElementById("timeDisplay");
  displayTime.innerText = hrs + ":" + mins + ":" + secs;

  hrs = Math.floor(cookingTime / 1000 / 60 / 60);
  hrs.innerHTML = hrs;
  mins = Math.floor(cookingTime / 1000 / 60) % 60;
  mins.innerHTML = mins;
  secs = Math.floor(cookingTime / 1000) % 60;
  secs.innerHTML = secs;
}

function startBtnClicked() {
  if (startTimeInMin === 0) {
    startTimeInMin = document.getElementById("timeInput").value;
  }
  timerId = setInterval(() => {
    startTimeInMin--;
    console.log(startTimeInMin);
    if (startTimeInMin === 0) {
      clearInterval(timerId);
      startBtn.removeAttribute("disabled");
    }
  }, 1000);
  startBtn.setAttribute("disabled", true);
  pauseBtn.removeAttribute("disabled");
  resetBtn.removeAttribute("disabled");
}

function pauseBtnClicked() {
  clearInterval(timerId);
  // console.log("clicked");
  startBtn.removeAttribute("disabled");
}

function resetBtnClicked() {
  clearInterval(timerId);
  // console.log("clicked");
  startTimeInMin = document.getElementById("timeInput").value;
  startBtn.removeAttribute("disabled");
}
