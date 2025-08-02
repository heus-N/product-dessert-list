const quantitySpan = document.querySelector('.quantityItems');
let quantity = 0;

document.addEventListener('click', event => {
  if (event.target.closest('.addToCartButton')) {
    quantity++;
    quantitySpan.textContent = quantity;
  }
});
