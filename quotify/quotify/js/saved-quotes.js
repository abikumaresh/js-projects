const listHandle = document.querySelector('#list')
const liHandle = document.querySelector('#li')
const getAnotherQuoteHandle = document.querySelector('#getAnotherQuote')

var localQuotes = JSON.parse(localStorage.getItem('quotes') )
//console.log('Local Storage quotes : ' + localQuotes)

function listQuote(msg) {
    liHandle.innerHTML=msg
    listHandle.appendChild(li)
}

function loadLocalRandomQuote() {
    liHandle.innerHTML=''
    //console.log(localQuotes.length)
    let random = Math.floor(Math.random() * localQuotes.length)
    //console.log(random)
    let data = localQuotes[random].message
    //console.log(data)
    listQuote(data)
}

getAnotherQuoteHandle.addEventListener('click', function() {
    console.log('Get another quote button clicked')
    loadLocalRandomQuote()
})

loadLocalRandomQuote()





