const button = document.getElementById('reveal-btn');
const message = document.getElementById('hidden-message');

button.addEventListener('click', () => {
    message.style.display = 'block';
    button.style.display = 'none';
});

const now = new Date();
document.getElementById('date-time').textContent = now.toLocaleString();

document.getElementById('change-color').addEventListener('click', () => {
    document.body.style.backgroundColor = '#fdf6e3';
});

const saveBtn = document.getElementById("save-message");
const messageBox = document.getElementById("message-box");
const savedDisplay = document.getElementById("saved-message");

// Load saved message if it exists
const saved = localStorage.getItem("mumMessage");
if (saved) {
  savedDisplay.textContent = saved;
}

// Save message on button click
saveBtn.addEventListener("click", () => {
  const message = messageBox.value.trim();
  if (message) {
    localStorage.setItem("mumMessage", message);
    savedDisplay.textContent = message;
    messageBox.value = ""; // clear box
  } else {
    alert("Please write a message first.");
  }
});