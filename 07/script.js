'use strict';

console.log('Hello World!!');

// const el = document.querySelector('p');
// console.log(el);

// const servants = ['犬', '猿', '雉'];

// function showServants(){
//     console.log('現在の家来は：');
//     for(const servant of servants){
//         console.log(servant);
//     }
//     console.log(`の総勢${servants.length}です`);
// }

// showServants();

// servants.push('鬼');
// showServants();

// servants.push('桃');
// showServants();

// function appendServants(newcomer){
//     servants.push(newcomer);

//     console.log('現在の家来は；');
//     for(const servant of servants){
//         console.log(servant);
//     }
//     console.log(`の総勢${servants.length}名です`);
// }

// const servants = ['犬', '猿', '雉'];

// appendServants('鬼');
// appendServants('桃');
// appendServants('爺');

// function swapServants(newcomer){
//     servants.push(newcomer);
//     const fired = servants.shift();//戻り値(最初の要素)を消す

//     console.log('現在の家来は：');
//     for(const servant of servants){
//         console.log(servant);
//     }
//     console.log(`の総勢${servants.length}名です`);

//     return fired;//戻り値
// }

// const servants = ['犬', '猿', '雉'];

// const retired = swapServants('鬼');//追加要素がservantsに入り、戻り値としてfiredの値が入り、それがretiredとして定義される
// console.log(`${retired}さん、これまでありがとう`);//retiredの戻り値がそこに入る
// console.log(`${swapServants('桃')}さん、これまでありがとう`);//retiredで定義したものをそのまま入れてもおけ

// function getArray(){
//     return ['A', 'B', 'C'];//配列を返す
// }
// const array = getArray();
// console.log(array[1]);

// function getObject(){
//     return {a: 'A', b: 'B', c: 'C'};//戻り値をかえす
// }
// const obj = getObject();
// console.log(obj.a);

// const [a, b, c] = getArray();

// console.log(a);
// console.log(b);
// console.log(c);

// const { a, c } = getObject();//aとcのみ受け取る

// console.log(a);
// console.log(c);

// const sayHello = (who) => `Hello ${who}`;//関数宣言

const sayHello = function(who){//関数宣言
    return `Hello ${who}`;//戻り値でHelloを付け加える
}

const msg = sayHello('world');//関数呼び出し
console.log(msg);

const obj = {
    name: 'OJK',//名前のプロパティ
    sayHello(){
        console.log(`Hello ${this.name}!!`);//同オブジェクト内のプロパティを使用している
    },
    sayHelloTwice(){
        this.sayHello();
        this.sayHello();
    }
};

obj.sayHello();

obj.name = '桃太郎';//objの名前プロパティに別名を指定
obj.sayHelloTwice();

