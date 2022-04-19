//**TRAIGO POR ID */


//**otros */
const twelve = document.getElementById("amountCharacters12");
const nine = document.getElementById("amountCharacters9");
const six = document.getElementById("amountCharacters6");
const onlyLetters = document.getElementById("onlyLetters");
const simpleReading = document.getElementById("SimpleReading");
const allCharacters = document.getElementById("AllCharacters");
const capital = document.getElementById("Capital");
const lowerCase = document.getElementById("LowerCase");
const numbers = document.getElementById("Numbers");
const symbols = document.getElementById("Symbols");
const btnG = document.getElementById("btnG");


const passw = document.getElementById("password");
const terceraColumna = document.getElementById("allChar")
const numSim = (numbers, symbols);


//**Arrays */

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const letrasMin = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const simbolos = ["%", "&", "!", "#", "$", "/", "(", ")", "=", "?", "¿", "¡", "'", "+", "*", ";", ":", "-", "_"]
const everyCharacter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "%", "&", "!", "#", "$", "/", "(", ")", "=", "?", "¿", "¡", "'", "+", "*", ";", ":", "-", "_"]
const mayusculaMinuscula = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const lectSimple = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "%", "&", "!", "#", "$", "/", "(", ")", "=", "?", "¿", "'", "+", "*", ";", ":", "-", "_"]
const leSiNuSi = [1, 2, 3, 4, 5, 6, 7, 8, 9, "%", "&", "!", "#", "$", "/", "(", ")", "=", "?", "¿", "'", "+", "*", ";", ":", "-", "_"]
const leSiLetr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const leSiLetrNu = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const leSiLetrSim = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "%", "&", "!", "#", "$", "/", "(", ")", "=", "?", "¿", "'", "+", "*", ";", ":", "-", "_"]



//**variables */
const lenght = ["12", "9", "6"];


//*las funciones*//



function genPassword(array, cantidadCaracteres) {
    let password = []

    for (let i = 0; i < cantidadCaracteres; i++) {
        let randomCaracter = Math.floor(Math.random() * array.length);
        password.push(array[randomCaracter])
    }
    return password.join("")
}

//*ALL CHARACTERS*//

//*12; ALL *// 

btnG.onclick = () => {
    if (twelve.checked && allCharacters.checked) {
        passw.innerHTML = genPassword(everyCharacter, 12)
    }

    //*9; ALL*//
    else if (nine.checked && allCharacters.checked) {
        passw.innerHTML = genPassword(everyCharacter, 9)
    }

    //*6; ALL*//
    else if (six.checked && allCharacters.checked) {
        passw.innerHTML = genPassword(everyCharacter, 6)
    }

    //*ONLY LETTERS*//
    //*12, only letter, min y mayus *//
    else if (twelve.checked && onlyLetters.checked && (capital.checked) && (lowerCase.checked)) {
        passw.innerHTML = genPassword(mayusculaMinuscula, 12)
    }
    //*12 caract; only letter; mayúscula, que se desactive numbers y symbols*//
    else if (twelve.checked && onlyLetters.checked && (capital.checked)) {
        passw.innerHTML = genPassword(upperCase, 12)
    }

    //*12 caract; only letter; minúcula, que se desactive numbers y symbols *//
    else if (twelve.checked && onlyLetters.checked && (lowerCase.checked)) {
        passw.innerHTML = genPassword(letrasMin, 12)
    }
    //*9, only letter, min y mayus *//
    else if (nine.checked && onlyLetters.checked && (capital.checked) && (lowerCase.checked)) {
        passw.innerHTML = genPassword(mayusculaMinuscula, 9)
    }
    //*9 caract; only letter; mayúscula, que se desactive numbers y symbols*//
    else if (nine.checked && onlyLetters.checked && (capital.checked)) {
        passw.innerHTML = genPassword(upperCase, 9)
    }

    //*9 caract; only letter; minúcula, que se desactive numbers y symbols *//
    else if (nine.checked && onlyLetters.checked && (lowerCase.checked)) {
        passw.innerHTML = genPassword(letrasMin, 9)
    }
    //*6, only letter, min y mayus *//
    else if (six.checked && onlyLetters.checked && (capital.checked) && (lowerCase.checked)) {
        passw.innerHTML = genPassword(mayusculaMinuscula, 6)
    }
    //*6 caract; only letter; mayúscula, que se desactive numbers y symbols*//
    else if (six.checked && onlyLetters.checked && (capital.checked)) {
        passw.innerHTML = genPassword(upperCase, 6)
    }
    //*6 caract; only letter; minúcula, que se desactive numbers y symbols *//
    else if (six.checked && onlyLetters.checked && (lowerCase.checked)) {
        passw.innerHTML = genPassword(letrasMin, 6)
    }

    //*SIMPLE READING*//
    //*12, SIMPLE R, todos,//
    else if (twelve.checked && simpleReading.checked && (capital.checked) && (lowerCase.checked) && (numbers.checked) && (symbols.checked)) {
        passw.innerHTML = genPassword(lectSimple, 12)
    }
    //*9, SIMPLE R, todos//
    else if (nine.checked && simpleReading.checked && (capital.checked) && (lowerCase.checked) && (numbers.checked) && (symbols.checked)) {
        passw.innerHTML = genPassword(lectSimple, 9)
    }
    //*6, SIMPLE R, todos//
    else if (six.checked && simpleReading.checked && (capital.checked) && (lowerCase.checked) && (numbers.checked) && (symbols.checked)) {
        passw.innerHTML = genPassword(lectSimple, 6)
    }
    //*12, SIMPLE R, letras y simbolos//
    else if (twelve.checked && simpleReading.checked && capital.checked && (lowerCase.checked) && (symbols.checked)) {
        passw.innerHTML = genPassword(leSiLetrSim, 12)
    }
    //*9, SIMPLE R, letras y simbolos //
    else if (nine.checked && simpleReading.checked && (capital.checked) && (lowerCase.checked) && (symbols.checked)) {
        passw.innerHTML = genPassword(leSiLetrSim, 9)
    }
    //*6, SIMPLE R, letras y simbolos //
    else if (six.checked && simpleReading.checked && (capital.checked) && (lowerCase.checked) && (symbols.checked)) {
        passw.innerHTML = genPassword(leSiLetrSim, 6)
    }
    //*12, SIMPLE R, letras y numeros//
    else if (twelve.checked && simpleReading.checked && (capital.checked) && (lowerCase.checked) && (numbers.checked)) {
        passw.innerHTML = genPassword(leSiLetrNu, 12)
    }
    //*9, SIMPLE R, letras y numeros //
    else if (nine.checked && simpleReading.checked && (capital.checked) && (lowerCase.checked) && (numbers.checked)) {
        passw.innerHTML = genPassword(leSiLetrNu, 9)
    }
    //*6, SIMPLE R, letras y numeros //
    else if (six.checked && simpleReading.checked && (capital.checked) && (lowerCase.checked) && (numbers.checked)) {
        passw.innerHTML = genPassword(leSiLetrNu, 6)
    }
    //*12, SIMPLE R, numeros y simbolos,//
    else if (twelve.checked && simpleReading.checked && (numbers.checked) && (symbols.checked)) {
        passw.innerHTML = genPassword(leSiNuSi, 12)
    }
    //*9, SIMPLE R, numeros y simbolos//
    else if (nine.checked && simpleReading.checked && (numbers.checked) && (symbols.checked)) {
        passw.innerHTML = genPassword(leSiNuSi, 9)
    }
    //*6, SIMPLE R, numeros y simbolos//
    else if (six.checked && simpleReading.checked && (numbers.checked) && (symbols.checked)) {
        passw.innerHTML = genPassword(leSiNuSi, 6)
    }
    //*12, SIMPLE R, letras//
    else if (twelve.checked && simpleReading.checked && (capital.checked) && (lowerCase.checked)) {
        passw.innerHTML = genPassword(leSiLetr, 12)
    }
    //*9, SIMPLE R, letras//
    else if (nine.checked && simpleReading.checked && (capital.checked) && (lowerCase.checked)) {
        passw.innerHTML = genPassword(leSiLetr, 9)
    }
    //*6, SIMPLE R, letras//
    else if (six.checked && simpleReading.checked && (capital.checked) && (lowerCase.checked)) {
        passw.innerHTML = genPassword(leSiLetr, 6)
    }
    //*deshabilitar*//
    else if (allCharacters.checked) {
        terceraColumna.setAttribute("disabled", true)
    } else if (onlyLetters.checked) {
        numSim.setAttribute("disabled", true)
    }

}











// //*funcion copiar*//
// const btnCopy = document.getElementById("btnCopy").addEventListener("click", copyfuntion)
// btnCopy.onclick = () => {
//     passw.innerHTML = btnCopy
//     navigator.clipboard.writeText(copyText).then(() => {
//         alert("Copied to Clipboard")
//     });
// }
// copyfuntion

//*funcion reset*//
// const btnReset = document.getElementById("btnReset")

// btnReset.onclick = () => {
//     passw.reset()
// }