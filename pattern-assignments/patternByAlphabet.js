/*

A
BB
CCC
DDDD 
EEEEE

*/

function patterByAlphabet(num) {

    var alpha = {
        1:'A', 2:'B', 3:'C', 4:'D', 5:'E', 6:'F', 7:'G', 8:'H', 9:'I', 10:'J',
        11:'K', 12:'L', 13:'M', 14:'N', 15:'O', 16:'P', 17:'Q', 18:'R', 19:'S',20:'T',
        21:'U', 22:'V', 23:'W',24:'X', 25:'Y', 26:'Z'
    }

    for (let i=1; i<=num; i++) {
        let tempOut = ''
        for (let j=1;j<=i;j++) {
            tempOut = tempOut+alpha[i]
        }
        console.log(tempOut)
    }

}

patterByAlphabet(10)