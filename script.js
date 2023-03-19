

const button = document.getElementById('btn');
const text = document.getElementById('date');

button.addEventListener('click', showDate);

function showDate() {
document.getElementById('date').innerHTML = Date();

}
