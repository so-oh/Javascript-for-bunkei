'use strict';

console.log('Hello World!!');

// const p = document.getElementById('p_id');
// console.log(`p.id:${p.id}`);

// console.log(`p.class:${p.class}`);
// console.log(`p.className:${p.className}`);

// //a要素とimg要素のエレメントを取得
// const a = document.getElementById('link');
// const img = a.firstElementChild;

// //属性値を書き換えることもできる
// console.log(`元のリンク先:${a.href}`);
// a.href = 'https://loremflickr.com/320/240/dog';

// //つまり、Javascript側で画像を差し替えることもできる。
// console.log(`元の画像ソース:${img.src}`);
// img.src = 'https://loremflickr.com/320/240/dog';

// //a要素のtarget属性の内容で表示するテキストを場合分け
// let text;
// if(a.target == '_blank'){
//     text = '別のタブで開きます';
// }else{
//     text = '同じタブで開きます';
// }

// //要素textの内容を持ったテキストノードを生成(引数で内容を指定)
// const textNode = document.createTextNode(text);

// //br要素を生成
// const br = document.createElement('br');

// //親要素となるp要素(2つ目のp要素)を呼び出して、上記のノードを子要素として追加
// const p = document.getElementsByTagName('p')[1];//[1]は2つ目のp要素を指している
// p.appendChild(br);
// p.appendChild(textNode);//テキストノードもappendChildできる

//class属性が設定されてない２番目のp要素を取得
// const p = document.querySelectorAll('p')[1];
// console.log(p.className)

// p.className = 'new_class';//class属性を追加/生成

// const a = document.getElementById('link');

// console.log(a.target);

// a.removeAttribute('target');//target属性が削除された

// const a = document.getElementById('link');

// const attrs = a.attributes;//属性一覧を取得

// for(const attr of attrs){
//     console.log(attr);
// }

// console.log(attrs.href);
// console.log(attrs['rel']);

// console.log(attrs.href.name);
// console.log(attrs.href.value);

// attrs.href.value = 'https://loremflickr.com/320/240/dog';

// for(const attr of attrs){
//     console.log(attr.name + ':' + attr.value);
// }

// for(const { name, value} of attrs){
//     console.log(name + ':' + value);
// }

// attrs.removeNamedItem('target');

//p_classを持った要素の２番目を取得
// const p = document.getElementsByClassName('p_class')[1];

// console.log(p.style);

// console.log(p.style.color);
// console.log(p.style.border);

// p.style.color = 'brown';
// p.style.border = 'solid 5px gold';

// p.style.padding = '10px 20px';

//  p.style['background-color'] = 'beige';//ケバブケース→ハイフンが串にみえる

// p.style.backgroundColor = 'beige';//キャメルケース

// const widthArray = [
//     'border-top-width',
//     'border-left-width',
//     'border-bottom-width',
//     'border-right-width'
// ];

// for(let i = 0; i < 4; i++){
//     p.style[widthArray[i]] = i * 2 + 'px';
// }

// const p = document.getElementById('p_id');
// console.log(p.classList);

// // p.className = 'myStyle';

// p.className = 'baseStyle';//classNameプロパティを併用できる。baseStyleは常時適用

// const flag = window.prompt("A,B, or C");//AかBかCを入力させる

// if(flag == 'A'){
//     p.classList.add('p_class');//p_classを追加
// }else if(flag == 'B'){
//     p.classList.add('myStyle');//myStyleを追加
// }

// const p = document.getElementById('p_id');

// if(p.classList.contains('baseStyle') == false){
//     p.classList.add('baseStyle');
// }

// if(p.classList.contains('p_class') == true){
//     // p.classList.remove('p_class');
//     // p.classList.add('baseStyle', 'myStyle');
//     p.classList.replace('p_class', 'baseStyle myStyle');//replaceを使って一行で書き換え
// }

// p.classList.toggle('myStyle');//myStyleクラスがclassListにあれば削除し、なければ追加する

const p = document.getElementById('p_id');

console.log(!true);
console.log(!false);

if(!p.classList.contains('baseStyle')){
    p.classList.add('baseStyle');
}