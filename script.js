// Select all input elements within the .controls and .text-controls classes, 
// including both <input> elements and <select> elements.
const inputs = document.querySelectorAll('.controls input, .text-controls input, .text-controls select');

// Select the button element responsible for toggling between light and dark modes by its ID 'toggleMode'.
const toggleModeButton = document.getElementById('toggleMode');

// Initialize a boolean variable to keep track of the current mode. 
// It starts as true, meaning the page begins in dark mode.
let isDarkMode = true;

/**
 * handleUpdate function:
 * This function is triggered when any of the input elements are changed or interacted with.
 * It updates the corresponding CSS variable (custom property) based on the input's name and value.
 */
function handleUpdate() {
  // Retrieve the 'data-sizing' attribute from the input element. 
  // If it exists, it's used as a suffix (e.g., 'px'). If not, an empty string is used.
  const suffix = this.dataset.sizing || '';

  // Set the CSS variable that corresponds to the input's name. 
  // The value is updated dynamically based on the user's input, concatenated with the suffix if applicable.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

/**
 * toggleMode function:
 * This function is triggered when the 'Toggle Light/Dark Mode' button is clicked.
 * It switches the webpage's color scheme between light and dark modes by updating relevant CSS variables.
 */
function toggleMode() {
  if (isDarkMode) {
    // If the current mode is dark, switch to light mode by changing the background color to a light shade,
    // and updating text and font colors to black for better readability.
    document.documentElement.style.setProperty('--bg-color', '#f5f5f5');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--font-color', '#000000');

    // Update the mode state to indicate that it is now in light mode.
    isDarkMode = false;
  } else {
    // If the current mode is light, switch back to dark mode by setting the background to a dark shade,
    // and updating text and font colors to white for better readability in dark mode.
    document.documentElement.style.setProperty('--bg-color', '#193549');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--font-color', '#ffffff');

    // Update the mode state to indicate that it is now in dark mode.
    isDarkMode = true;
  }
}

// Add an event listener to each input element (in the 'inputs' NodeList) to handle the 'change' event.
// The 'change' event occurs when the user changes the value of the input (e.g., moving a slider, selecting a new option).
// When this happens, the handleUpdate function is called, dynamically updating the relevant CSS variables.
inputs.forEach(input => input.addEventListener('change', handleUpdate));

// Add an event listener to each input element (in the 'inputs' NodeList) to handle the 'mousemove' event.
// The 'mousemove' event triggers repeatedly as the user drags a slider, allowing real-time updates.
// This ensures that changes in input values, especially for range sliders, are reflected instantly.
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// Add an event listener to the toggleModeButton to handle the 'click' event.
// When the button is clicked, the toggleMode function is executed, switching between light and dark modes.
toggleModeButton.addEventListener('click', toggleMode);
