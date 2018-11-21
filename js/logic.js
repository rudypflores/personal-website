

//function checks if the user clicked the section yet
const isClicked = (display) => {
	if(display === 'block') {
		return true;
	} else {
		return false;
	}
};

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