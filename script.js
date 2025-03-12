//  ***********************  data base  ********************
const recipes = [
  {
    id: 1,
    title: "Gløgg",
    picture_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Gl%C3%B6gg_kastrull.JPG/800px-Gl%C3%B6gg_kastrull.JPG",
      // "https://www.santamariaworld.com/optimized/maximum/globalassets/_recipes/christmas-recipes/vit-glogg-med-kanel-kardemumma-och-apelsin.jpg",
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
    category: "Drink",
  },
  {
    id: 2,
    title: "Creamy Garlic Mushroom Penne",
    picture_url:
      "https://butterbuddies.ca/cdn/shop/articles/3C4E1B5B-0D00-4C58-B46A-B95867FFE172.jpg?v=1685654872&width=1100",
    ingredients: [
      { NAME: "Chicken", AMOUNT: "500 gr" },
      { NAME: "Lemon", AMOUNT: "2 pieces" },
      { NAME: "Olive Oil", AMOUNT: "3 tsp" },
      { NAME: "Garlic", AMOUNT: "4 cloves" },
      { NAME: "Black Pepper", AMOUNT: "1/2 tsp" },
      { NAME: "Chili Pepper", AMOUNT: "1 piece" },
      { NAME: "Onion", AMOUNT: "2 pices" },
      { NAME: "Cumin", AMOUNT: "1pices" },
      { NAME: "Potato", AMOUNT: "500 kg" },
    ],
    description: "Mix everything, heat it, and you are good to go!",
    category: "Pasta",
  },
  {
    id: 3,
    title: "Orange, almond and polenta cake",
    picture_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iVxjZldgC0KUSbeSVU28CbOgBvgFFyOIpw&s",
    ingredients: [
      { NAME: "Butter ", AMOUNT: "200  g" },
      { NAME: " Demerara sugar", AMOUNT: "200 g" },
      { NAME: "Sugar", AMOUNT: "125 g" },
      { NAME: "Eggs", AMOUNT: "5" },
      { NAME: "ground almonds", AMOUNT: "200 g" },
      { NAME: "Orange zest", AMOUNT: "2tsp" },
      { NAME: "Orange blossom water", AMOUNT: "1 tsp" },
      { NAME: "Baking powder", AMOUNT: "1tsp" },
    ],
    description:
      "To make the syrup place the orange and lemon juice in a small saucepan with the sugar, orange blossom water and star anise. Bring to the boil and simmer gently for 20 minutes. Set aside to cool to room temperature.",
    category: "Cake",
  },
  {
    id: 4,
    title: "Tomato salad with sumac",
    picture_url:
      "https://simplefood.blog/wp-content/uploads/2019/04/tomato-mezze2.jpg?w=1024",
    ingredients: [
      { NAME: "Red or pink onion", AMOUNT: " 1" },
      { NAME: "Lemon zest", AMOUNT: " 2 tsp" },
      { NAME: "Pine nuts", AMOUNT: "1/2 cup" },
      { NAME: "Red wine vinegar", AMOUNT: "1/2 cup" },
      { NAME: "Olive oil", AMOUNT: "1 tsp" },
      { NAME: "Sea salt", AMOUNT: "1 tsp" },
      { NAME: "Oregano", AMOUNT: "1 bunch" },
      { NAME: "Parsley", AMOUNT: "1tsp" },
      ,
    ],
    description: "Mix everything, put them in a bowl and enjoy it!",
    category: "Salad",
  },
  {
    id: 5,
    title: "Baked chicken with bacon",
    picture_url:
      "https://simplefood.blog/wp-content/uploads/2020/05/chicken-with-cider2.png?w=1024",
    ingredients: [
      { NAME: "Chicken", AMOUNT: "4" },
      { NAME: "Water", AMOUNT: "200 ml" },
      { NAME: "Olive oil", AMOUNT: " 1 tsp" },
      { NAME: "Brown onion", AMOUNT: "1" },
      { NAME: "Thyme", AMOUNT: "3 tsp" },
      { NAME: "Salt", AMOUNT: " 1 tsp" },
      { NAME: "Pepper", AMOUNT: "1 tsp" },
    ],
    description:
      "Add the chicken and brown the pieces all over until golden brown. Remove from the pan, and set aside. Place the onion, garlic, bacon and thyme into the pan and saute until the onion is softened. Take care not to burn the garlic. Turn the heat up to high.",
    category: "Chicken",
  },
  {
    id: 6,
    title: "Rainbow salad with haloumi",
    picture_url:
      "https://simplefood.blog/wp-content/uploads/2020/03/rainbow-salad2.jpg?w=1024",
    ingredients: [
      { NAME: "Mixed salad leaves", AMOUNT: "120 gr" },
      { NAME: "Carrots", AMOUNT: "2" },
      { NAME: "Cherry tomatoes", AMOUNT: "250 gr" },
      { NAME: "Fresh corn", AMOUNT: "2 cobs" },
      { NAME: "Pecan nuts", AMOUNT: "1/2 cup" },
      { NAME: "Capers", AMOUNT: "2 tsp" },
      { NAME: "Chili flakes", AMOUNT: "1/2 tsp" },
      { NAME: "Lemon juice", AMOUNT: "3 tsp" },
      { NAME: "Chives", AMOUNT: " 1 small bunch" },
      { NAME: "Pepitas", AMOUNT: " 1/3 cup" },
      { NAME: "Beetroot", AMOUNT: " 1 medium size" },
    ],
    description:
      "Dice capsicums into 1 cm square pieces. Peel carrots and julienne. Peel beetroot and julienne. Keep the beetroot separate from the other ingredients so its rich purple juice doesn’t stain the other ingredients. Cut the tomatoes into halves. Using a sharp knife cut the kernels off the corn cobs. Roughly chop the parsley and snip the chives. Make the dressing. Place 2 1/2 tablespoons olive oil, the lemon juice, capers and chilli flakes in a small glass jar with a lid. ",
    category: "Salad",
  },
  {
    id: 7,
    title: "Chilli prawns with pasta",
    picture_url:
      "https://simplefood.blog/wp-content/uploads/2017/07/chilli-prawns.jpg?w=1024",

    ingredients: [
      { NAME: "Olive oil", AMOUNT: "1 tsp" },
      { NAME: "Garlic", AMOUNT: "4 cloves" },
      { NAME: "Red chili", AMOUNT: "1" },
      { NAME: "White wine", AMOUNT: "80 ml" },
      { NAME: "Butter", AMOUNT: "60 g" },
      { NAME: "Prawn", AMOUNT: "1 kg" },
      { NAME: "Parsley", AMOUNT: "2 tsp" },
      { NAME: "Salt", AMOUNT: "1 tsp" },
      { NAME: "Lemon", AMOUNT: " 1 large" },
    ],
    description:
      "Heat the olive oil in a large frying pan over medium heat. Saute the garlic and chilli for a couple of minutes.  As soon as the water is boiling, add the pasta to the pot. Add the wine to the pan with the chilli and garlic and cook for a minute or two. Add the prawns and cook until they change colour and are just cooked through. By this time the pasta should be just about ready. Add the butter to the prawns and stir to coat them. Drain the pasta in a colander and then add to the prawns. Toss together with the lemon zest and parsley, check the seasoning and add salt to taste. Serve immediately.",
    category: "Pasta",
  },
];

let recipeCounter = 1;
let ingredientNumber = 4;

document
  .getElementById("addRecipeBtn")
  .addEventListener("click", addRecipeClick);

document.getElementById("searchBtn").addEventListener("click", searchClicked);

document.getElementById("sortAscBtn").addEventListener("click", sortAscClicked);

document.getElementById("sortDesBtn").addEventListener("click", sortDesClicked);

//********************* show recipes in grid **********************/

function showRecipesInGrid() {
  for (let i = 0; i < recipes.length; i++) {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("cards");
    const recipesContainer = document.getElementById("cards-container");
    recipesContainer.appendChild(recipeCard);

    /* add image */
    const cardPicture = document.createElement("a");
    cardPicture.classList.add("card-picture");
    recipeCard.appendChild(cardPicture);
    const foodImage = document.createElement("img");
    foodImage.src = recipes[i].picture_url;
    foodImage.classList.add("card-img");
    cardPicture.appendChild(foodImage);

    /* add category */
    const cardRecipeCategory = document.createElement("p");
    cardRecipeCategory.classList.add("card-category");
    recipeCard.appendChild(cardRecipeCategory);
    cardRecipeCategory.innerText =  recipes[i].category;

    /* add title */
    const cardTitleLink = document.createElement("a");
    cardTitleLink.classList.add("card-title-link");
    const cardTitle = document.createElement("h1");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = recipes[i].title;
    cardTitleLink.appendChild(cardTitle);
    recipeCard.appendChild(cardTitleLink);

    /* add amount of ingrediant */
    const cardRecipeIng = document.createElement("p");
    cardRecipeIng.classList.add("card-ing");
    cardTitleLink.appendChild(cardRecipeIng);
    recipeCard.appendChild(cardTitleLink);
    cardRecipeIng.innerText = "ingredients: " + recipes[i].ingredients.length;
  }
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

//*******************  show recipes in the page **********************/

// function addRecipeToPage(recipeObject) {
//   const recipePart = document.createElement("div");
//   recipePart.classList.add("Container");
//   const recipesContainer = document.getElementById("recipesContainer");
//   recipesContainer.appendChild(recipePart);

//   //*************** structure of show of recipes

//   const foodImageContainer = document.createElement("div");
//   foodImageContainer.classList.add("foodImageDiv");
//   recipePart.appendChild(foodImageContainer);
//   const foodImage = document.createElement("img");
//   foodImage.src = recipeObject.picture_url;
//   foodImageContainer.appendChild(foodImage);

//   //***************

//   const descriptionContainer = document.createElement("div");
//   descriptionContainer.classList.add("recipeContent");
//   recipePart.appendChild(descriptionContainer);

//   const foodName = document.createElement("h2");
//   foodName.classList.add("mainTitles");
//   foodName.innerText = recipeObject.title;
//   descriptionContainer.appendChild(foodName);

//   const ingredientsTitle = document.createElement("p");
//   ingredientsTitle.innerText = "Ingredients:";
//   ingredientsTitle.style.textDecoration = "underline";
//   descriptionContainer.appendChild(ingredientsTitle);

//   const ingredientsList = document.createElement("ul");
//   ingredientsList.classList.add("ingredientsList");

//   for (let i = 0; i < recipeObject.ingredients.length; i++) {
//     if (recipeObject.ingredients[i].AMOUNT != undefined) {
//       let listItem = document.createElement("li");
//       let listItemName = document.createElement("div");
//       let listItemAmount = document.createElement("div");
//       listItem.appendChild(listItemName);
//       listItem.appendChild(listItemAmount);
//       listItemName.innerText = recipeObject.ingredients[i].NAME;
//       listItemAmount.innerText = recipeObject.ingredients[i].AMOUNT;
//       ingredientsList.appendChild(listItem);
//     }
//   }
//   descriptionContainer.appendChild(ingredientsList);

//   const descriptionTitle = document.createElement("p");
//   descriptionTitle.classList.add("recipeDescription");
//   descriptionTitle.innerText = "Description:";
//   descriptionTitle.style.textDecoration = "underline";
//   const description = document.createElement("p");

//   description.innerText = recipeObject.description;
//   descriptionContainer.appendChild(descriptionTitle);
//   descriptionContainer.appendChild(description);
// }

// //**************** Form visible  *****************/

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
  let categoryValue = document.getElementById("category").value;
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
    category:categoryValue,
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
function searchClicked() {
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

function sortAscClicked() {
  recipes.sort(function (recipeA, recipeB) {
    if (recipeA.ingredients.length > recipeB.ingredients.length) {
      return 1;
    }
    if (recipeA.ingredients.length < recipeB.ingredients.length) {
      return -1;
    }
    return 0;
  });
  const recipesContainer = document.getElementById("cards-container");
  recipesContainer.innerHTML = "";
  recipes.forEach((item) => {
    addRecipeToGrid(item);
  });
}

function sortDesClicked() {
  recipes.sort(function (recipeA, recipeB) {
    if (recipeA.ingredients.length < recipeB.ingredients.length) {
      return 1;
    }
    if (recipeA.ingredients.length > recipeB.ingredients.length) {
      return -1;
    }
    return 0;
  });
  const recipesContainer = document.getElementById("cards-container");
  recipesContainer.innerHTML = "";

  recipes.forEach((item) => {
    addRecipeToGrid(item);
  });
}

// addRecipeToPage(recipes[0]);
