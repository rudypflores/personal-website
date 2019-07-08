//function checks if the user clicked the section yet
let active = false;

const isClicked = (display) => {
	if(display === 'block') {
		return true;
	} else {
		return false;
	}
};

//Function can be reused to open any tab and close them!
const openSection = (name, icon) => {

	//Set our current section
	let section = document.getElementById(name);
	let arrow = document.getElementById(icon);

	//Open and close section logic
	if(!isClicked(section.style.display)) {
		//Animation for arrow rotation
		section.style.display = 'block';
		arrow.style.transition = 'transform 0.2s ease-in 0s';
		arrow.style.transform = 'rotate(90deg)';
		active = true;
	} else {
		arrow.style.transition = 'transform 0.2s linear 0s';
		arrow.style.transform = 'rotate(0deg)';
		section.style.display = 'none';
		active = false;
	}
};

//Hover animation
/*Made the decision of making this through JS instead of using
 css :hover because it has its limitations when triggering the
 openSection event handler*/
const lightUp = (name) => {
	let tab = document.getElementById(name);
	tab.style.opacity = '1';
	tab.onmouseout = () => {
		if(active) {
			tab.style.opacity = '1';
		} else {
			tab.style.opacity = '0.7';
		}
	};
};

//intro animation
window.onload = () => {
	//Access the parent class
	let master = document.getElementById('hero-text').children;

	//Store the properties we will modify from the children
	let greet = master[0].style;
	let title = master[2].style;
	let sub = master[4].style;
	let about = master[6].style;

	//fade in animation
	greet.transition = 'opacity 1s ease-in 0s';
	title.transition = 'opacity 1s ease-in 1.3s';
	sub.transition = 'opacity 1s ease-in 3s';
	about.transition = 'opacity 1s ease-in 5s';

	greet.opacity = '1';
	title.opacity = '1';
	sub.opacity = '1';
	about.opacity = '1';

	//Slide in nav bar animation
	let bar = document.getElementById('bar').style;
	let items = document.getElementById('items').style;

	bar.transition = 'width .5s ease-in-out 0s, height .5s ease-in-out .5s';
	items.transition = 'opacity 1s ease-in 1s';

	bar.width = '100%';
	bar.height = '75px';
	items.opacity = '1';

};