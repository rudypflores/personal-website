import GitHub from './util/GitHub.js';

//Get JSON object with all repositories
const pm = GitHub.getUserRepos('rudypflores');
const container = document.getElementById('wrapper');

pm.then(data => {
    //console.log(data);

    const cards = generateCards(data);
    console.log(cards);

    cards.forEach(card => {
        container.append(card);
    });
});

const generateCards = (data) => {
    //definition of a card
    let cards = [];

    //create a card for each repository
    data.forEach(repo => {
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let description = document.createElement('p');
        let lastUpdate = document.createElement('p');
        let url = document.createElement('a');
        let urlText = document.createElement('p');

        name.innerHTML = `${repo.name}`;
        description.innerHTML = `${repo.description}`;
        description.style.padding = '0px 15px';
        lastUpdate.innerHTML = `Last updated on: ${repo.updated_at.substring(0, 10)}`;
        lastUpdate.style.padding = '0px 15px';
        url.href = `${repo.html_url}`;
        urlText.innerHTML = 'Find out more';

        url.append(urlText);

        card.append(name);
        card.append(description);
        card.append(lastUpdate);
        card.append(url);
        card.classList.add('card');

        cards.push(card);
    });
    return cards;
};