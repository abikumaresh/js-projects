import React from 'react'
import PropTypes from 'prop-types'

export default function GuessedWords(props) {
    let content
    if (props.guessedWords.length === 0) {
        content = (
            <div>
                <span data-test='guessedWords-instruction'>
                    Try to guess the word !!
                </span>
            </div>
        )
    } else {
        content = (
            <div data-test='guessedWords-table'>
                <h3 className='header'> Guessed Words </h3>
                <table className='table table-sm'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Guesed Words</th> <th> Letters Matched </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.guessedWords.map( (word,index) => {
                                return <tr key={index} data-test='guessed-words-list'>
                                    <td> { word.guessedWord } </td> <td> { word.letterMatchCount } </td>
                                </tr>
                            })
                        }
                    </tbody>
                    
                </table>
            </div>
        )
    }

    return (
        <div data-test='component-guessedWords'>
            { content }
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords : PropTypes.arrayOf( 
        PropTypes.shape({
            guessedWord : PropTypes.string.isRequired,
            letterMatchCount : PropTypes.number.isRequired
        })
    ).isRequired
}