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
  updateCartModal();
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

  existingItem.quantity += 1;
  

 }else{

  cart.push({
    name,
    price,
    quantity: 1,
  })
 }

 updateCartModal()

}


//Atualiza o carrinho

function updateCartModal(){
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("flex", "justify-between", "mb-4","flex-col" )

    cartItemElement.innerHTML = `

    <div class="flex items-center justify-between">
      <div>
        <p class="font-medium">${item.name}</p>
        <p>Qtd: ${item.quantity}</p>
        <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
      </div>

    

      
        <button class="remove-from-cart-btn" data-name="${item.name}">
          Remover
        </button>
     

    </div>
    `;
    total += item.price * item.quantity;

    cartItemsContainer.appendChild(cartItemElement)
    
  })

  cartTotal.textContent = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  cartCounter.innerHTML = cart.length;
}
  
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', function () {
    const itemName = button.getAttribute('data-name');
    const itemPrice = button.getAttribute('data-price').replace('R$', '').replace(',', '.'); // Remove "R$" e substitui "," por "."
    
    addToCart(itemName, parseFloat(itemPrice)); // Converte para número
  });
});

function updateCartModal() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col");

    // Certifique-se de que `item.price` seja sempre tratado como número com `toFixed(2)` 
    cartItemElement.innerHTML = `
      <div class="flex items-center justify-between">
        <div>
          <p class="font-medium">${item.name}</p>
          <p>Qtd: ${item.quantity}</p>
          <p class="font-medium mt-2">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
        </div>
        <button class="remove-from-cart-btn" data-name="${item.name}">
          Remover
        </button>
      </div>
    `; 

    // Multiplica o preço pela quantidade e acumula o total
    total += item.price * item.quantity;
    cartItemsContainer.appendChild(cartItemElement);
  }); 

  // Atualiza o valor total formatado em "pt-BR"
  cartTotal.textContent = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  // Atualiza o número de itens no carrinho
  cartCounter.innerHTML = cart.length;
}


cartItemsContainer.addEventListener("click", function (event){
  if(event.target.classList.contains ("remove-from-cart-btn")){
    const name = event.target.getAttribute("data-name")

   removeItemCart(name);
  }
  
})

function removeItemCart(name){
  const index = cart.findIndex(item => item.name === name);

  if(index !== -1){
    const item = cart[index];
    
    if(item.quantity > 1){
      item.quantity -= 1;
      updateCartModal();
      return;
    }

    cart.splice(index, 1);
    updateCartModal();

  }
}


addressInput.addEventListener("input", function(event){
  let inputValue = event.target.value;
})

checkoutBtn.addEventListener("click", function(){
  if(cart.length === 0) return;
  if(addressInput.value === ""){
    addressWarn.classList.remove("hidden")
    addressInput.classList.add("borde-red-500")
    return;
  }
})










