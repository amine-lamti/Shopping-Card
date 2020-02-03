const deleteBtn = document.querySelectorAll(".fa-times");
Array.from(deleteBtn).map(el => {
    el.addEventListener("click", () => el.parentElement.parentElement.remove());
});


const plusBtn = document.querySelectorAll(".btnPlus");
const total = document.querySelector(".shoop");
Array.from(plusBtn).map(el => {
    el.addEventListener("click", () => {
        el.nextElementSibling.innerHTML++;
        let price = el.parentElement.nextElementSibling.innerHTML.replace("$", "");
        let totalPrice = total.innerHTML.replace("$", "");
        total.innerHTML = parseInt(price) + parseInt(totalPrice) + "$";
    });
});


const minusBtn = document.querySelectorAll(".btnMinus");
Array.from(minusBtn).map(el => {
    el.addEventListener("click", () => {
        if (el.previousElementSibling.innerHTML != 0) {
            el.previousElementSibling.innerHTML--;
            let price = el.parentElement.nextElementSibling.innerHTML.replace("$", "");
            let totalPrice = total.innerHTML.replace("$", "");
            total.innerHTML = parseInt(price) - parseInt(totalPrice) + "$";
        }
    });
});


const heart = document.querySelectorAll(".fa-heart");
Array.from(heart).map(el => {
    el.addEventListener("click", () => {
        el.classList.toggle("red");
    });
});