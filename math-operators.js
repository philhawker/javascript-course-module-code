2 + 2; // 4

2 - 2; // 0

2 / 2; // 1

2 * 10; // 20

5 % 2; // 1  % this is modulous or remainder. used for finding every other or odds and even

10 % 2; // 0

8 % 2; // 0

2 ** 10; // 1024

var num = 2;

num++; // 2 This is incrementing. this will add 1 each time the num variable is called. can ONLY be called on a variable

++num; // 4

num; // 4

num--; // 4

num; // 3

--num; // 2

2++; // VM3506:1 Uncaught ReferenceError: Invalid left-hand side expression in postfix operation

++2; // VM3508:1 Uncaught ReferenceError: Invalid left-hand side expression in prefix operation

var someNum = 10;

var someOtherNum = -someNum;

someOtherNum; // -10

var strNum = '100';

var convertedNum = + strNum;

convertedNum; // 100

