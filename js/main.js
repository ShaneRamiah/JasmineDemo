"use strict";

var Calculator = function () {
      var instance = null;

      var Init = function () {

        var add = function (x, y) {
          return x + y;
        };

        var sub = function (x, y) {
           return x - y;
        };

        var mul = function (x, y) {
          return x * y;
        };

        var div = function (x, y) {
          return x / y;
        };

        return {
            add: add,
            sub: sub,
            div: div
        };

      }

      // handles the prevention of additional instantiations
      function getInstance() {
          if (!instance) {
              instance = new Init();
          }
          return instance;
      }

      return {
          getInstance: getInstance
      };
};


var calculate = function ()
{
    var operationTextbox = document.getElementById("operation");
    var operation = operationTextbox.options[operationTextbox.selectedIndex].value;

    var firstNumber = parseInt(document.getElementById("firstNumber").value) || 0;
    var secondNumber = parseInt(document.getElementById("secondNumber").value) || 0;
    var answer = document.getElementById("answer");

    var calculator = new Calculator().getInstance();

    switch (operation) {
      case "add": answer.value = calculator.add(firstNumber,secondNumber);
        break;
      case "sub": answer.value = calculator.sub(firstNumber,secondNumber);
        break;
      case "mul": answer.value = calculator.mul(firstNumber,secondNumber);
        break;
      case "div": answer.value = calculator.div(firstNumber,secondNumber);
          break;
      default:

    }

}
