const quantitySpan = document.querySelector('.quantityItems');
const cart = {};
let totalQuantity = 0;

document.addEventListener('click', event => {
  // incrementar
  const incrementBtn = event.target.closest('.incrementButton');
  if (incrementBtn) {
    const itemId = incrementBtn.dataset.id;
    cart[itemId] = (cart[itemId] || 0) + 1;
    totalQuantity++;
    updateUI(itemId);
  }

  // decrementar
  const decrementBtn = event.target.closest('.decrementButton');
  if (decrementBtn) {
    const itemId = decrementBtn.dataset.id;
    if (cart[itemId] > 0) {
      cart[itemId]--;
      totalQuantity--;
    }
    if (cart[itemId] <= 0) {
      cart[itemId] = 0;
      const parent = decrementBtn.closest('.buttonContainer');
      parent.innerHTML = `
        <button class="addRemoveItem" data-id="${itemId}">
          <img src="/assets/images/icon-add-to-cart.svg"/> Add to Cart
        </button>
      `;
    }
    updateUI(itemId);
  }
});

function updateUI(itemId) {
  quantitySpan.textContent = totalQuantity;

  const itemQuantityElement = document.querySelector(
    `.dessertContainer[data-id="${itemId}"] .quantityValue`
  );
  if (itemQuantityElement) {
    itemQuantityElement.textContent = cart[itemId] || 0;
  }
}
