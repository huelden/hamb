

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
cartBtn.addEventListener("click", function() {  // <- Corrigido com parêntese correto
  cartModal.style.display = "flex";
});



/*

cartBtn.addEventListener("click", Function() {
    cartModal.style.display = "flex";
});

// Abrir o modal do carrinho
cartBtn.addEventListener("click", function () {
  cartModal.style.display = "flex";
});

// Fechar o modal do carrinho
closeModalBtn.addEventListener("click", function () {
  cartModal.style.display = "none";
});

// Fechar o modal ao clicar fora do conteúdo do modal
cartModal.addEventListener("click", function (event) {
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  }
});

// Validar endereço ao finalizar pedido
checkoutBtn.addEventListener("click", function () {
  if (addressInput.value.trim() === "") {
    addressWarn.hidden = false; // Mostrar aviso
  } else {
    addressWarn.hidden = true; // Esconder aviso
    alert("Pedido finalizado com sucesso!"); // Ação de exemplo
    cartModal.style.display = "none"; // Fechar o modal
  }
});

const cartBtn = document.getElementById("cart-btn");
if (cartBtn) {
    cartBtn.addEventListener("click", function() {
        const cartModal = document.getElementById("cart-modal");
        if (cartModal) {
            cartModal.style.display = "flex";
        }
    });
} else {
    console.error("cartBtn não encontrado no DOM!");
}*/