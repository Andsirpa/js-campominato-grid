// genero la griglia
function generateGrid(container, level) {
    container.innerHTML = "";
    const bombArray = bombArrayGen(level);
    console.table(bombArray);
    let boxEl = "";
    for (i = 1; i <= level * level; i++) {
        boxEl = generateBox(i, level, bombArray);
        container.append(boxEl);
    }
}

function generateBox(i, level, bomblist) {
    let box = document.createElement("div");
    box.innerText = i;
    box.setAttribute("data-i", i);
    box.classList.add("box");
    box.classList.add(`box-${level}`);

    // gestisco l'evento al click
    box.addEventListener("click", function () {

        if (!isGameOver) {
            if (bomblist.includes(parseInt(this.getAttribute("data-i")))) {
                let boxCollection = document.getElementsByClassName("box");
                for (index = 1; index < boxCollection.length; index++) {
                    if (bomblist.includes(parseInt(boxCollection[index].innerText))) {
                        boxCollection[index].classList.add("error");
                    }
                }
                alert("Hai perso, riprova!! Punteggio: " + points);
                isGameOver = true;
            } else {

                // condizione di vittoria
                this.classList.add("safe");
                points += 1;
                if (points >= level * level - 16) {
                    alert("Hai vinto, hai fatto un punteggio di " + points);
                    isGameOver = true;
                    let boxCollection = document.getElementsByClassName("box");
                    for (index = 1; index < boxCollection.length; index++) {
                        if (bomblist.includes(parseInt(boxCollection[index].innerText))) {
                            boxCollection[index].classList.add("error");
                        }
                    }
                }
            }
        }
    });
    return box;
}

// genero le bombe
function bombArrayGen(level) {
    const bombArray = [];
    let min = 1;
    let max = level * level;
    let offset = max - min;
    if (offset >= 16) {
        while (bombArray.length < 16) {
            let bomb = Math.floor(Math.random() * (max - min + 1) + min);
            if (!bombArray.includes(bomb)) {
                bombArray.push(bomb);
            }
        }
    }

    return bombArray;
}




/**
 * 
 * @param {string} msg Messaggio da stampare
 * @returns {number} Numero fornito dall'utente
 */
function askNumber(msg = 'Dammi un numero') {
    let userNumber = parseInt(prompt(msg))

    while (isNaN(userNumber)) {
        userNumber = parseInt(prompt('Spiacente,numero non è valido. ' + msg))

    }

    return userNumber
}


/**
 * 
 * @param {number} max Valore minimo
 * @param {number} min Valore massimo
 * @returns {number} Numero randomico tra minimo e massimo
 */
function getRandomNumber(min, max) {
    min = parseInt(min)
    max = parseInt(max)

    if (isNaN(min) || isNaN(max)) {
        console.error('I valori inseriti devono essere numerici')
        return
    }

    if (min >= max) {
        console.error('Il valore massimo deve essere maggiore del valore minimo');
        return
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNumber
}

/**
 * 
 * @param {string} word Parola da girare
 * @returns {string} Parola girata
 */
function reverseWord(word) {
    word = word.toLowerCase().trim()
    let reverseWord = ''
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i]
    }
    return reverseWord
}