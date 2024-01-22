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
let dropDown = document.querySelector('.links');
let dropDownText = document.querySelectorAll('.link');
let cancelIcon = document.getElementById('cancel');

iconBar.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
        dropDown.classList.toggle('show-dropdown');
    } else {
        dropDown.classList.remove('show-dropdown');
    }
});

dropDownText.forEach((item) => {
    item.addEventListener('click', function() {
        if (dropDown.style.display === "none") {
            dropDown.classList.toggle('show-dropdown');
        } else {
            dropDown.classList.remove('show-dropdown');
        }
    });
});

cancelIcon.addEventListener('click', () => {
    if (dropDown.style.display === "none") {
        dropDown.classList.toggle('show-dropdown');
    } else {
        dropDown.classList.remove('show-dropdown');
    }
})