const dessertMenu = document.querySelector('.dessertMenu');

const menuItems = [
  {id: 1, item: 'Waffle', name: 'Waffle with Berries', price: '6.50', img: './assets/images/image-waffle-mobile.jpg'},
  {id: 2, item: 'Crème Brûlée', name: 'Vanilla Bean Crème Brûlée', price: '7.00', img: './assets/images/image-creme-brulee-mobile.jpg'},
  {id: 3, item: 'Macaron', name: 'Macaron Mix of Five', price: '8.00', img: './assets/images/image-macaron-mobile.jpg'},
  {id: 4, item: 'Tiramisu', name: 'Classic Tiramisu', price: '5.50', img: './assets/images/image-tiramisu-mobile.jpg'},
  {id: 5, item: 'Baklava', name: 'Pistachio Baklava', price: '4.00', img: './assets/images/image-baklava-mobile.jpg'},
  {id: 6, item: 'Pie', name: 'Lemon Meringue Pie', price: '5.00', img: './assets/images/image-meringue-mobile.jpg'},
  {id: 7, item: 'Cake', name: 'Red Velvet Cake', price: '4.50', img: './assets/images/image-cake-mobile.jpg'},
  {id: 8, item: 'Brownie', name: 'Salted Caramel Brownie', price: '5.50', img: './assets/images/image-brownie-mobile.jpg'},
  {id: 9, item: 'Panna Cotta', name: 'Vanilla Panna Cotta', price: '6.50', img: './assets/images/image-panna-cotta-mobile.jpg'}
];

function renderMenu(items) {
  dessertMenu.innerHTML = items.map(item => `
    <div class="dessertContainer" data-id="${item.id}">
      <div class="dessertContent">
        <img src="${item.img}" alt="${item.item}">
      </div>
      <div class="buttonContainer">
        <button class="addRemoveItem" data-id="${item.id}">
          <img src="/assets/images/icon-add-to-cart.svg"/> Add to Cart
        </button>
      </div>
      <div class="itemContainer">
        <p class="item">${item.item}</p>
        <h3 class="itemComplete">${item.name}</h3>
        <p class="itemPrice">$${item.price}</p>
      </div>
    </div>
  `).join('');
}

document.addEventListener('click', event => {
  const button = event.target.closest('.addRemoveItem');
  if (button) {
    const itemId = button.dataset.id;
    const parent = button.closest('.buttonContainer');

    parent.innerHTML = `
      <div class="addRemoveContainer active">
        <button class="decrementButton" data-id="${itemId}">
          <img src="/assets/images/icon-decrement-quantity.svg"/>
        </button>
        <span class="quantityValue" data-id="${itemId}">0</span>
        <button class="incrementButton" data-id="${itemId}">
          <img src="/assets/images/icon-increment-quantity.svg"/>
        </button>
      </div>
    `;
  }
});

renderMenu(menuItems);
