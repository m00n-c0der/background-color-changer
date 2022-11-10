

function generateRandColor(init) {

    let hexCodes = '1234567890ABCDEF';
    let color = "#";
    let colorFromHash = getColorFromHash();

    if (colorFromHash.length > 1 && isInitial) {
        isInitial = false;
        color = colorFromHash;
    } else {
        for (let i = 0; i < 6; i++) {
            color += hexCodes[Math.round(Math.random() * (hexCodes.length - 1))];
        }
    }

    updateColorHash(color);
    changeColors(color);
}

function getColorFromHash() {
    let hash = document.location.hash;
    if (hash.length > 1) {
        return hash;
    }
    return '';
}

function updateColorHash(color = '') {
    document.location.hash = color.substring(1);
}

function copyText(text) {
    return navigator.clipboard.writeText(text)
}

function changeColors(randomColor) {
    document.body.style.backgroundColor = randomColor;
    document.querySelector('span').style.color = randomColor;
    document.querySelector('span').innerText = randomColor;

    let luminance = chroma(randomColor).luminance();

    document.querySelector('h2').style.color = luminance > 0.5 ? 'white' : 'black';
    document.querySelector('h2').style.backgroundColor = luminance < 0.5 ? 'white' : 'black';
}

let isInitial = true;

// action for "ganerate color button"
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    generateRandColor(isInitial);
    
});

// copy color code on click
const colorCode = document.querySelector('span');
colorCode.addEventListener('click', () => {
    copyText(colorCode.innerText);
})



//TODO: change color depend on hash in link

generateRandColor();
