// js/scripts.js

// 기본적인 카트 기능 구현
let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice, quantity: 1 };
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (cartItemsElement) {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - PHP ${item.price} x ${item.quantity}`;
            cartItemsElement.appendChild(listItem);

            total += item.price * item.quantity;
        });

        cartTotalElement.textContent = `PHP ${total}`;
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout...");
        // 실제 체크아웃 로직은 여기서 구현할 수 있습니다.
    }
}

// 페이지 로드 시 콘솔에 메시지를 표시
document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to Frozen Meat Shop!");
});