const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
var amountText = document.getElementById('amountText');
var prise = document.getElementById('prise');
var promo = document.getElementById('promo');

var amour = 0;
var sum = 0;
var code = false

minus.addEventListener('click', () => {
    amour--;
    amountText.textContent = amour;

    
    if (amour <= 0) {
        sum = 0
        amour = 0;
        amountText.textContent = amour;
        prise.innerHTML = `Prise: 0$`;
    }
    else {
        if (code == true) {
            sum -= 4050;
            sum /= 15;
            code = false
            prise.innerHTML = `Prise: ${sum}$`;
        }
        else {
        sum -= 4050;
        prise.innerHTML = `Prise: ${sum}$`;
        }
    }

})
plus.addEventListener('click', () => {
    amour++;
    amountText.textContent = amour;
    
    if (code == true) {
        sum += 4050;
        sum /= 15;
        code = false
        prise.innerHTML = `Prise: ${sum}$`;
    }
    else {
    sum += 4050;
    prise.innerHTML = `Prise: ${sum}$`;
    }


})

promo.oninput = () => {
    if (promo.value == 'holer') {
        code = true
        sum / 15;
        prise.innerHTML = `Prise: ${sum}$`;
    }
}


//Нажата кнопка продолжить
const continueBtn = document.getElementById('continue');

continueBtn.onclick = () => {
    alert('Sorry, the service is temporarily unavailable.')
}


//Вызов окна покупки
const buyWindow = document.getElementById('buyWindow');
const navBtn = document.getElementById('navBtn');

navBtn.addEventListener('click', () => {
    buyWindow.style = 'opacity: 1';
})

//Закрытие окна покупки
const closeWindow = document.getElementById('closeWindow');
closeWindow.addEventListener('click', () => {
    buyWindow.style = 'opacity: 0';
})