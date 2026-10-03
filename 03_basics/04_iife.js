// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB COnnected`)
})(); // ->  ()function written()->function call

// semicolon mandatory to avoid error

(() => {
    console.log(`DB CONNECTED TWO`);
})();
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('garvit');