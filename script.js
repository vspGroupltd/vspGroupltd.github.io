function toggleDarkMode() {
    const checkbox = document.getElementById('myCheckbox');
    const body = document.body;
    body.classList.toggle('dark-mode', checkbox.checked);
}

document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById('myCheckbox');
    checkbox.addEventListener('change', toggleDarkMode);
});