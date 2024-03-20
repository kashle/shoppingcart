document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');
  
    items.forEach(item => {
      const plusBtn = item.querySelector('.plus-btn');
      const minusBtn = item.querySelector('.minus-btn');
      const deleteBtn = item.querySelector('.delete-btn');
      const likeBtn = item.querySelector('.like-btn');
      const quantityElem = item.querySelector('.quantity');
  
      plusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityElem.textContent);
        quantity++;
        quantityElem.textContent = quantity;
        updateTotal();
      });
  
      minusBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityElem.textContent);
        if (quantity > 1) {
          quantity--;
          quantityElem.textContent = quantity;
          updateTotal();
        }
      });
  
      deleteBtn.addEventListener('click', function() {
        item.remove();
        updateTotal();
      });
  
      likeBtn.addEventListener('click', function() {
        likeBtn.classList.toggle('liked');
      });
    });
  
    function updateTotal() {
      const quantities = document.querySelectorAll('.quantity');
      let totalPrice = 0;
      quantities.forEach(quantityElem => {
        const quantity = parseInt(quantityElem.textContent);
        totalPrice += quantity;
      });
      document.getElementById('total-price').textContent = `$${totalPrice}`;
    }
  });
  