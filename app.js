'use strict';

const boyInput = document.querySelector(".boy-name");
const girlInput = document.querySelector(".girl-name");
const calculateBtn = document.querySelector(".calculate");
const popupContainer = document.querySelector(".popup-container");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close");
const percent = document.querySelector(".percent");


calculateBtn.addEventListener("click", () => {
    if(boyInput.value === "" || girlInput.value === ""){
        return;
    }
    if(boyInput.value.length < 4 || girlInput.value.length < 4){
        alert("At least 4 characters");
        return;
    }
    calculateBtn.textContent = 'Calculating...';
    setTimeout(() => {
        let randomPercent = Math.round(Math.random() * 90);
        percent.textContent = randomPercent + "%";
        popupContainer.classList.add("show");
        popup.classList.add("active"); 
        calculateBtn.textContent = 'Calculate';
        if(boyInput.value === "Pe Ti"){
            percent.textContent = 100 + "%";
        }
        boyInput.value = '';
        girlInput.value = '';
    }, 2500);
});

closeBtn.addEventListener("click", () => {
    popupContainer.classList.remove('show');
    popup.classList.remove("active");
});