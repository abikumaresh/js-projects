import React, {useState} from 'react'

const Translate = () => {   
    const options = [
        {
            label : "Africaans",
            value : "af"
        },
        {
            label : "Arabic",
            value : "ar"
        },
        {
            label : "Hindi",
            value : "hi"
        }]

    const {language, setLanguage} = useState(options[0])
    return (
        <div>
         
        </div>
    )
}

export default Translate