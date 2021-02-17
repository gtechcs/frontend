var replaceChars = function (input, map) {
    var inputArray = input.split('');
    // console.log(inputArray);
    var outputArray = inputArray.map(function (c) {
        if (map.hasOwnProperty(c)) {
            return map[c];
        }
        else {
            return c;
        }
    });
    // console.log(outputArray);
    return outputArray.join("");
};
