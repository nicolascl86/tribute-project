const button = document.getElementById('reveal-btn');
const message = document.getElementById('hidden-message');

button.addEventListener('click', () => {
    message.style.display = 'block';
    button.style.display = 'none';
});

const now = new Date();
document.getElementById('date-time').textContent = now.toLocaleString();