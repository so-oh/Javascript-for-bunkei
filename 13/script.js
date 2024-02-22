'use strict';

const storage = localStorage; //ストレージをlocalStrageへ

const input = document.querySelector('input');    // input要素
const output = document.getElementById('output'); // div#output要素
const submit = document.getElementById('submit'); // button#submit要素

// ［記録］ボタンを押したら…
submit.addEventListener('click', () => {
  output.textContent = input.value; //入力された値を変数表示する
  storage.store = input.value; // 'store'キーに入力値を記録

  input.value = ''; //テキストボックスを空にする
});

document.addEventListener('DOMContentLoaded', () => { //DOMツリーが構築される=ページが読み込まれた時に
  const storagedData = storage.store;
  output.textContent = storagedData;
})

storage.num = 123; // ウェブストレージには'123'として記録される

console.log(typeof storage.num); // → string(文字列)

const num = parseInt(storage.num); //読み込み時に数値に変換する

const remove = document.createElement('button');
remove.textContent = 'ストレージデータを削除';
document.body.insertBefore(remove, output.nextElementSibling);


