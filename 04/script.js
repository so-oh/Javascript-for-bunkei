'use strict';

//console.log('Hello World!!');

for(let i=0; i<5; i++){
    console.log('Hello World!!');
}

// for(let biscuit=1; biscuit <= 128; biscuit *=2){
//     console.log(`ポケットを叩くとビスケットが${biscuit}つ`);
// }

// for(let a=1; a <= 9; a++){
//     for(let b=1; b<=9; b ++){
//         console.log(`${a} × ${b} = ${a*b}`);
//     }
// }

// for(let num=1; num <=10; num++){
//     let str;
//     if(num % 2 == 0){
//         str = '偶数です';
//     }else{
//         str = '奇数です';
//     }
//     console.log(`${num}は${str}`);
// }

// for(let cnt = 0; cnt < 3; cnt++){
//     const msg = 'ブロック内';
//     console.log(msg);
// }

// for (let num = 1; num <= 10; num += 1) {
//     if (num % 5 == 0) {
//       break; // → for文から抜け出す（続きは実行されない）
//     }
//     console.log(num); // → 1 → 2 → 3 → 4
//   }
//   console.log('for文から出ました');

// for (let a = 0; a < 5; a += 1) {
//     for (let b = 0; b < 5; b += 1) {
//       if (b == 4) {
//         break; // ※1に抜けるだけで、一気に※2まで抜けたりしない
//       }
//       console.log(a + '-' + b);
//     }
//     // ※1
//   }
//   // ※2

// for (let num = 1; num <= 10; num += 1) {
//     if (num % 3 == 0) {
//       continue;  // breakと交互に書き換えてみる
//     }
//     console.log(num); // → 1 → 2 → 4 → 5 → 7 ...
//   }
//   console.log('for文から出ました');

// for (const data of [1, 2, 'dog!', 1, 2, 'cat!']) {
//     console.log(data); // 1 → 2 → dog! → 1 → 2 → cat!
//   }

for (const servant of ['犬', '猿', '雉']) {
    for (let n = 1; n <= 3; n++) {
      console.log(`${servant}${n}号！`);
    }
  }

// const element = document.querySelector('p');
// const element = document.getElementById('message')

// const element = document.createElement('p');
// element.textContent = 'Hello World!!';
// document.body.appendChild(element);

const ul = document.getElementById('list');//親要素の呼び出し
for(let i=0; i<5; i++){
    const li = document.createElement('li');//ul要素の子要素であるli要素の生成の宣言
    li.textContent = `子要素第${i}号`;//li要素のテキストコンテントの決定
    ul.appendChild(li);//HTMLにli要素を表示する
}
