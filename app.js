const button = document.getElementById('reveal-btn');
const message = document.getElementById('hidden-message');

button.addEventListener('click', () => {
    message.style.display = 'block';
    button.style.display = 'none';
});