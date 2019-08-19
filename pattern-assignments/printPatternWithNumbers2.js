/*
1
12
123
1234
12345
*/

function numberPattern(num) {
    for (let i = 1; i <= num; i++) {
        var temp = ''
        for (let j = 1; j < i+1; j++) {
            temp = temp + j
        }
        console.log(temp)
    }
}

numberPattern(5)