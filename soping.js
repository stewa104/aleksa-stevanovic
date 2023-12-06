function renderShoppingItem(item) {
    return `
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${item.naziv}</h5>
            <p class="card-text">Komada: <span class="item-quantity">${item.komada}</span></p>
            <button class="btn btn-primary decrease-btn">Smanji komad</button>
          </div>
        </div>
      </div>
    `;
  }

  const shoppingItems = [
    { naziv: 'Hleb', komada: 1 },
    { naziv: 'Jogurt', komada: 2 },
    { naziv: 'Paradajz', komada: 5 },
    { naziv: 'Sir', komada: 3 },
  ];
  
  function showShoppingList() {
    const shoppingListElement = document.getElementById('soping');
    shoppingListElement.innerHTML = '';
  
    shoppingItems.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.innerHTML = renderShoppingItem(item);
      shoppingListElement.appendChild(itemElement);
  
      const decreaseBtns = document.getElementsByClassName('decrease-btn');
      decreaseBtns[index].addEventListener('click', () => {
        if (shoppingItems[index].komada > 0) {
          shoppingItems[index].komada -= 1;
          const quantityElement = itemElement.querySelector('.item-quantity');
          quantityElement.textContent = shoppingItems[index].komada;
  
          if (shoppingItems[index].komada === 0) {
            itemElement.style.display = 'none';
          }
        }
      });
    });
  }
  
  window.addEventListener('DOMContentLoaded', showShoppingList);
  