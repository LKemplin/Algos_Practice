

function solution(str) {
    let palindrome = null;
    str = str.toLowerCase();
    for (i=0; i<str.length/2; i++){
        if (str[i] !== str[str.length-1-i]) {
            palindrome = false;
            console.log(palindrome);
            return palindrome;
            }
        }
    palindrome = true;
    console.log(palindrome);
    return palindrome;
    }

solution("lynsey");
solution("Anna");
solution("racecar");