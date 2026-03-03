// Initialize coins if not existing
if (!localStorage.getItem("coins")) {
    localStorage.setItem("coins", 0);
}

// Display coins
document.getElementById("coinCount").innerText = localStorage.getItem("coins");

// Navigation
function goToGame(game) {
    window.location.href = "games/" + game + ".html";
}

function goToShop() {
    window.location.href = "shop.html";
}
