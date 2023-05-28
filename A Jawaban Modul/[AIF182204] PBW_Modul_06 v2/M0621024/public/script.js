const button = document.querySelectorAll('button');
const body = document.querySelector('body')
const p = document.querySelector('p')

// revisi no 10
window.addEventListener('load', () => {
    const color = new URLSearchParams(window.location.search).get('color');
    if (color) {
        p.textContent = color;
        body.style.backgroundColor = color;
        localStorage.setItem('color', color);
    }
})

// utk nomor sebelumnya
// button.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         p.textContent = btn.value;
//         body.style.backgroundColor = btn.value;
//     }
//     )
// })
