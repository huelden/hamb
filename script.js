/*
const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

// Correção
cartBtn.addEventListener("click", function () {
  // <- Corrigido com parêntese correto
  cartModal.style.display = "flex";
}); 

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const cartBtn = document.getElementById("cart-btn");
  const cartModal = document.getElementById("cart-modal");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");
  const closeModal = document.getElementById("close-modal-btn");
  const cartCounter = document.getElementById("cart-count");
  const addressInput = document.getElementById("address");
  const addressWarn = document.getElementById("address-warn");

  if (cartBtn) {
    cartBtn.addEventListener("click", function () {
      cartModal.style.display = "flex";
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", function () {
      cartModal.style.display = "none";
    });
  }
});

*/
const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn =document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

let cart = [];

cartBtn.addEventListener("click", function(){
  cartModal.style.display = "flex"
})

cartModal.addEventListener("click", function(event){
  if(event.target === cartModal){
    cartModal.style.display = "none"
  }
})

closeModalBtn.addEventListener("click", function(){
  cartModal.style.display = "none"
})


menu.addEventListener("click", function(event){
  // console.log(event.target)
  let parentButton = event.target.closest(".add-to-cart-btn")
  
  if(parentButton){
    const name = parentButton.getAttribute("data-name")
    const price = parseFloat(parentButton.getAttribute("data-price"))

    addToCart(name, price)


  
  }
  //obs:class-sempre começa com . e id com #
})

//funcao para add no carriho

function addToCart(name, price){
 const existingItem = cart.find(item => item.name === name)

 if(existingItem){
  //Se o item ja existe, aumenta apenas a quatidade + 1

  console.log(existingItem);
  return;

 }

  cart.push({
    name,
    price,
    quantity: 1,
  })
}