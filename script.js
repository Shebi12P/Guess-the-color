const colorArea = document.getElementById('color-area');
const buttonGroup = document.querySelector(".button-group");

const genererateRBGColor = () => {
    const MAX_VALUE = 256;
    const red = Math.floor(Math.random()*MAX_VALUE);
    const green = Math.floor(Math.random()*MAX_VALUE);
    const blue = Math.floor(Math.random()*MAX_VALUE);

    return `${red}, ${green}, ${blue}`;
}

let rightColor = genererateRBGColor();
let color2 = genererateRBGColor();
let color3 = genererateRBGColor();
let colors = [rightColor, color2, color3];

const insertRGBColor = () => {
    colorArea.style.setProperty('--bg-color', `rgb(${rightColor})`);
}

const insertButtonColors = (colors) => {
    const buttons = Array.from(buttonGroup.children);
    
    buttons.forEach((button) => {
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];
        
        button.textContent = randomColor;

        //Delete color that has been already used
        let randomColorIndex = colors.indexOf(randomColor);
        colors.splice(randomColorIndex, 1);
    });
    
}

const start = () => {
    rightColor = genererateRBGColor();
    color2 = genererateRBGColor();
    color3 = genererateRBGColor();
    colors = [rightColor, color2, color3];
    
    insertRGBColor(rightColor);
    insertButtonColors(colors);
}

const checkAnswer = (element) => {
    if (element.target.classList.contains("button")) {
        const selectedColor = element.target.textContent;
        if (selectedColor === rightColor) console.log("Hura");
        console.log(selectedColor, rightColor);
        // else start();
    }
}

buttonGroup.addEventListener("click", checkAnswer)

window.onload = start();