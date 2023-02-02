const addToCardButtonElement = document.querySelector('#product-details button');
const cartBadge = document.querySelector('.nav-items .badge');

const addToCard = async () => {
    const productId = addToCardButtonElement.dataset.productId;
    const csrfToken = addToCardButtonElement.dataset.csrf;

    let response;
    try {
        response = await fetch('/cart/items', {
            method: 'POST',
            body: JSON.stringify({
                productId: productId,
                _csrf: csrfToken
            }),
            headers: {
                'Content=Type': 'application/json'
            }
        });
    } catch (error) {
        alert('Something went wrong');
        return;
    }

    if (!response.ok) {
        alert('Something is wrong');
        return;
    }

    const responseData = await response.json();

    const newTotalQuantity = responseData.newTotalItems;

    cartBadge.textContent = newTotalQuantity;
};

addToCardButtonElement.addEventListener('click', addToCard);