//function checks if the user clicked the section yet
const isClicked = (display) => {
	if(display === 'block') {
		return true;
	} else {
		return false;
	}
};

//Function can be reused to open any tab and close them!
const openSection = (name) => {

	//Set our current section
	let clicked = false;
	let section = document.getElementById(name);

	//Open and close section logic
	if(!isClicked(section.style.display)) {
		section.style.display = 'block';
	} else {
		section.style.display = 'none';
	}
};

//Keyframe Animations
//Run this function on startup
const strokeAnimation = (stroke) => {
  
};