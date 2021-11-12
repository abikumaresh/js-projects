import React, { useState } from 'react'

const ClickCounter = () => {

    const [counter, setCounter] = useState(0)

    const onButtonClick = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <button onClick={onButtonClick}>Click Me...</button>
            <p>
                Click Counter : {counter} times
            </p>
        </div>
    )
}

export default ClickCounter