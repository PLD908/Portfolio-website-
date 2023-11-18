const nameElement = document.getElementById('MyWorks');
const name = 'Web developer'; // Replace with your desired name
let currentIndex = 0;

function writeName() {
    if (currentIndex < name.length) {
        nameElement.textContent += name.charAt(currentIndex);
        currentIndex++;
        setTimeout(writeName, 200); // Adjust the delay between characters
    } else {
        setTimeout(clearName, 1000); // Adjust the delay before clearing
    }
}

function clearName() {
    nameElement.textContent = '';
    currentIndex = 0;
    setTimeout(writeName, 500); // Adjust the delay before writing again
}

// Start the animation
writeName();