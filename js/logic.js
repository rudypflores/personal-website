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