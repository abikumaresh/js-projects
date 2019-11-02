import checkPropTypes from 'check-prop-types'

export const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test='${value}']`)
}

export const checkProps = (component, propValue) => {
    const propsError = checkPropTypes(
        component.propTypes,
        propValue,
        'prop',
        component.name
    )
    expect(propsError).toBeUndefined()
}

