// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// 1.  Using setInterval.
// 2. Using recursive setTimeout.

// solution by using recursive setTimeout.

function primeNumber(from, to) {
    console.log(from);
    if (from < to) {
        setTimeout(function () {
            primeNumber(++from, to);
        }, 1000);
    }
}

//setTimeout(primeNumber, 1000,1,20);

// solution by using  setInterval

function primeNumer(from, to) {
    let current = from;

    let timetId = setInterval(() => {
        console.log(current)
        if (current >= to) {
            clearInterval(timerId);
        }
    }, 1000)
}

primeNumber(11,15)
