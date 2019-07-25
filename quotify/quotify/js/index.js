const listHandle = document.querySelector('#list')
const liHandle = document.querySelector('#li')

const saveBtnHandle = document.querySelector('#saveBtn')
const getAnotherHandle = document.querySelector('#getAnother')

var quotes = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : []
console.log('Beginning quotes : ' + quotes)

function listQuote(msg) {
    liHandle.innerHTML=msg
    listHandle.appendChild(li)
}

function loadRandomQuote() {
    liHandle.innerHTML=''
    axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    .then(function(response) {
        const data=response.data.message
        listQuote(data)        
    })
    .catch(function(err){
        console.log(err)
    })
    saveBtnHandle.textContent = 'Save to Local'
}

saveBtnHandle.addEventListener('click', function() {
    console.log('save btn clicked')
    if ( JSON.parse(localStorage.getItem('quotes')))
        var counter = JSON.parse(localStorage.getItem('quotes')).length + 1
    else
        var counter = 1

    console.log(typeof counter, counter)
    const data = liHandle.innerHTML
    const saveQuote = {
        id: counter,
        message: data
    }
    quotes.push(saveQuote)
    console.log(quotes)
    localStorage.setItem('quotes', JSON.stringify(quotes))
    console.log(JSON.parse(localStorage.getItem('quotes')))

    saveBtnHandle.textContent = 'Saved'
}) 

getAnotherHandle.addEventListener('click', function() {
    console.log('Get another quote button clicked')
    loadRandomQuote()
})

loadRandomQuote()





