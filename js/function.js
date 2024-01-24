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