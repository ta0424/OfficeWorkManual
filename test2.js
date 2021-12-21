'use strict';

var price = 100;

{
    const score1 = 1;
    const score2 = 2
}

const scores = [1.2,3];


//配列操作　unshift shift
//配列操作　push pop
//途中で要素の追加を行うようにする。
//スプレッド構文　...
//分割代入
scores.splice(1,0,30,80);
const [a,b,c,d] = scores;

console.log(a);


