//  ***********************  data base  ********************
const recipes = [
  {
    id: 1,
    title: "Gløgg",
    picture_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Gl%C3%B6gg_kastrull.JPG/800px-Gl%C3%B6gg_kastrull.JPG",
    ingredients: [
      { NAME: "Orange zest", AMOUNT: "0.5" },
      { NAME: "Water", AMOUNT: "200 ml" },
      { NAME: "Sugar", AMOUNT: "275 g" },
      { NAME: "Whole cloves", AMOUNT: "5" },
      { NAME: "Cinnamon sticks", AMOUNT: "2" },
      { NAME: "Spice", AMOUNT: undefined },
      { NAME: "Bottle of red wine", AMOUNT: "1" },
      { NAME: "Raisins", AMOUNT: "100 g" },
      { NAME: "Slipped Almonds", AMOUNT: "50 g" },
    ],
    description: "Mix everything, heat it, and you are good to go!",
  },
];

let recipeCounter = 1;
let ingredientNumber = 4;

//*******************  show recipes in the page **********************/

function addRecipeToPage(recipeObject) {
  const recipePart = document.createElement("div");
  recipePart.classList.add("Container");
  const recipesContainer = document.getElementById("recipesContainer");
  recipesContainer.appendChild(recipePart);

  //*************** structure of show of recipes

  const foodImageContainer = document.createElement("div");
  foodImageContainer.classList.add("foodImageDiv");
  recipePart.appendChild(foodImageContainer);
  const foodImage = document.createElement("img");
  foodImage.src = recipeObject.picture_url;
  foodImageContainer.appendChild(foodImage);

  //***************

  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("recipeContent");
  recipePart.appendChild(descriptionContainer);

  const foodName = document.createElement("h2");
  foodName.classList.add("mainTitles");
  foodName.innerText = recipeObject.title;
  descriptionContainer.appendChild(foodName);

  const ingredientsTitle = document.createElement("p");
  ingredientsTitle.innerText = "Ingradients:";
  ingredientsTitle.style.textDecoration = "underline";
  descriptionContainer.appendChild(ingredientsTitle);

  const ingredientsList = document.createElement("ul");
  ingredientsList.classList.add("ingredientsList");

  for (let i = 0; i < recipeObject.ingredients.length; i++) {
    let listItem = document.createElement("li");
    let listItemName = document.createElement("div");
    let listItemAmount = document.createElement("div");
    listItem.appendChild(listItemName);
    listItem.appendChild(listItemAmount);
    listItemName.innerText = recipeObject.ingredients[i].NAME;
    listItemAmount.innerText = recipeObject.ingredients[i].AMOUNT;
    ingredientsList.appendChild(listItem);
  }
  descriptionContainer.appendChild(ingredientsList);

  const descriptionTitle = document.createElement("p");
  descriptionTitle.classList.add("recipeDescription");
  descriptionTitle.innerText = "Description:";
  descriptionTitle.style.textDecoration = "underline";
  const description = document.createElement("p");

  description.innerText = recipeObject.description;
  descriptionContainer.appendChild(descriptionTitle);
  descriptionContainer.appendChild(description);
}

//**************** Add new recipe Button *****************/
const addRecipeBtn = document.getElementById("addRecipeBtn");
addRecipeBtn.addEventListener("mouseover", function (e) {
  addRecipeBtn.classList.add("btnMouseOver");
});
addRecipeBtn.addEventListener("mouseout", function (e) {
  addRecipeBtn.classList.remove("btnMouseOver");
});

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

  let titleValue = document.getElementById("title").value;
  let pictureUrlValue = document.getElementById("picture").value;
  let descriptionValue = document.getElementById("descriptionArea").value;
  let ingredientsList = [];
  for (let i = 0; i <= ingredientNumber; i++) {
    let nameValue = document.getElementById("ingName" + i).value;
    let amountValue = document.getElementById("ingAmount" + i).value;
    let newIng = { NAME: nameValue, AMOUNT: amountValue };
    ingredientsList.push(newIng);
  }

  const newRecipe = {
    id: recipeCounter,
    title: titleValue,
    picture_url: pictureUrlValue,
    ingredients: ingredientsList,
    description: descriptionValue,
  };
  recipes.push(newRecipe);

  addRecipeToPage(newRecipe);
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

addRecipeToPage(recipes[0]);
