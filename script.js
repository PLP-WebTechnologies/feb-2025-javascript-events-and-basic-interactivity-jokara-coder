// Change text content dynamically
function changeText() {
    const description = document.getElementById("description");
    description.textContent = "The text has been dynamically updated!";
}

// Modify CSS styles via JavaScript
function changeStyle() {
    const title = document.getElementById("page-title");
    title.style.color = "crimson";
    title.style.fontSize = "2.5em";
    title.style.textDecoration = "underline";
}

// Add or remove an element when a button is clicked
function toggleBox() {
    const container = document.getElementById("box-container");
    const existingBox = document.getElementById("box");

    if (existingBox) {
        container.removeChild(existingBox);
    } else {
        const box = document.createElement("div");
        box.id = "box";
        box.textContent = "I'm a dynamically added box!";
        container.appendChild(box);
    }
}