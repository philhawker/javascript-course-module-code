function Invoice(subTotal) {
    this.taxRate = 0.06
    this.subTotal = subTotal

    this.total = setInterval(() => {
        console.log((this.taxRate * this.subTotal) + this.subTotal)   //.setInterval() takes in 2 arguments. the first is the function, the second is the time 2000
        // console.log(this);
    }, 2000)
}

const inv = new Invoice(200);
console.log(inv.total());



function SavingCalc(paycheck) {
    this.percent = 0.30;
    this.paycheck = paycheck;

    this.deposit = function () {
        return (this.percent * this.paycheck);
    };
}

const piggyBank = new SavingCalc(2000);


