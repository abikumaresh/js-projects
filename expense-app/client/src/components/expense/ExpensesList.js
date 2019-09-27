import React from 'react'
import Axios from '../../config/axios'
import {Link} from 'react-router-dom'
import ExpenseSearchByDate from './ExpenseSearchByDate'

export default class ExpensesList extends React.Component {
    constructor() {
        super()

        this.state = {
            expenses : [],
            expensesByDate : []
        }
    }

    getExpenseDetails() {
        return Axios.get('/expenses')
        .then( response => {
            return Promise.resolve(response)
        })
        .catch( err => {
            return Promise.reject(err)
        })
    }

    componentDidMount() {
        this.getExpenseDetails()
        .then( values => {
            const expenses = values.data
            //console.log(expenses) 
            this.setState( {expenses} )

        })
        .catch ( err => console.log(err))
    }

    handleSearchExpense = (searchDate) => {
        console.log('search expense handle', searchDate)
        const d1 = new Date(searchDate)
        const expensesByDate = this.state.expenses.filter( expense => {
            const d2 = new Date(expense.createdAt.split('T')[0])
            return d1.getTime() === d2.getTime()
        })
        console.log(expensesByDate)
        this.setState( {expensesByDate} )
    }

    render() {
        return (
            <div>
                <ExpenseSearchByDate handleSearchExpense={this.handleSearchExpense} />
                {
                    this.state.expensesByDate &&                 
                        <div>
                        <ul>
                            {
                                this.state.expensesByDate.map (expense => {
                                        return <li key={expense._id} > {expense.reporter.name}-{expense.category.category}</li>
                                })
                            }
                        </ul> 
                        </div>
                }      

                <h3> List of Expenses raised - {this.state.expenses.length} </h3>
                <ul> 
                    {
                        this.state.expenses.map( expense => {
                            return <li key={expense._id} > <Link to={`/expenses/${expense._id}`} > {expense.reporter.name} -- { expense.category.category} </Link> </li>
                        })
                    }
                </ul>
                <Link to='/expenses/new'> Add a new Expense </Link> <br/>
                <Link to='/expense-category'> Add a new Expense Category </Link>

                              
            </div>
        )
    }
}