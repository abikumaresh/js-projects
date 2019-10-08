import React from 'react'
import Axios from '../../config/axios'
import { Link } from 'react-router-dom'

export default class ExpenseShow extends React.Component {
    constructor() {
        super()

        this.state = {
            group : {},
            reporter : {},
            category : {},
            employees : [],
            amount : '',
            createdAt : ''
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)
        Axios.get(`/expenses/${id}`)
        .then( response => {
            console.log(response.data)
            const {amount, employees, reporter, group, category, createdAt } = response.data
            console.log(createdAt)
            this.setState({amount, employees, group, reporter, category})
            this.setState({
                createdAt : createdAt.split('T')[0]
            })
        })
        .catch(err => console.log(err))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const id = this.props.match.params.id

        const formData = {
            expense : id,
        }

        Axios.post('/reimbursements', formData)
        .then (response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                {
                    <div>
                        <h2> Expense details </h2>
                        
                        <h3> Raised By : {this.state.reporter.name} </h3>
                        <h3> Reporter email : {this.state.reporter.email} </h3> 
                        <h3> Group : {this.state.group.name} </h3>
                        <h3> Category : {this.state.category.category} </h3>
                        <h3> Amount : Rs.{this.state.amount} </h3> 
                        <h3> Expense to be shared by : 
                            <ul>
                            {
                                this.state.employees.map( employee => {
                                    return <li key={employee._id} > {employee.name} </li>
                                })
                            }
                            </ul>                            
                        </h3> 
                        <h3> Expense created At : {this.state.createdAt} </h3><br/>

                        <input type='button' name='sumbit' value='Reimburse' onClick={this.handleSubmit} />

                        <br/> <Link to='/expenses'> Back </Link>
                    </div>
                        
                }

            </div>
        )
    }
}