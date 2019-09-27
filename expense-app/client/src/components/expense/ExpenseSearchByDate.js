import React from 'react'
import DatePicker from 'react-datepicker'
//import moment from 'moment'

import '../../../node_modules/react-datepicker/dist/react-datepicker.css';

export default class ExpenseSearchByDate extends React.Component {

    constructor() {
        super()

        this.state = {
            selectedDate : ''
        }
    }

    handleChange = (date) => {
        let month = date.getMonth() + 1
        let day = date.getDate()
        
        if (String(month).length < 2) {
            month = '0'+month
            console.log(month)
        }
        if (String(day).length < 2) {
            day = '0'+day
            console.log(day)
        }
        const selectedDate = `${date.getFullYear()}-${month}-${day}`
        this.setState({selectedDate : new Date(selectedDate) })
        this.props.handleSearchExpense(selectedDate)

    }

    render() {
        return (
            <div>
                <h3>Search Expense by date : </h3>
                <form>
                    <DatePicker selected={ this.state.selectedDate } 
                        onChange={ this.handleChange }
                        dateFormat="yyyy-mm-dd"
                        name="datepicker"
                    />
                </form>
            </div>          
        )
        }
}