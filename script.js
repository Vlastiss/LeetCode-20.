/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let arr = []
    let obj = {
        '(' : ')',
        '[':']',
        '{':'}'
    }
 
    for(let x of s){
        if(x in obj){
            arr.push(x)
        }else{
            let a = arr.pop()
            if(obj[a] != x){
                return false
            }
        }
    }
    return arr.length === 0
 }

console.log(isValid("()")) // should be true
console.log(isValid("[]()[]"))  // should be true
console.log(isValid("(]"))  // should be false