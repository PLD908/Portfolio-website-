const nameElement = document.getElementById('MyWorks');
const names = ['Web Developer', 'Front-End Developer', 'Graphic Designer', 'Shoe Maker', 'Footballer']; // Replace with your desired name
let currentIndex = 0;
let currentLetterIndex = 0;

function writeAndClearName() {
    const currentName = names[currentIndex];
    if (currentLetterIndex < currentName.length) {
        nameElement.textContent += currentName.charAt(currentLetterIndex);
        currentLetterIndex++;
        setTimeout(writeAndClearName, 100); // Adjust the delay between letters
    } else {
        // Clear the name after a delay
        setTimeout(() => {
            nameElement.textContent = '';
            currentLetterIndex = 0;
            // Move to the next name
            currentIndex++;
            if (currentIndex === names.length) {
                currentIndex = 0;
            }
            // Repeat the process
            setTimeout(writeAndClearName, 1000); // Adjust the delay before the next name
        }, 500); // Adjust the delay before clearing the name
    }
}

writeAndClearName();

let iconBar = document.getElementById('bar');

iconBar.addEventListener('click', function() {
    document.querySelector('.links').classList.toggle('animation');
});