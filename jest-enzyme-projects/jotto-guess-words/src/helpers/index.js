/**
 * @function getMatchedLetterCount
 * @param {string} - secretWord 
 * @param {string} - matchWord 
 * @returns {number} - matchCount
 */
export const getMatchedLetterCount = (secretWord, matchWord) => {
    const secretWordLetterSet = new Set(secretWord.split(''))
    const matchWordLetterSet = new Set(matchWord.split(''))

    return [...secretWordLetterSet].filter( letter => matchWordLetterSet.has(letter)).length
    
}