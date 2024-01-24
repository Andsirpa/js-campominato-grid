// genero le celle
function cellGenerator(index, number) {
    // creo l'elemento cella
    let cell = document.createElement('div')
    cell.classList.add('box')

    if (number == 100) {
        cell.classList.add('box-10')
    } else if (number == 81) {
        cell.classList.add('box-9')
    } else {
        cell.classList.add('box-7')
    }
}

// definisco la difficoltà
function selectDifficulty(difficulty) {
    if (difficulty.value == "easy") {
        cellQuantity = 100;
    } else if (difficulty.value == "medium") {
        cellQuantity = 81;
    } else {
        cellQuantity = 49;
    }

    return cellQuantity;
}

// genero la griglia
function gridGenerator(container, number) {
    container.innerHTML = ""
    // creo una variabile per la difficoltà
    let iteration
    iteration = selectDifficulty(number)

    for (let i = 1; i <= iteration; i++) {
        let cellEl = cellGenerator(i, iteration)

        container.append(cellEl)
    }
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