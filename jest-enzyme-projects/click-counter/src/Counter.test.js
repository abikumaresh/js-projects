import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Counter from './Counter'

Enzyme.configure({
    adapter : new EnzymeAdapter()
})

/**
 * @function setup
 * @params {Object} - props
 * @prams {Object} - state
 * @returns {shallowWrapper}
 */
const setup = (props={}, state=null) => {
    const wrapper = shallow(<Counter {...props} />)
    if (state) wrapper.setState(state)
    return wrapper
}

/**
 * @function findByTestAttr
 * @params {ShallowWrapper} - wrapper
 * @prams {String} - value to search
 * @returns {shallowWrapper}
 */
const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`)
}

describe('Increment Tests', () => {
    let wrapper

    beforeEach( ()=> {
        wrapper = setup()
    })

    test('renders without error',() => {
        const counterComponent = findByTestAttr(wrapper,'component-counter')
        expect(counterComponent.length).toBe(1)
    })

    test('renders increment button',() => {
        const btn = findByTestAttr(wrapper,'increment-button')
        expect(btn.length).toBe(1)
    })

    test('renders counter display',() => {
        const counterDisplay = findByTestAttr(wrapper,'counter-display')
        expect(counterDisplay.length).toBe(1)
    })

    test('counter starts at 0',() => {
        const initialCounter = wrapper.state('counter')
        expect(initialCounter).toBe(0)
    })

})

test('counter increments by clicking button',() => {
    const counter = 3
    const wrapper = setup(null, {counter})

    const btn = findByTestAttr(wrapper, 'increment-button')
    btn.simulate('click')
    wrapper.update()

    const counterDisplay = findByTestAttr(wrapper,'counter-display')
    expect(counterDisplay.text()).toContain(counter + 1)
})

// Decrement Tests
describe('Decrement Tests', () => {
    test('renders decrement button', ()=> {
        const wrapper = setup()
        const decBtn = findByTestAttr(wrapper, 'decrement-button')
        expect(decBtn.length).toBe(1)
    })

    test('renders error when decremented below 0', ()=> {
        const wrapper = setup()
        const decBtn = findByTestAttr(wrapper, 'decrement-button')
        decBtn.simulate('click')
        wrapper.update()
        
        const errorDisplay = findByTestAttr(wrapper, 'error-msg')
        expect(errorDisplay.length).toBe(1)
    })

    test('counter display when decremented', ()=> {
        const counter = 5
        const wrapper = setup(null, {counter})
        const decBtn = findByTestAttr(wrapper,'decrement-button')
        decBtn.simulate('click')
        wrapper.update()
        
        const counterDisplay = findByTestAttr(wrapper, 'counter-display')
        expect(counterDisplay.text()).toContain(counter - 1)
        
    })

    describe('error display validation', () => {

        let wrapper
        beforeEach( () => {
            wrapper = setup()
        })

        test('error msg display when decrement counter after 0', () => {
            const decBtn = findByTestAttr(wrapper, 'decrement-button')
            decBtn.simulate('click')
            wrapper.update()

            // Error msg should be seen
            let errorDisplay = findByTestAttr(wrapper, 'error-msg')
            expect(errorDisplay.length).toBe(1)
        })

        test('error msg should not be seen when incrementing with counter as 0', () => {
            const incBtn = findByTestAttr(wrapper, 'increment-button')
            incBtn.simulate('click')
            wrapper.update()

            // Error msg should not be seen
            let errorDisplay = findByTestAttr(wrapper, 'error-msg')
            expect(errorDisplay.length).toBe(0)

            const counterDisplay = findByTestAttr(wrapper, 'counter-display')
            expect(counterDisplay.text()).toContain(1)
        })

        
    })

})




