'use strict';

console.log('Hello World!!');

// const array = [1, 2, 'dog', 1, 2, 'cat'];

// console.log(array[0]);
// const animal = array[2];
// console.log(animal);
// array[3] = 'pig';//arrayの[要素]は定数でないので代入可能
// array[4] += array[0];
// console.log(array);

// const array = [1,2,3,'dah', '!!'];

// for(let i=0; i<5; i++){
//     console.log(array[i]);//1,2,3,'dah','!!'
//     array[i] = i;//要素の値の書き換え
// }
// console.log(array);//for文を抜けた時の結果

// console.log(array.length);//配列の長さを示す

// for(let i=0; i<array.length; i++){
//     console.log(array[i]);//lengthプロパティを記述しているので数値が出力される。
// }

//for~of文→ofの後ろの配列値を順番にfor後の定数値に代入していく

// const array = [0,1,2,3];
// for(const el of array){
//     console.log(el);
// }

// array[4]= 'end';
// console.log(array);//末尾に追加する方法①

// array[array.length] = 'end';
// console.log(array);

// array[5] = 'end';
// console.log(array);

// let x;
// console.log(x);

// if(x == undefined){
//     console.log('xが未定義だよ');
// }

// const array = [1,2,3];

// array.push(4);//末尾の要素を追加;
// console.log(array);//array[array.length]=値;で末尾に要素を与えていたがこれでおけ

// array.unshift(0);//先頭の要素を追加
// console.log(array);

// array.pop();//末尾の要素を削除
// console.log(array);

// array.shift();//先頭の要素を削除
// console.log(array);

// const array= [1,2,3];

// const tail = array.pop();
// console.log(tail);//末尾要素の取り出し

// let head = array.shift();
// console.log(head);//先頭要素の取り出し

// array.splice(1, 0, 'A')//インデックス１（２番目）に'A'を挿入
// console.log(array);

// array.splice(2, 1);//インデックス２を削除
// console.log(array);

// const array = ['a', 'b', 'c'];

// const index = array.indexOf('b')//インデックスを戻り値として返す(この時は１)
// if(index != -1){
//     array.splice(index, 1);
// }
// console.log(array);

// const newArray = array.map((el) => el + '号');//elは配列の要素
// console.log(newArray);

// //同じ処理をfor-of文で書くと
// const newArray2 = [];

// for(const el of array){//elは配列の要素
//     newArray2.push(el + '号');
// }
// console.log(newArray2);

// const array = [1,2,3,4,5];

// const newArray = array.filter((el) => el > 3).map((el) => el + '号')
// console.log(newArray);

// //同じ処理をfor-of文で書くと
// const newArray2 = [];
// for(const el of array){
//     if(el > 3){
//         newArray2.push(el + '号')
//     }
// }
// console.log(newArray2);

// const etolist = ['ネズミ', 'ウシ', 'トラ', 'ウサギ'];

// const ul = document.getElementById('list');//定数ulで、id=listの要素を呼び出した

// for(const eto of etolist){
//     const li = document.createElement('li');//liの要素を生成
//     li.textContent = eto;//li要素のテキストをetoに変える。etoはetolistの配列の順に入る
//     ul.appendChild(li);//li要素をul要素の子要素にする。
// }


const numList = [1,2,3,4,5,6,7,8];

const ul  = document.getElementById('list');

// for(const num of numList){
//     if(num % 2 == 0){
//         const li = document.createElement('li');
//         li.textContent = 'NO.'+ num;
//         ul.appendChild(li);
//     }
// }


const evenList = numList.filter((a) => a % 2 == 0).map((b) => 'No.' + b);
//filterで条件に反すものを弾き、mapで要素の加工を行なっている。要素の部分は適当で良い
for (const kuso of evenList) {
  const li = document.createElement('li');
  li.textContent = kuso;
  ul.appendChild(li);
}