/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // Check if the input is an object or array
    if (Array.isArray(obj)) {
        // Process each item in the array
        return obj
            .map(item => compactObject(item)) // Recursively compact nested items
            .filter(item => item); // Remove falsy values
    } else if (typeof obj === 'object' && obj !== null) {
        // Process each key-value pair in the object
        return Object.entries(obj)
            .map(([key, value]) => [key, compactObject(value)]) // Recursively compact nested values
            .filter(([key, value]) => value) // Remove falsy values
            .reduce((acc, [key, value]) => {
                acc[key] = value; // Rebuild the object
                return acc;
            }, {});
    } else {
        // If the input is neither an object nor an array, return it as is
        return obj;
    }
};