const inputColor = document.querySelector("#inputColorName");
const firstColorInput = document.querySelector("#color1");
const secondColorInput = document.querySelector("#color2");
const colorBox = document.querySelector("#resultantColorBox");
const colorName = document.querySelector("#resultantColorName");

inputColor.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstColor = firstColorInput.value.toLowerCase();
    const secondColor = secondColorInput.value.toLowerCase();

    let mixedColor;
    switch (firstColor) {
        case "red":
          switch (secondColor) {
            case "blue":
                mixedColor = "purple";
                break;
                case "yellow":
                    mixedColor = "orange";
                    break;
                    default:
                        mixedColor = "Invalid color combination";
          }  
            break;
            case "blue":
                switch (secondColor) {
                   case "red":
                    mixedColor = "purple";
                    break;
                    case "yellow":
                        mixedColor = "green";
                        break;
                        default:
                            mixedColor = "Invalid color combination";
                }
            break;
            case "yellow":
                switch (secondColor) {
                   case "red":
                    mixedColor = "orange";
                    break;
                    case "blue":
                        mixedColor = "green";
                        break;
                        default:
                            mixedColor = "Invalid color combination";
                }
                break;
                default:
                    mixedColor = "Invalid color combination";
    }
    if (mixedColor == "Invalid color combination") {
        resultantColorBox.style.backgroundColor = "white";
    } else {
       colorBox.style.backgroundColor = mixedColor; 
    }
    colorName.textContent = mixedColor;
})