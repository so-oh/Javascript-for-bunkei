'use strict';

const p = document.getElementById('output'); // 出力用のp要素

// ［表示］ボタンを押したら…
document.querySelector('button').addEventListener('click', () => {
  const text = document.getElementById('textInput');
  p.textContent = text.value; //p要素に出力
  text.value = '入力完了しました'; //フォームの書き換え

  const password = document.getElementById('password');
    p.testContent = password.value; //p要素に出力
    p.appendChild('password');

    const checkbox = document.getElementsByName('abcCheck'); //要素取得
    const values = []; //配列の指定
    for(const box of checkbox){// checkboxを定数boxで見ていく
        if(box.checked == true){ //もしチェックボックスにチェックがしてあったら
            values.push(box.value); //要素のvalueを追加していく
        }
    }
    p.textContent = values; //outputのp要素に表示する

    // const values = Array.from(checkbox) //NodeListを配列に変換
    //     .filter((box) => box.checked == true) //checkがtrueの要素を抽出する
    //     .map((box) => box.value); //valueプロパティの値を新しい配列valueへ追加

    const select = document.querySelector('select');
    p.textContent = select.value;

    // const multiSelect = document.querySelector('select[multiple]');
    // p.textContent = multiSelect.value; //最初の値しか表示されない

    const multiSelect = document.querySelector('select[multiple]');
    const multivalues = [];
    for(const opt of multiSelect.options){
        if(opt.selected == true){
            multivalues.push(opt.value);
        }
    }
    p.textContent = multivalues;

});





