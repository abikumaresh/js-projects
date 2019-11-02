import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import {findByTestAttr, checkProps} from '../test/testUtils'
import GuessedWords from './GuessedWords'

Enzyme.configure({
    adapter : new EnzymeAdapter()
})

const defaultProps = {
    guessedWords : [
        {guessedWord : 'train', letterMatchCount : 2},
        {guessedWord : 'table', letterMatchCount : 2}
    ]
}

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps} />)
}

test('component Prop Type check', () => {
    const wrapper = setup()
    checkProps(GuessedWords, defaultProps)
})

describe('if no words guessed', () => {
    let wrapper
    beforeEach( () => {
        wrapper = setup({ guessedWords : [] })
    })

    test('renders component without error', () => {
        const instComponent = findByTestAttr(wrapper, 'component-guessedWords')
        expect(instComponent.length).toBe(1)
    })
    test('renders instructions without error', () => {
        const instComponent = findByTestAttr(wrapper, 'guessedWords-instruction')
        expect(instComponent.text().length).not.toBe(0)
        expect(instComponent.text()).toContain('guess')
    })
})

describe('if words are already guessed', () => {
    const guessedWords = [
        {guessedWord : 'train', letterMatchCount : 2},
        {guessedWord : 'table', letterMatchCount : 3},
        {guessedWord : 'chair', letterMatchCount : 0}
    ]

    let wrapper
    beforeEach( () => {
        wrapper = setup({ guessedWords })
    })

    test('renders component without error', () => {
        const guessedWordsComponent = findByTestAttr(wrapper, 'component-guessedWords')
        expect(guessedWordsComponent.length).toBe(1)
    })

    test('renders guessed words section without error', () => {
        const guessedWordsListDisplay = findByTestAttr(wrapper, 'guessedWords-table')
        expect(guessedWordsListDisplay.length).toBe(1)
    })

    test('renders component without error', () => {
        const guessedWordsList = findByTestAttr(wrapper, 'guessed-words-list')
        expect(guessedWordsList.length).toBe(guessedWords.length)
    })
    
})