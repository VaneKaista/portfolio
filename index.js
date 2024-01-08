var toutlogo = document.getElementById('toutlogo');
var toutlogolist = toutlogo.getElementsByTagName('li');

setInterval(() => {
    toutlogo.style.transform = "translateX(-20%)";
}, 3000);

toutlogo.addEventListener('transitionend', function () {
    toutlogo.appendChild(toutlogo.firstElementChild);

    toutlogo.style.transition = "none";
    toutlogo.style.transform = "translateX(0)";
    setTimeout(() => {
        toutlogo.style.transition = "0.3s";
    });
})