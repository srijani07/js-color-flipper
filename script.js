const divColorArea = document.querySelector("#div-color-display");
const btnChangeColor = document.querySelector("#btn-change-color");

const hexValues = ['0','1','2','3','4','5','6','7','8', '9','A','B','C','D','E','F'];

let backgroundHex = "";


function generateHexCode() {
    for(let i=0;i<6;i++) {
        {
           backgroundHex+=hexValues[Math.floor(Math.random() *16)];
       }
       
   }

   while(backgroundHex === "000000") { //Preventing black because BG color != text color
        generateHexCode();
   }

   return backgroundHex;
}

function changeBackgroundColor() {
    
    generateHexCode();
    document.body.style.backgroundColor = `#${backgroundHex}`;
   
    divColorArea.innerText = `Background Color : #${backgroundHex}`;
    divColorArea.border = "1px solid black";
    backgroundHex = "";
}
btnChangeColor.addEventListener("click", changeBackgroundColor);