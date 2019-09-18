class StringCalculator {
  Add(numbers) {
    var sum = 0;
    if (numbers == "") {
      return 0;
    }
    if (numbers.length == 1) {
      return parseInt(numbers);
    }
    let digit = numbers.split(/[,$\n/[;*\]%]+/);

    let neg = digit.filter(function(x) {
      return x < 0;
    });
    for (let i = 0; i < digit.length; i++) {
      if (digit[i] == "") {
        digit[i] = 0;
      }

      if (digit[i] > 1000) {
        continue;
      }

      sum += parseInt(digit[i]);
      if (digit[i] < 0) {
        throw new Error("negatives not allowed" + neg);
      }
    }

    return sum;
  }
}
