const tableHandle = document.querySelector('#quoteTable')

function generateTable() {
    const quotes = JSON.parse(localStorage.getItem('quotes'))

    while(tableHandle.hasChildNodes()) {
        tableHandle.removeChild(tableHandle.firstChild)
    }

    quotes.forEach(function(quote){
        var quoteCounter = 0

        let editBtn = document.createElement('button')
        let delBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        delBtn.textContent = 'Delete'
        editBtn.id = `edit-${quote.id}`
        delBtn.id = `del-${quote.id}`
        editBtn.setAttribute('onclick', "editRow(this)")
        delBtn.setAttribute('onclick', "removeRow(this)")

        const tr = tableHandle.insertRow(quoteCounter)
        
        for (let col=0; col<2; col++) {
            let td = document.createElement('td')
            td = tr.insertCell(col)
            td.id = `td-${quote.id}-${col}`

            if (col == 0) {
                td.innerHTML= `${quote.message}`
            }
            else {
                td.appendChild(editBtn)
                td.appendChild(delBtn)
            }
        }
    
        quoteCounter++    
    }) 

}

function getIdFromButton(button) {
    return button.id.split('-')[1]
}

function editRow(button) {
    const quotes = JSON.parse(localStorage.getItem('quotes'))

    console.log(button.id + ' is clicked for edit')
    var id = getIdFromButton(button)

    const td0Handle = document.getElementById('td-'+id+'-0')
    const td1Handle = document.getElementById('td-'+id+'-1')
    td0Handle.textContent = ''
    td1Handle.textContent = ''

    const label = document.createElement('label')
    const textarea = document.createElement('textarea')
    textarea.rows = '10'
    textarea.cols = '40'
    const updateBtn = document.createElement('button')
    updateBtn.id = 'updateBtn'
    label.innerHTML = '<b>Update your quote ...</b></br>'
    textarea.textContent = quotes[id-1].message
    updateBtn.textContent = 'Update Quote'

    td0Handle.appendChild(label)
    td0Handle.appendChild(textarea)
    td1Handle.appendChild(updateBtn)

    updateBtn.onclick = function() {
        console.log('Update Btn clicked')
        quotes[id-1].message = textarea.value
        localStorage.setItem('quotes',JSON.stringify(quotes))
        generateTable()
    }

}



function removeRow(button) {
    const quotes = JSON.parse(localStorage.getItem('quotes'))

    console.log(button.id + ' is clicked for delete')
    var id = getIdFromButton(button)

    for (let i=0; i<quotes.length; i++ ) {
        if (quotes[i].id == id) {
            quotes.splice(i,1)
        }
    }
    console.log(quotes)
    updateQuotesWithId(quotes)
    generateTable()
}

function updateQuotesWithId(quotes) {
    for (let i=0;i<quotes.length; i++) {
        quotes[i].id = i+1
    }
    console.log(quotes)
    localStorage.setItem('quotes', JSON.stringify(quotes))
}

generateTable()

