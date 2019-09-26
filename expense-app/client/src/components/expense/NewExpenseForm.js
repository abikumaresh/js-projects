import React from 'react'
import Axios from '../../config/axios'

export default class NewExpenseForm extends React.Component {
    constructor() {
        super() 

        this.state = {
            reporter : '',
            grouplist : [],
            group : '',
            employeesOfGroup : [],
            employeesList : [],
            categoryList : [],
            category : '',
            amount : ''
        }
    }

    componentDidMount = () => {
        Axios.get('/employeegroups')
        .then(response => {
            const grouplist = response.data
            //console.log(grouplist)
            this.setState( {grouplist})
        })
        Axios.get('/expense-category')
        .then(response => {
            const categoryList = response.data
            this.setState( {categoryList} )
        })
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState( {
            [e.target.name] : e.target.value
        })
    }

    handleBlur = (e) => {
        console.log('in blur', this.state.group)
        Axios.get(`/employees/group/${this.state.group}`)
        .then( response => {
            console.log(response.data)
            const employeesOfGroup = response.data
            this.setState({employeesOfGroup})
        })
        .catch(err => console.log(err))
    }

    handleGroupSelectChange = (e) => {
        let employeesList = [...e.target.selectedOptions].map(option => option.value)
        this.setState({employeesList})
        console.log(employeesList)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData =  {
            'group' : this.state.group,
            'reporter' : this.state.reporter,
            'employees' : this.state.employeesList,
            'category' : this.state.category,
            'amount' : this.state.amount
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <br/> <label htmlFor='group' > Employee Group : </label>
                    <select name='group' id='group' onChange={this.handleChange} 
                                            onBlur={this.handleBlur} >
                        {
                            this.state.grouplist.map( group => {
                                return <option key={group._id} value={group._id} > {group.name} </option>
                            })
                        }
                    </select> <br/>

                    <label htmlFor='reporter' > Reporter : </label>
                    <select name='reporter' id='reporter' onChange={this.handleChange} >
                        <option > select </option>
                        {
                            this.state.employeesOfGroup.map( employee => {
                                return <option key={employee._id} value={employee._id} > {employee.name} </option>
                            })
                        }
                    </select> <br/>

                    <label htmlFor='employeesList' > Employees to be shared : </label>
                    <select name='employeesList' id='employeesList' multiple='multiple' onChange={this.handleGroupSelectChange} >
                        {
                            this.state.employeesOfGroup.map( employee => {
                                return <option key={employee._id} value={employee._id} > {employee.name} </option>
                            })
                        }
                    </select> <br/>

                    <label htmlFor='category' > Expense Category : </label>
                    <select name='category' id='category' onChange={this.handleChange} >
                        <option> select </option>
                        {
                            this.state.categoryList.map( category => {
                                return <option key={category._id} value={category._id} > {category.category} </option>
                            })
                        }
                    </select> <br/>

                    <label htmlFor='amount' > Amount : Rs. </label>
                    <input type='text' name='amount' id='amount' onChange={this.handleChange} />

                    <input type='submit'/>

                </form>
            </div>
        )
    }
}