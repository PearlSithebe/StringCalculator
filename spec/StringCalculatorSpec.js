describe("StringCalculator", function() {
  let stringCalculator;
  beforeEach(function() {
    stringCalculator = new StringCalculator();
  });

  it("should return zero when passed an empty string is passed", function() {
    expect(stringCalculator.Add("")).toEqual(0);
  });

  it("should return a number if it is passed just one number", function() {
    expect(stringCalculator.Add("971")).toEqual(971);
  });

  it("should be able to add up two or more numbers", function() {
    expect(stringCalculator.Add("8,1")).toEqual(9);
    expect(stringCalculator.Add("1,13,7")).toEqual(21);
  });

  it("should be able to split numbers by comma and newline", function() {
    expect(stringCalculator.Add("7\n56,4")).toEqual(67);
  });

  it("should handle any delimeter", function() {
    expect(stringCalculator.Add("1$5\n1,2")).toEqual(9);
  });

  it("should throw an error when negative numbers are passed", function() {
    expect(function() {
      stringCalculator.Add("-8");
    }).toThrowError("negatives not allowed" + -8);
    expect(function() {
      stringCalculator.Add("-8,-2");
    }).toThrowError("negatives not allowed" + -8 - 2);
  });
  it("should ignore numbers over 1000", function() {
    expect(stringCalculator.Add("8,1002")).toEqual(8);
  });
  it("should be able to take delimiters of any length", function() {
    expect(stringCalculator.Add(`//[***]\n1***2***3`)).toEqual(6);
  });
  it("should be able to allow multiple delimiters", function() {
    expect(stringCalculator.Add(`//[*][%]\n1*2%3=`)).toEqual(6);
  });
});
