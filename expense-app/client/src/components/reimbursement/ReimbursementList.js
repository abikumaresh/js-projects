import React from 'react'
import Axios from '../../config/axios'

export default class ReimbursementList extends React.Component {
    constructor() {
        super()

        this.state = {
            details : []
        }
    }

    getReimbursementDetails() {
        return Axios.get('/reimbursements')
        .then( response => {
            return Promise.resolve(response)
        })
        .catch( err => {
            return Promise.reject(err)
        })
    }

    componentDidMount() {
        const details = []
        this.getReimbursementDetails()
        .then( values => {
            const reimbursements = values.data   
            reimbursements.map( reimbursement => {
                return Axios.get(`/expenses/${reimbursement.expense}`)
                .then(response => {
                    //console.log(response.data)
                    const exp = {
                        reporter : response.data.reporter,
                        group : response.data.category.category,
                        amount : response.data.amount
                    }
                    Object.assign(reimbursement, exp)
                    console.log(reimbursement)
                    details.push(reimbursement)

                })            
            })
            this.setState( {details}, () => {
                console.log(details)
            })

        })  
        .catch ( err => console.log(err))
            
        
    }

    render() {
        console.log(this.state.details)
        return (
            <div>
                
                <h3> List of Reimbursements made - {this.state.details.length} </h3>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Expense Reporter</th>
                            <th>Reimbursement Category</th>
                            <th> Amount</th>
                            <th> Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.details.map( detail => {
                                return  (
                                    <tr key={detail._id}>
                                        <td> {this.state.detail.reporter.name}  </td>
                                        <td> {this.state.detail.group} </td>
                                        <td> {this.state.detail.amount} </td>
                                        <td> {this.state.detail.reimbursed} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                
            </div>
        )
    }
}