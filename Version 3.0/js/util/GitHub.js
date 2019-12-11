const url = 'https://api.github.com/';

//Communication bridge to GitHub API
const GitHub = {
    //Returns a json object for all repositories in a user account
    getUserRepos: async (username) => {
        return fetch(`${url}users/${username}/repos?sort=updated`, {
            method:'GET',
            body: JSON.stringify(),
            headers: {
                'Accept':'application/vnd.github.v3+json'
            }
        })
        .then(jsonResponse => {
            return jsonResponse.json();
        })
        .then(response => {
            return response;
        });
    },
};

export default GitHub;