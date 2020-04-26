const navLeft = document.getElementById('nav-left');
const navRight = document.getElementById('nav-right');

// List of cards possible to display
const cards = [
    document.getElementById('card-one'),
    document.getElementById('card-two'),
    document.getElementById('card-three')
];

let currentCard = 0;

// Navigate left
const goLeft = () => {
    cards[currentCard].style.display = 'none';
    currentCard = currentCard-1 < 0 ? cards.length-1 : currentCard-1;
    cards[currentCard].style.display = 'block';
};

// Navigate right
const goRight = () => {
    cards[currentCard].style.display = 'none';
    currentCard = currentCard+1 > cards.length-1 ? 0 : currentCard+1;
    cards[currentCard].style.display = 'block';
};

// Click events for navigation buttons
navLeft.addEventListener('mouseup', () => goLeft());
navRight.addEventListener('mouseup', () => goRight());
window.addEventListener('keyup', e => {
    if(e.keyCode == '37')
        goLeft();
    if(e.keyCode == '39')
        goRight();
});

