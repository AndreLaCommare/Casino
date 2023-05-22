// JavaScript code for the casino home menu
function playGame(gameName) {
    // Redirect to the selected game
    // You can customize this function to handle game navigation
    console.log('Playing ' + gameName);
}

const profileButton = document.querySelector('.profile-button');
const settingsButton = document.querySelector('.settings-button');

profileButton.addEventListener('click', () => {
    // Handle profile button click
    console.log('Profile button clicked');
});

settingsButton.addEventListener('click', () => {
    // Handle settings button click
    console.log('Settings button clicked');
});