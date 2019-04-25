/**
 * Trang Luu
 * 24 APRIL 2019
 * Javascript Practice # 4
 */


//Create an array
var input =[-1 ,5 ,"cat" ,false ,10.2 ,true ,"dog"];

var result;


//Create an object
function array(input) {
    result = {
        strings: [],
        numbers: [],
        booleans: []
    };


    //Passing the values from array and sort them out by type
    for (var i = 0; i < input.length; i++) {
        if (typeof input[i] == "number") {
            document.write(" numbers: [" +input[i]+ " ]" + "<br>");
        } else if (typeof input[i] == "boolean") {
            document.write("booleans : [" +input[i]+ " ]" + "<br>");
        } else {
            document.write("string : [" +input[i]+ " ]" + "<br>");
        }
    }
}
array(input);