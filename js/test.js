// Create your own `template` function:
//
// • the `template` function should accept
//    1. a string of the template to parse
//    2. an `options` object for custom delimiters
//        - an `open` property for the open delimiter
//        - a `close` property for the close delimiter
// • the default delimiters the `template` function should use are:
//    1. `*(` for the opening delimiter
//    2. `)*` for the closing delimiter
// • the `template` function should return a function
// • the returned function should accept:
//    1. one argument for each placeholder in the original string
//    2. a number - this is how many times the string should be logged to the console
//
// EXAMPLE:
// in the example below `*(` is my default opening delimiter and `)*` is the default closing delimiter
// var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
// var logResult = template( string );
// logResult( 'love', 'ice cream', 2 ); // logs the message "Hi, my name is Richard. And I love this ice cream!", twice
//
//
// var string = "Is <<! thing !>> healthy to <<! action !>>?";
// var logResult = template( string, {open: '<<!', close: '!>>'} );
// logResult( 'ice cream', 'consume', 7 ); // logs the message "Is ice cream healthy to consume?", seven times
//
//
// Now it's your turn!

function template1(str, options) {
    var open,
        close,
        args = [],
        string = 'var string = ';

    if (options) {
        open = options.start;
        close = options.end;
    }
    else {
        open = "*(";
        close = ')*';
    }

    var splatted_str = str.split(open);
    for (var i = 1 ; i < splatted_str.length ; i++) {
        var closeIndex = splatted_str[i].indexOf(close);
        var param = splatted_str[i].slice(0, closeIndex).trim();
        args.push(param);
        string
    }
    args.push('number');
    string += ";";
    string += "for( var i = 0; i < number; i++) {console.log(string)};";
    return new Function(args, string);
}


var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
var logResult = template1( string );
logResult( 'love', 'ice cream', 2 );