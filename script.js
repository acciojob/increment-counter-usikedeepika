let counter = 0;

function incrementCounter() {
    alert(counter); // Display the current counter value
    counter++; // Increment the counter
    document.getElementById("counter").innerText = counter; // Update the counter on the page
}
