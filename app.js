
function generateRandColor() {
    let hexCodes = '1234567890ABCDEF';
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.round(Math.random() * (hexCodes.length - 1))];
    }
    
    return color;
}

function copyText(text) {
    return navigator.clipboard.writeText(text)
}


const button = document.getElementById('btn');

button.addEventListener('click', () => {
    let randomColor = generateRandColor();
    document.body.style.backgroundColor = randomColor;
    document.querySelector('span').style.color = randomColor;
    document.querySelector('span').innerText = randomColor;

    let luminance = chroma(randomColor).luminance();

    document.querySelector('h2').style.color = luminance > 0.5 ? 'white' : 'black';
    document.querySelector('h2').style.backgroundColor = luminance < 0.5 ? 'white' : 'black';
});

// copy color code on click
const colorCode = document.querySelector('span');
colorCode.addEventListener('click', () => {
    copyText(colorCode.innerText);
})

//TODO: add has to link
//TODO: change color depend on hash in link

