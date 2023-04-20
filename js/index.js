// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  console.log(state)
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = "visible";
    } else {
      oneGreenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceClass = document.querySelector(".sauce")
  if (state.whiteSauce) {
    sauceClass.classList.add("sauce-white");
  } else {
    sauceClass.classList.remove("sauce-white");
  }
  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  // document.querySelector(".crust").classList.toggle("crust-gluten-free");
  
  let crustClass = document.querySelector(".crust")
  if (state.glutenFreeCrust) {
    crustClass.classList.add("crust-gluten-free");
  } else {
    crustClass.classList.remove("crust-gluten-free");
  }

  
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll(".btn").forEach((button) => {
    let ingredName = "";
    if (button.innerText === "pepperoni") {
      ingredName = "pepperoni";
    } else if (button.innerText === "Mushrooms") {
      ingredName = "mushrooms";
    } else if (button.innerText === "Green peppers") {
      ingredName = "greenPeppers";
    } else if (button.innerText === "White sauce") {
      ingredName = "whiteSauce";
    } else if (button.innerText === "Gluten-free crust") {
      ingredName = "glutenFreeCrust";
    }
    
    if (state[ingredName]) {
      button.classList.add("active");
    } 
    else {
      button.classList.remove("active");
    }
    console.log(ingredName);
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = 0;
  let totalPriceDOM = document.querySelector(".price strong");
  let ulDOM = document.querySelector(".price ul");
  ulDOM.innerHTML = "";
  if (state.pepperoni) {
    ulDOM.innerHTML += `<li>$1 pepperoni</li>`;
    totalPrice += 1;
  }
  if (state.mushrooms) {
    ulDOM.innerHTML += `<li>$1 mushrooms</li>`;
    totalPrice += 1;
  }
  if (state.greenPeppers) {
    ulDOM.innerHTML += `<li>$1 green peppers</li>`;
    totalPrice += 1;
  }
  if (state.whiteSauce) {
    ulDOM.innerHTML += `<li>$3 white sauce</li>`;
    totalPrice += 3;
  }
  if (state.glutenFreeCrust) {
    ulDOM.innerHTML += `<li>$5 gluten-free crust</li>`;
    totalPrice += 5;
  }
  totalPriceDOM.innerText = `$${totalPrice + 10}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})
