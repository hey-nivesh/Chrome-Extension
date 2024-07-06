// Create the button
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Start/Stop Color Change';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.zIndex = '9999';
toggleButton.style.backgroundColor = 'gold';
toggleButton.style.color = 'black';
toggleButton.style.fontWeight = 'bold';
toggleButton.style.border = 'none';
toggleButton.style.padding = '10px 15px';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';

// Add the button to the page
document.body.appendChild(toggleButton);

// Variable to store the original background color
let originalColor = document.body.style.backgroundColor || 'white';
let intervalId = null;

// Function to create shining blue effect
function shiningBlueEffect() {
    const time = Date.now() / 1000;
    const blue = Math.sin(time * 2) * 20 + 235; // Oscillate between 215 and 255
    document.body.style.backgroundColor = `rgb(0, 100, ${blue})`;
    document.body.style.transition = 'background-color 0.5s';
}

// Function to toggle the background color
function toggleBackgroundColor() {
    if (document.body.style.backgroundColor === originalColor) {
        shiningBlueEffect();
    } else {
        document.body.style.backgroundColor = originalColor;
        document.body.style.transition = 'none';
    }
}

// Function to start or stop the interval
function toggleInterval() {
    if (intervalId === null) {
        intervalId = setInterval(toggleBackgroundColor, 2000);
        toggleButton.textContent = 'Stop Color Change';
    } else {
        clearInterval(intervalId);
        intervalId = null;
        document.body.style.backgroundColor = originalColor;
        document.body.style.transition = 'none';
        toggleButton.textContent = 'Start Color Change';
    }
}

// Add click event listener to the button
toggleButton.addEventListener('click', toggleInterval);
toggleButton.style.backgroundColor = 'gold';
toggleButton.style.color = 'black';
toggleButton.style.fontWeight = 'bold';
toggleButton.style.border = 'none';
toggleButton.style.padding = '10px 15px';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
