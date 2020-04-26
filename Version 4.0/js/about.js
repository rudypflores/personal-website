let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const main = document.getElementById('main');

main.addEventListener('touchstart', function(event) {
    touchstartX = event.screenX;
    touchstartY = event.screenY;
}, false);

main.addEventListener('touchend', function(event) {
    touchendX = event.screenX;
    touchendY = event.screenY;
    handleGesture();
}, false); 

function handleGesture() {
    console.log(`startX: ${touchstartX}`);
    console.log(`startY: ${touchstartY}`);
    let swiped = 'swiped: ';
    if (touchendX < touchstartX) {
        alert(swiped + 'left!');
    }
    if (touchendX > touchstartX) {
        alert(swiped + 'right!');
    }
    if (touchendY < touchstartY) {
        alert(swiped + 'down!');
    }
    if (touchendY > touchstartY) {
        alert(swiped + 'left!');
    }
    // if (touchendY == touchstartY) {
    //     alert('tap!');
    // }
}