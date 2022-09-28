// 1 NUMBER
// const num = 42;
// console.log(num);
// const float = 42.42;
// console.log(float);
// const pow = 10e3;
// console.log(pow);
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2, 55 ) -1)
// console.log(Number.MIN_SAFE_INTEGER)
// const negative = -42;
// console.log(negative);
// console.log(negative < 10);
// console.log('Max VALUE', Number.MAX_VALUE);
// console.log('Min VALUE', Number.MIN_VALUE);
// console.log('possitiv INFINIT', Number.POSITIVE_INFINITY);
// console.log('Negative INFINIT', Number.NEGATIVE_INFINITY);
// console.log('Nan', Number.NaN)
// console.log(NaN)
// console.log(typeof (NaN));
// console.log(2/0);
// console.log(Number.isFinite(false))
// const stringInt = '40';
// const stringFLoat = '40.42';
// console.log(Number(stringInt)   + 2)
// console.log(+stringInt   + 2)
// console.log(parseFloat(stringFLoat) +2)

// console.log(0.4 + 0.2);
// console.log((2 /  5) +  (1 / 5))
// console.log(+(0.4 + 0.2).toFixed(5));
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt
// console.log( 90019925474099199999999999999n);
// console.log(-21412412521523523523523452141n);
// console.log(parseInt(10n) - 4);
// console.log((10n - BigInt(4)))

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.pow(5 , 5))
// console.log(Math.abs(-42))
// console.log(Math.max(42, 12321, 1312,123,312312312, 241))
// console.log(Math.round(4.1))
// console.log(Math.random())

// 4 Example

function getRandomBetween (min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min);

}

console.log(getRandomBetween(10, 42));