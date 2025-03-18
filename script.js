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

//********************* show recipes in grid **********************/

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

  /* add amount of ingrediant */
  const cardRecipeIng = document.createElement("p");
  cardRecipeIng.classList.add("card-ing");
  cardTitleLink.appendChild(cardRecipeIng);
  recipeCard.appendChild(cardTitleLink);
  cardRecipeIng.innerText = "ingredients: " + recipeObject.ingredients.length;
}

//**************** Form visible  *****************/

function addRecipeClick() {
  const formShow = document.getElementById("formItemsContainer");
  formShow.style.display = "flex";
  formShow.scrollIntoView();
}

function cancelBtnClicked() {
  const formShow = document.getElementById("formItemsContainer");
  formShow.style.display = "none";
}

//**************** Add new recipe  *****************/

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

//**************** Add new ingredient Button *****************/

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

// //**************** Search betwween recipes *****************/
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
//**************** Sort Ingredients *****************/

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
