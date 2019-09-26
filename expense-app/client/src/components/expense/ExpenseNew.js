import React from 'react'
import Axios from '../../config/axios'
import NewExpenseForm from './NewExpenseForm'

export default class ExpenseNew extends React.Component {
    
    
    handleSubmit = (formData) => {
        console.log('new', formData)
        Axios.post('/expenses', formData)
        .then(response => {
            //console.log(response.data)
            this.props.history.push('/expenses')
        })
        .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <NewExpenseForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}