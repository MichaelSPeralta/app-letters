// app.js
var alphabetContainer = document.getElementById('alphabet-container');
var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
letters.forEach(function (letter) {
    var letterElement = document.createElement('div');
    letterElement.textContent = letter.toUpperCase();
    letterElement.classList.add('letter');
    letterElement.addEventListener('click', function () { return playSound(letter); });
    alphabetContainer.appendChild(letterElement);
});
function playSound(letter) {
    var audio = new Audio("sounds/" + letter + ".m4a");
    audio.play();
}