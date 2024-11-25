var debounce = function(fn, t) {
    let timeout = null;

    return function(...args) {
        if(timeout)
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), t);
        
    }
};

