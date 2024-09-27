/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly.
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs.

  Once you've implemented the logic, test your code by running
*/

class Calculator {
//constructor() is where you initialize properties or set up the object's initial state.
  constructor(){
    this.result=0;
  }
  add(num){
    this.result+=num;
    return this.result;
    }
    subtract(num){
      this.result-=num;
      return this.result;
    }
    multiply(num){
      this.result*=num;
      return this.result;
    }
    divide(num){
    if(num===0){
      throw new Error("cant divide by 0");//This is a way of creating and throwing an error.
    }
    this.result/=num;
    return this.result;
    }
    clear(){
    this.result=0;
    }
    getResult(){
      return this.result;
    }
    calculate(expression){
    let result=expression.split(' ').join('');
    const validinput="0123456789/*+-().";
    for(let i of result){
  //for(let i in result)
  //retieves indexes
  //for(let i of result)
  //retieves values in those indexes
      if(!validinput.includes(i)){
        throw new Error("invalid non-numerical characters:"+char);
      }
    }
    if(result.includes('/0')){
      throw new Error("Division by zero is not allowed.");
    }
    try {
    //if there is error the code will not get crashed and will work properly
    //This combination of try and catch allows you to manage errors 
    //effectively and ensure your program can respond to unexpected situations!
      this.result = eval(expression);
    } catch (error) {
      throw new Error("Invalid expression");
    }
    return this.result;
  }
}

module.exports = Calculator;
