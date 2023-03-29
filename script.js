const colorArea = document.getElementById('color-area');
const buttonGroup = document.querySelector(".button-group");
const buttons = Array.from(buttonGroup.children);

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
    buttons.forEach((button) => {
        button.style.setProperty("--button-color", "hsl(var(--primary-clr-800))")
    });
    
    rightColor = genererateRBGColor();
    color2 = genererateRBGColor();
    color3 = genererateRBGColor();
    colors = [rightColor, color2, color3];
    
    insertRGBColor(rightColor);
    insertButtonColors(colors);
}

const checkAnswer = (element) => {
    const successColor = "hsl(114, 65%, 51%)";
    const dangerColor = "hsl(0, 65%, 51%)";

    if (element.target.classList.contains("button")) {
        buttons.forEach((button) => {
            if (button.textContent === rightColor)
                button.style.setProperty("--button-color", successColor);
            else 
                button.style.setProperty("--button-color", dangerColor);
        })
        
        setTimeout(start, 1000);
    }
}

buttonGroup.addEventListener("click", checkAnswer)

window.onload = start();