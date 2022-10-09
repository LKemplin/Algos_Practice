// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.

function solution(year) {
    let century = 0;
    if (year % 100 == 0) {
        century = Math.trunc((year - 1)/100) + 1
        console.log(century)
        return century
    } else
        century = Math.trunc(year / 100) + 1
        console.log(century)
        return century
}

solution(2000)
solution(1984)
solution(1621)
solution(2100)
