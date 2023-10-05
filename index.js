// Code your solution here

// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
function findMatching(driversArray, string){
    return driversArray.filter(element => element.toLowerCase() === string.toLowerCase())
}

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(driversArray, string) {
    return driversArray.filter(element => element.charAt(0) === string.charAt(0));
}

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
function matchName(driverObject, string){
    return driverObject.filter(element => element.name === string)
}