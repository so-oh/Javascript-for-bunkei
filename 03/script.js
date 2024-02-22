'use strict';

// const bmi = 27;
// console.log(`あなたのBMIは${bmi}です`);

// const height = 1.55, weight = 55;
// const bmi = weight / (height * height);
// console.log(`身長：${height} 体重：${weight} → BMIは${bmi}です`);
// console.log('身長：' + height + ' 体重：' + weight + '→ BMIは' + bmi + 'です');

// const bmi = 20;
// console.log(`あなたのBMIは${bmi}:`);
// //分岐条件
// if(bmi > 25){
//     console.log('肥満です');
// }


// const num1 = 5;
// const num2 = 10;
// if(num1 >= num2){
//     console.log('num1はnum2以上の値です');
// }

// const message = 'Thank You';
// if(message == 'Thank You'){
//     console.log(message + ', too');
// }

// const num = 10; //Number型
// const strNum = '10'; // String型
// if(num == strNum){
//     console.log('文字列の10と数値の10は等しい');
// }

// const msg = 18 > 25? '肥満です': '肥満ではありません';
// console.log(msg);

'use strict';

const bmi = window.prompt('BMIの値を入力してください');
const p_element = document.getElementById('message');/*ここでHTMLのidのmessageを書き換える引数となる*/
p_element.textContent = `あなたのBMIは${bmi}です`;

if(bmi > 25){
    p_element.textContent += '肥満です';//HTMLのp要素のテキスト部分だけこの引数となる
}else if(bmi < 18.5){
    p_element.textContent += '低体重です';
}else{
    p_element.textContent += '適正体重です';
}

// const p_element = document.querySelector('p');
// console.log(p_element.textContent);


