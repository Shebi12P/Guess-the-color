const colorArea = document.getElementById('color-area');
const buttonGroup = document.querySelector(".button-group");
// const colorButtons = document.querySelectorAll(".button-group button");
const genererateRBGColor = () => {
    const MAX_VALUE = 256;
    const red = Math.floor(Math.random()*MAX_VALUE);
    const green = Math.floor(Math.random()*MAX_VALUE);
    const blue = Math.floor(Math.random()*MAX_VALUE);

    return {
        'red': red,
        'green': green,
        'blue': blue
    };
}

const insertRGBColor = (rightColor) => {
    const red = rightColor.red;
    const green = rightColor.green;
    const blue = rightColor.blue;

    colorArea.style.setProperty('--bg-color', `rgb(${red}, ${green}, ${blue})`);
}

const insertButtonColors = (colors) => {
    const buttons = Array.from(buttonGroup.children);
    
    buttons.forEach((button) => {
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];
        
        let red = randomColor.red;
        let green = randomColor.green;
        let blue = randomColor.blue;
        
        button.textContent = `RGB(${red}, ${green}, ${blue})`;

        let randomColorIndex = colors.indexOf(randomColor);
        colors.splice(randomColorIndex, 1);
    });
    
}

const checkAnswer = () => {

}

// buttonGroup.addEventListener()

const start = () => {
    const rightColor = genererateRBGColor();
    const color2 = genererateRBGColor();
    const color3 = genererateRBGColor();
    const colors = [rightColor, color2, color3];

    insertRGBColor(rightColor);
    insertButtonColors(colors);
}

window.onload = start();