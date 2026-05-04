let cart = JSON.parse(localStorage.getItem("cart")) || [];

// SHOW TOAST MESSAGE
function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// ADD TO CART
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showToast(name + " added to cart");
}

// UPDATE CART COUNT
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let countElement = document.getElementById("cart-count");

    if (countElement) {
        countElement.textContent = cart.length;
    }
}

// LOAD WHEN PAGE OPENS
window.onload = function () {
    updateCartCount();
};

function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");
}