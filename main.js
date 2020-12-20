// getElementbyName(); --> for the radio buttons
// .checked --> as you iterate through each of the buttons to check if the value is indeed true (will also include a conditional)

// Data Model
var sides = ["Miso Glazed Carrots","Coleslaw","Garden Salad","Crispy Potatoes","Sweet Potato Tots","Coconut Rice","Caeser Salad","Shrimp Summer Rolls","Garlic Butter Mushrooms","Hush Puppies"];
var mains = ["Spaghetti and Meatballs","Pineapple Chicken","Shakshuka","Thai Yellow Curry","Bibimbap","Chicken Parmesean","Butternut Squash Soup","BBQ Chicken Burgers","Ramen","Empanadas","Chicken Fried Rice","Sheet Pan Fajitas","Margarita Pizza"];
var desserts = ["Apple Pie","Lemon Meringue Pie","Black Forest Cake","Banana Bread","Peach Cobbler","Cheesecake","Funfetti Cake","Baklava","Flan","Macarons","Macaroons","Chocolate Cupcakes","Pavlova","Pumpkin Pie","Key Lime Pie","Tart Tatin","Croissants","Eclairs"];

// Query Selectors
var sideBtn = document.getElementById("side")
var mainDishBtn = document.querySelector("#mainDish")
var dessertBtn = document.querySelector("#dessert")
var entireMealBtn = document.querySelector("#entireMeal")
var userOutputBox = document.querySelector(".userOutputBox")
var placeholder = document.querySelector(".placeholder")
var image = document.querySelector("img")
var foodOutput = document.querySelector(".foodOutput")
var letsCookBtn = document.querySelector(".letsCookBtn")
var clearBtn = document.querySelector('.clearBtn')
var addRecipeBtn = document.querySelector(".addRecipeBtn")
var form = document.querySelector("form")

// Event Listeners
letsCookBtn.addEventListener('click', chooseMenu)
clearBtn.addEventListener('click', hideOutput)
addRecipeBtn.addEventListener('click', showForm)

// Functions
function hideOutput() {
    placeholder.classList.remove("hidden")
    userOutputBox.classList.add("hidden")
}

function showOutput() {
    placeholder.classList.add("hidden")
    userOutputBox.classList.remove("hidden")
}

function chooseMenu() {
    showOutput()
    if (sideBtn.checked === true) {
        foodOutput.classList.remove("smaller")
        foodOutput.innerText = `${sides[chooseRandomIndex(sides)]}!`
    } else if (mainDishBtn.checked === true) {
        foodOutput.classList.remove("smaller")
        foodOutput.innerText = `${mains[chooseRandomIndex(mains)]}!`
    } else if (dessertBtn.checked === true) {
        foodOutput.classList.remove("smaller")
        foodOutput.innerText = `${desserts[chooseRandomIndex(desserts)]}!`
    } else if (entireMealBtn.checked === true) {
        foodOutput.classList.add("smaller")
        foodOutput.innerText = `${mains[chooseRandomIndex(mains)]} with a side of ${sides[chooseRandomIndex(sides)]} and ${desserts[chooseRandomIndex(desserts)]} for dessert!`
    } else {
        hideOutput()
        alert("Please choose something to continue!")
    }
}

function showForm() {
    form.classList.toggle("hidden")
}

function chooseRandomIndex (group) {
    return Math.floor(Math.random()*group.length)
}