function numberChecker(numbers) {
    function checkNumber(number) {
        return numbers.indexOf(number) !== -1;
    }

    return checkNumber;
}
var numbers = [1, 2, 3, 4, 5];
var checkNumber = numberChecker(numbers);

console.log(checkNumber(2)); // true
console.log(checkNumber(6)); // false
