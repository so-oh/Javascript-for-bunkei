'use strict';

const list = [
  'images/01.jpg',
  'images/02.jpg',
  'images/03.jpg',
  'images/04.jpg',
  'images/05.jpg',
  'images/06.jpg',
  'images/07.jpg',
  'images/08.jpg',
  'images/09.jpg',
  'images/10.jpg',
];

const img = document.getElementById('main');
const [leftArrow, rightArrow] = document.getElementsByTagName('span');//複数のspanタグを取得

let imgN = 0; //現在のファイル番号

const p = document.createElement('p'); //p要素の生成
p.style.color = 'lightgray'; //p要素の文字色を設定

const div = document.getElementById('photo'); //親要素を取得
div.insertBefore(p, img.nextElementSibling); //p要素の前にimg要素を追加

function setImage(){//関数の定義をする
    img.src = list[imgN]; //src属性の書き換え
    p.textContent = `${imgN + 1} / ${list.length}`; //インデックス数+1分の配列の長さ
}

document.addEventListener('DOMContentLoaded', () => {
    setImage();
});

rightArrow.addEventListener('click', () => {
    imgN++; //インデックスを一つ進めて
    if(imgN >= list.length){//インデックスが配列の長さ以上であれば
        imgN = list.length - 1; //最大のインデックスで固定
    }
    setImage(); 
})

leftArrow.addEventListener('click', () => {
    imgN--;
    if(imgN < 0){
        imgN = 0; //最小のインデックスで固定
    }
    setImage(); 
})

// let count = 0;　//カウント変数の初期化
// document.body.style.color = 'white';

// setInterval(() => { //setInterval関数は,第一引数に指定した関数を第２引数に指定した繰り返し間隔で行う
//     document.body.textContent = count;
//     count ++;
// }, 1000);

// const countID = setInterval(() => {
//     document.body.textContent = count;
//     count++;
//     if(count > 5){
//         clearInterval(countID); //繰り返し停止
//         document.body.textContent += 'stopped!!';
//     }
// }, 1000);

const playButton = document.createElement('button');
playButton.textContent = '自動再生する';
div.appendChild(playButton); //div#photo要素の一番下の子要素にする

let autoplay = false; //初期値をfalseにしておく

playButton.addEventListener('click', () => {
    //変数autoplayがfalseのときだけsetIntervalを呼ぶ
    if(autoplay == false){
        playButton.textContent = '停止する'; //ボタンをトグル
        autoplay = setInterval(() => { //戻り値を受け取る
            imgN++;
            if(imgN >= list.length){
                imgN = 0;
            }
            setImage();
        }, 500);
    }else{
        clearInterval(autoplay);
        autoplay = false; //autoplayを初期状態に戻す
        playButton.textContent = '自動再生する'; //ボタンをトグル
    }
});

// const stopButton = document.createElement('button');
// stopButton.textContent = '停止する';
// div.appendChild(stopButton);

// stopButton.addEventListener('click', () => {
//     clearInterval(autoplay);
//     autoplay = false; //初期値falseに戻す
//     playButton.textContent = '自動再生する';
// });//定数autoplayは定義されておらずエラーとなるため停止しない
// //イベントリスナーは関数なので、定数autoplayは関数ないだけで使えるローカル関数となる

