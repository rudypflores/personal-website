//function checks if the user clicked the section yet
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
	let clicked = false;
	let section = document.getElementById(name);
	let arrow = document.getElementById(icon);

	//Open and close section logic
	if(!isClicked(section.style.display)) {
		section.style.display = 'block';
		arrow.classList.add('rotate');
	} else {
		section.style.display = 'none';
		if(arrow.classList.contains('rotate')) {
			arrow.classList.remove('rotate');
		}
	}
};