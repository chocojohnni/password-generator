const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
    "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
    "!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let randomPwButton = document.getElementById("generate-btn")
let randomPwOne = document.getElementById("random-btn-one")
let randomPwTwo = document.getElementById("random-btn-two")
let randomSpanPwOne = document.getElementById("random-pw-one")
let randomSpanPwTwo = document.getElementById("random-pw-two")

randomPwButton.addEventListener("click", (event) => {
    randomSpanPwOne.textContent = "";
    randomSpanPwTwo.textContent = "";

    for (let i = 0; i < 16; i++) {
        let randomNumOne = Math.floor(Math.random() * characters.length)
        
        randomSpanPwOne.textContent += characters[randomNumOne];
    }

    for (let j = 0; j < 16; j++) {
        let randomNumTwo = Math.floor(Math.random() * characters.length)

        randomSpanPwTwo.textContent += characters[randomNumTwo];
    }
})