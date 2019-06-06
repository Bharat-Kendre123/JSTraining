let f = debounce(sayHi, 1000);

f(1); // runs immediately
f(2); // ignored

setTimeout(() => f(3), 100); // ignored ( only 100 ms passed )
setTimeout(() => f(4), 1100); // runs
setTimeout(() => f(5), 1500); // ignored (less than 1000 ms from the last run)


function debounce(func, ms) {

    let callThefunction=true;
    return function () {
        if(callThefunction){
           callThefunction=false;
           func();
           setTimeout(()=>callThefunction=true, ms);
        }else{
            console.log(`call ignored`);
            return;
        }
    }
}


function sayHi() {
    console.log("Hi there");
}