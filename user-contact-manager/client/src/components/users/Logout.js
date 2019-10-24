import React from 'react'
import { connect } from 'react-redux';
import Axios from '../../config/axios'
import { clearContacts } from '../../actions/contacts'
import {logoutUser} from '../../actions/user'

class Logout extends React.Component {

    componentDidMount = () => {
        Axios.delete('/users/logout', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log(response.data)
            this.props.dispatch(logoutUser())
            this.props.dispatch(clearContacts())
            this.props.history.push('/users/login')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div> {this.props.user.username} - logged out successfully </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}
export default connect(mapStateToProps)(Logout)