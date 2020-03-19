let txt;
txt = '<html>\
            <img>img1</img>\
            <txt>txt1</txt>\
            <img>img2<img>\
            <txt>txt2</txt2>\
        </html>'
console.log(txt)


Function.prototype.getMultiLine = function () {
    var lines = new String(this);
    lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
    return lines;
}

var string = function () {
    /*
        <html>
            <img>img1</img>
            <txt>txt1</txt>
            <img>img2<img>
            <txt>txt2</txt2>
        </html>
    */
}
txt = string.getMultiLine()
console.log(txt)


// let re = /<txt>(.*)</txt>/g
// txt.replace(reg)


var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbz');
console.log(myArray)

myRe = /d(b+)d/m;
myArray = myRe.exec('cdbbdbsbz');
console.log(myArray)