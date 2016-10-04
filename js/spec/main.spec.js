describe("Calculator", function() {

  var calculator = new Calculator().getInstance();

  it("add method should be implemented", function() {
    expect(calculator.add).toBeDefined();
  });

  it("add method should sum values", function() {
     expect(calculator.add(1,2)).toEqual(3);
     expect(calculator.add(1,2)).not.toEqual(12);
   });

  it("add method should not return null", function() {
    expect(calculator.add(2,3)).not.toBeNull();
    expect(calculator.add(null,null)).not.toBeNull();
  });

  it("sub method should be implemented", function() {
     expect(calculator.sub).toBeDefined();
  });

  it("sub method should minus values", function() {
      expect(calculator.sub(5,2)).toEqual(3);
  });

});
