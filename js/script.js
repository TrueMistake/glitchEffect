const cont = document.querySelector('.container');
const count = 20;

for (let i = 0; i< count; i++ ) {
    const div = document.createElement('div');
    div.classList.add('glitch');
    cont.appendChild(div);
}

const glitch = document.querySelectorAll('.glitch');

setInterval(() => {
    glitch.forEach(el => {
        el.style.left = rand(100, 'vw');
        el.style.top = rand(100, 'vw');
        el.style.width = rand(400, 'px');
        el.style.height = rand(50, 'px');
        el.style.backgroundPosition = rand(50, 'px');
    })
}, 200);

function rand(size, text) {
    return Math.floor(Math.random() * size) + text;
}
