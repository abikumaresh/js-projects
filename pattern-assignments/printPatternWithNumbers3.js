/*
    1
   21
  321
 4321
54321
*/

function printPattern(num){
    for (let i = 1; i <= num; i++) {
        var temp = ''
        for (let k = num; k > i; k--) {
            temp = temp + ' '
        }
        for (let j = i; j >= 1; j--) {
            temp = temp + j
        }
        console.log(temp)
    }
}

printPattern(6)