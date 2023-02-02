const addToCardButton = document.querySelector('#product-details button');
const cartBadgeBump = document.querySelector('.nav-items .badge');

const bumpEffect = () => {
    setTimeout(() => {
        cartBadgeBump.classList.add('bump');
    })

    const removeClass = cartBadgeBump.classList.remove('bump');

    clearTimeout(removeClass);
};

addToCardButton.addEventListener('click', bumpEffect);