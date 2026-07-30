// method chaining.

// Without return this, the first method returns undefined, so you can't call the next method.

// Without return this


class Calculator{

    constructor(value){
        this.result = value;
    }


    //addition
    add(number){
        this.result +=number;
        return this;
    }

    sub(number){
        this.result -=number;
        return this;

    }

    div(number){
        this.result /=number;
        return this;

    }

    multi(number){
        this.result *=number;
        return this;

    }



    printResult(){
        console.log("Result : " , this.result);
    }



}



const c = new Calculator(0);

//  const ref =  c.add(30)
// //  console.log(ref)

c.add(20).sub(30).multi(30).printResult()


