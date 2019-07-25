const textHandle = document.getElementById('addNewQuote')
const saveBtnHandle = document.getElementById('saveBtn')

saveBtnHandle.addEventListener('click', function() {
    //console.log('save btn clicked')
    let value = textHandle.value
    //console.log(value)

    let localQuotes = JSON.parse(localStorage.getItem('quotes'))
    let localQuotesLength = localQuotes.length
    //console.log(localQuotesLength, localQuotes)

    let newQuote = {
        id: localQuotesLength+1,
        message: value
    }
    localQuotes.push(newQuote)
    //console.log(localQuotes)
    localStorage.setItem('quotes', JSON.stringify(localQuotes))
})
