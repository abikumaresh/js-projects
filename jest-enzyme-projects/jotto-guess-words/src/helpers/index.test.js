import { getMatchedLetterCount } from './index'

describe('check return value of matched letter count', () => {
    let secretWord = 'party'
    test('no matching letters', () => {
        const count = getMatchedLetterCount(secretWord, 'check' )
        expect(count).toBe(0)
    })

    test('3 matching letters', () => {
        const count = getMatchedLetterCount(secretWord, 'rainy' )
        expect(count).toBe(3)
    })

    test('3 matching letters with duplicates', () => {
        const count = getMatchedLetterCount(secretWord, 'parka' )
        expect(count).toBe(3)
    })
})