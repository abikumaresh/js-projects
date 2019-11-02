import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import Congrats from './Congrats'
import { findByTestAttr, checkProps } from '../test/testUtils'

const defaultProps = {success : false}

Enzyme.configure({
    adapter : new EnzymeAdapter()
})

/**
 * @function setup
 * @param {Object} props 
 * @return {shallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps} />)
}

test('render component without error', () => {
    const wrapper = setup({success : false})
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.length).toBe(1)
})

test('do not render component when success prop is false', () => {
    const wrapper = setup({success : false})
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.text()).toBe('')
})

test('render component when success prop is true', () => {
    const wrapper = setup({success : true})
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.text().length).not.toBe(0)
})

test('check prop-types of Congrats component', () => {
    const expectedProps = {success : false}
    checkProps(Congrats, expectedProps)
})