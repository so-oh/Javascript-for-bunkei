'use strict';

console.log('Hello World!!');

// const profile = ['OJK', 'A', 165, 52];
// console.log(`血液型：${profile[1]}`);

// const profile = {name: 'OJK', bloodtype: 'A', height: 165, weight: 52};
// console.log(`血液型: ${profile['bloodtype']}`);//各要素のキーワードはインデックス番号と同じとなっている

// const profile = {name: 'OJK'};

// profile.bloodtype = 'A';
// profile['height'] = 165;

// profile.weight = 48;

// // console.log('profile[bloodtype]');

// const obj = {a: 'A', b: 'B',c: 'C'};

// //プロパティ名aを直接指定
// console.log(obj.a);
// console.log(obj['a']);

// //プロパティ名aを定数に指定してから直接代入する
// const prop= 'a';
// console.log(obj.prop);
// console.log(obj[prop]);

// for(const prop in obj){
//     console.log(prop);//プロパティ名のループ
//     console.log(obj[prop]);//要素のループ
// }

// for(const [prop, val] in Object.entries(obj)){
//     console.log(prop);
//     console.log(val);
// }

// const profile = {
//     name: 'OJK',
//     bloodType: 'A',
//     servants: ['犬', '猿', '雉'],
//     style: {height: 165, weight: 52, waist: 76},
// };

// for(const servant of profile.servants){
//     console.log(`家来: ${servant}`);//servantsの要素をループした。servantは中括弧内で使っているローカル変数
// }

// const myStyle = profile.style;//myStyleという変数をprofileのStyleプロパティに定めている
// for(const prop in myStyle){
//     console.log(`${prop} is ${myStyle[prop]}`);//propはStyleプロパティ内の配列のプロパティを指定している。また、for~inなので３属性ループする
// }

// for(const [prop, val] of Object.entries(profile)){//プロパティと値を置き、Object.entriesでprofile配列を指定する
//     if(prop == 'name' ||  prop == 'bloodType'){//profile配列のプロパティがそれぞれ一致してた時のみループ処理に入る
//         console.log(`${prop}は${val}です`);
//     }
// }

// const evList = [
//     { name: 'サンダース', type: 'でんき', weight: 24.5, ability: 'ちくでん' },
//     { name: 'ブースター', type: 'ほのお', weight: 25.0, ability: 'もらいび' },
//     { name: 'エーフィ', type: 'エスパー', weight: 26.5, ability: 'シンクロ' },
//     { name: 'ブラッキー', type: 'あく', weight: 27.0, ability: 'シンクロ' },
//     { name: 'リーフィア', type: 'くさ', weight: 25.5, ability: 'リーフガード' },
//     { name: 'ニンフィア', type: 'フェアリー', weight: 23.5, ability: 'メロメロボディ' },
//     { name: 'グレイシア', type: 'こおり', weight: 25.9, ability: 'ゆきがくれ' },
//     { name: 'シャワーズ', type: 'みず', weight: 29.0, ability: 'ちょすい' },
//   ];

//   for(const ev of evList){
//     console.log(`${ev.name}のタイプは${ev.type}です`);
//   }

//   const nameList = evList.map((ev) => `${ev.name}だぞ`);
//   for(const n of nameList){
//     console.log(n);
//   }

//   const nameList = evList
//     .filter((ev) => ev.weight > 25)//25キロより重い要素を抽出
//     .map((ev) => `${ev.name}(${ev.weight}kg)`);//配列要素の書き換え

//   for(const n of nameList){
//     console.log(n);
//   }

//   evList
//     .filter((ev) => ev.weight > 25)
//     .map((ev) => `${ev.name}(${ev.weight}kg)`)
//     .forEach((ev) => {
//         console.log(ev);
//     });

const table = document.querySelector('table');
const tr = document.createElement('tr');
const th = document.createElement('th');

// th.textContent = '名前';//thの内容を入力

// tr.appendChild(th);//thをtrの子要素にする
// table.appendChild(tr);//trをtableの子要素にする

const header = ['名前', 'タイプ', '体重', '特技'];//表タイトルの配列の設定(header変数は使い捨て)

for (const h of header){
    const th = document.createElement('th');//th要素を作成する
    th.textContent= h;//配列をそれぞれ入れていく
    tr.appendChild(th);//trの子要素としてthを表示する
}

table.appendChild(tr);//tableの子要素としてtrを表示する

const evList = [
    { name: 'サンダース', type: 'でんき', weight: 24.5, ability: 'ちくでん' },
    { name: 'ブースター', type: 'ほのお', weight: 25.0, ability: 'もらいび' },
    { name: 'エーフィ', type: 'エスパー', weight: 26.5, ability: 'シンクロ' },
    { name: 'ブラッキー', type: 'あく', weight: 27.0, ability: 'シンクロ' },
    { name: 'リーフィア', type: 'くさ', weight: 25.5, ability: 'リーフガード' },
    { name: 'ニンフィア', type: 'フェアリー', weight: 23.5, ability: 'メロメロボディ' },
    { name: 'グレイシア', type: 'こおり', weight: 25.9, ability: 'ゆきがくれ' },
    { name: 'シャワーズ', type: 'みず', weight: 29.0, ability: 'ちょすい' },
  ];

//   for(const ev of evList){
//     const tr = document.createElement('tr');
//     const td = document.createElement('td');
    
//     td.textContent = ev.name;
//     tr.appendChild(td);
//     table.appendChild(tr);
//   }

  for(const ev of evList){//evListをevと指定
    const tr = document.createElement('tr');//tr要素を作る
    for(const prop in ev){//evのプロパティをpropと名づける
        const td = document.createElement('td');//td要素を作る
        td.textContent = ev[prop];//要素を入れる
        if(prop == 'weight'){//プロパティが体重になったら
            td.textContent += 'kg';//キログラムを表示に足す
        }
        tr.appendChild(td);//td要素を表示
    }
    table.appendChild(tr);//tr要素を表示
  }