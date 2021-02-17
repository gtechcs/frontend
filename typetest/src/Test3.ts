const replaceChars = function (input:string, map:object) {
    var inputArray = input.split('');
    // console.log(inputArray);
    const outputArray = inputArray.map((c) => {
        if(map.hasOwnProperty(c) ){
            return map[c];
        }else{
            return c;
        }
    });
    // console.log(outputArray);
    return outputArray.join("");
}

