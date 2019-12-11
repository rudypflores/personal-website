const menu = document.getElementById('menu');
const body = document.getElementById('main');

// listen for click
menu.addEventListener('click', () => {

    //generate material filter
    const filter = document.createElement('div');
    filter.id = 'filter';
    body.append(filter);

    filter.addEventListener('click', () => {
        body.lastChild.remove();
        body.lastChild.remove();
    });

    //generate drawer
    const drawer = generateDrawer();
    body.append(drawer);
});

const generateDrawer = () => {
    const drawer = document.createElement('div');
    drawer.id = 'drawer';

    const title = document.createElement('h1');
    title.id = 'drawer-title';
    title.innerHTML = 'Rudy Flores<br/>Software Engineering';

    const lineStroke = document.createElement('hr');

    const link1 = document.createElement('a');
    link1.href = './index.html';
    const option1 = document.createElement('p');
    option1.innerHTML = 'Home';
    option1.classList.add('drawer-options');
    link1.append(option1);

    const link2 = document.createElement('a');
    link2.href = './about.html';
    const option2 = document.createElement('p');
    option2.innerHTML = 'About';
    option2.classList.add('drawer-options');
    link2.append(option2);

    const link3 = document.createElement('a');
    link3.href = './projects.html';
    const option3 = document.createElement('p');
    option3.innerHTML = 'Projects';
    option3.classList.add('drawer-options');
    link3.append(option3);

    const link4 = document.createElement('a');
    link4.href = './contact.html';
    const option4 = document.createElement('p');
    option4.innerHTML = 'Contact';
    option4.classList.add('drawer-options');
    link4.append(option4);

    const close = document.createElement('p');
    close.addEventListener('click', () => {
        body.lastChild.remove();
        body.lastChild.remove();
    });
    close.innerHTML = 'Close';
    close.classList.add('drawer-options');

    drawer.append(title);
    drawer.append(lineStroke);
    drawer.append(link1);
    drawer.append(link2);
    drawer.append(link3);
    drawer.append(link4);
    drawer.append(close);

    return drawer;
}