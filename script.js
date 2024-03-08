// You need to replace these sample URLs with actual API endpoints for each social media platform.
const socialMediaUrls = [
    'https://api.example.com/twitter',
    'https://api.example.com/facebook',
    'https://api.example.com/instagram'
];

const feedElement = document.getElementById('feed');

function fetchSocialMediaData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
}

function displaySocialMediaContent(content) {
    content.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        if (post.image) {
            const imageElement = document.createElement('img');
            imageElement.src = post.image;
            postElement.appendChild(imageElement);
        }
        const textElement = document.createElement('p');
        textElement.innerText = post.text;
        postElement.appendChild(textElement);
        feedElement.appendChild(postElement);
    });
}

async function loadSocialMediaData() {
    for (const url of socialMediaUrls) {
        const data = await fetchSocialMediaData(url);
        displaySocialMediaContent(data);
    }
}

loadSocialMediaData();
