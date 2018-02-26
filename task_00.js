const readline = require("readline");

function main() {
    const readLine = readline.createInterface(process.stdin, process.stdout);

    readLine.question("Enter number: ", function (number) {
        if (number && Number.isInteger(Number(number))) printSuitableNumbers(Number(number));
        else console.log("Enter number!");

        readLine.close();
    });
}

function printSuitableNumbers(number) {
    var res = [];

    for (i = number - 1; i > number - 9*number.toString().length && i > 0; i--) {
        var temp = i;
        var sum = 0;
        while (temp) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }

        if (sum + i === number) res.unshift(i);
    }

    console.log(res.length);
    for (var i = 0; i < res.length; i++ ) console.log(res[i]);
}

main();