'use strict';

console.log('Hello World!!');

// const p1 = document.getElementById('dom');
// console.log(p1.textContent);

// const p2 = document.querySelector('p');
// console.log(p2.textContent);

// const lis = document.querySelectorAll('li');
// console.log(lis);

// console.log(lis[0].textContent);
// console.log(lis[1].textContent);
// console.log(lis[2].textContent);

// for (const li of lis){
//     console.log(li.textContent);//→D →Document →
//     li.textContent = 'DOM!!';//HTMLが書き換わる
// }

// const lisArray = Array.from(lis);//NodeListを配列に変換
// const newLis = lisArray.map((li) => li.textContent + '!!');
// console.log(newLis);

// const lis = document.getElementsByTagName('li');
// console.log(lis);

// for(const li of lis){
//     console.log(li.textContent);
// }

// const lisArray = Array.from(lis);//配列に変換
// lisArray.forEach((li) => li.textContent = 'DOM!!');

// const img = document.getElementsByTagName('img')[0];
// console.log(img);

// const ps = document.getElementsByClassName('explain');
// console.log(ps);

// const inputs = document.getElementsByName('dom');
// console.log(inputs);

const a = document.getElementById('link');//a要素
console.log(a);

const p = a.parentElement;//pはaの親要素
console.log(p);

const img = a.firstElementChild;//最初の子要素
console.log(img);

// const ul = document.querySelector('ul');
// console.log(ul.childNodes);

// const ul = document.getElementById('list');//親要素　→ul

// const li1 = ul.firstElementChild; //最初の子要素→ li1
// console.log(li1.textContent);

// const li2 = li1.nextElementSibling; //li1の次の兄弟要素 → li2
// console.log(li2.textContent);

// const li3 = li2.nextElementSibling; //li2の次の兄弟要素 → li3
// console.log(li3.textContent);

// const ul = document.getElementById('list');

// for(let li = ul.firstElementChild; li != null; li = li.nextElementSibling){
//     console.log(li.textContent);
// }

// const newLi = document.createElement('li');
// newLi.textContent = 'DOM!!';

// const li1 = ul.firstElementChild; //ul要素の先頭の子要素

// // ul.appendChild(newLi); //ul要素の最後尾にliエレメントを追加

// ul.insertBefore(newLi, li1); //ul要素の先頭の子要素の手前に挿入

// // const li2 = li1.nextElementSibling;
// // ul.insertBefore(newLi, li2);

// ul.insertBefore(newLi, li1.nextElementSibling);

const ul = document.getElementById('list');

// const li1 = ul.firstElementChild;
// const li2 = li1.nextElementSibling;
// const li3 = li2.nextElementSibling;

// ul.appendChild(li1);//Dが最後尾に来る

// ul.insertBefore(li3, li2);//Oの前にMが来る

// const li1 = ul.firstElementChild;//１番目の子要素
// const newLi = document.createElement('li');//新たなli要素の作成
// newLi.textContent = 'DOM!!';

// ul.replaceChild(newLi, li1);//1番目の子要素と新しい子要素の置換

const li1 = ul.firstElementChild;
const li2 = li1.nextElementSibling;

// ul.removeChild(li1);
li2.remove();

const removedLi1 = ul.removeChild(li1);

removedLi1.textContent = 'Remooooved!!!!';
document.body.appendChild(removedLi1);