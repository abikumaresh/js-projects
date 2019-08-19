/*
1
22
333
4444
55555
*/

function printPattern(a){
    var counter = 1
    for (let i = 1; i <= a; i++) {
        var temp = ''
        for (let j = 1; j <= i; j++) {
            temp = temp + counter
        }
        console.log(temp)
        counter = counter + 1
    }
}

printPattern(5)