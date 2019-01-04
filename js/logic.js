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
	let section = document.getElementById(name);
	let arrow = document.getElementById(icon);

	//Open and close section logic
	if(!isClicked(section.style.display)) {
		//Animation for arrow rotation
		section.style.display = 'block';
		arrow.style.transition = 'transform 0.2s ease-in 0s';
		arrow.style.transform = 'rotate(90deg)';
	} else {
		arrow.style.transition = 'transform 0.2s linear 0s';
		arrow.style.transform = 'rotate(0deg)';
		section.style.display = 'none';
		
	}
};