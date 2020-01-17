const uniqueMessage = error => {
    let output = ''
    let fieldname = error.message.substring(
                error.message.lastIndexOf('.$') + 2,
                error.message.lastIndexOf('_1'))
    output = fieldname.charAt(0).toUpperCase() +
             fieldname.slice(1) + " already exists"

    return output
}

exports.errorHandler = error => {
    let message = ''

    if (error.code) {
        switch(error.code) {
            case 11000 :
            case 11001 :
                message = uniqueMessage(error)
                break
            default :
                message = 'Something went wrong'
        }
    }

    return message
}