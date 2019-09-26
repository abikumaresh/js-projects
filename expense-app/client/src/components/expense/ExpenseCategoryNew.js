import React from 'react'
import Axios from '../../config/axios'
import {Link} from 'react-router-dom'

export default class ExpenseCategoryNew extends React.Component {
    
    constructor() {
        super()

        this.state = {
            category : '',
            categoryList : []
        }
    }

    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState( {
            [e.target.name] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            'category' : this.state.category
        }
        //console.log(formData)
        Axios.post('/expense-category', formData)
        .then(response => {
            //console.log(response.data)
            Axios.get('/expense-category')
            .then( response => {
                const categoryList = response.data
                this.setState( {categoryList})
            })
        })
        .catch(err => console.log(err))

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <br/> <label htmlFor='category' > Group Name : </label>
                    <input type='text' name='category' id='category' value={this.state.category}
                                onChange={this.handleChange} /> <br/>

                    <input type='submit'/>
                </form>

                {this.state.categoryList.length > 0 && (
                    <div>
                    <h3> List of Expense Categories - {this.state.categoryList.length} </h3>
                    <ul>
                        {
                            this.state.categoryList.map( category => {
                                return <li key={category._id}> { category.category} </li>
                            })
                        }
                    </ul>
                    </div>
                )} 

                <br/><Link to='/expenses' > Back </Link>

            </div>
        )
    }
}