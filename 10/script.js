'use strict';

const button = document.querySelector('button');
console.log(button);

// button.addEventListener('click', () => {
//     const p = document.getElementById('target');
//     p.classList.toggle('myStyle');
// });

// button.addEventListener('click', () => {
//     const p = document.getElementById('target');
//     p.classList.toggle('newStyle');
// });

// button.addEventListener('mouseenter', () => {
//     const p = document.getElementById('target');
//     p.style.fontSize = '1.5em';
// });

// button.addEventListener('mouseleave', () => {
//     const p = document.getElementById('target');
//     p.style.fontSize = '1em';
// });

const p = document.getElementById('target');

// button.addEventListener('click', () => p.classList.toggle('myStyle'));
// button.addEventListener('click', () => p.classList.toggle('newStyle'));
button.addEventListener('mouseenter', () => p.style.fontSize = '1.5em');
button.addEventListener('mouseleave', () => p.style.fontSize = '1em');

const img = document.querySelector('img');

// img.addEventListener('click', () => {
//     img.src = 'https://github.com/ugok-girls.png';
// });

img.addEventListener('click', (ev) => {
    ev.currentTarget.src = 'https://github.com/ugok-girls.png';
});

img.addEventListener('click', (ev) => {
    console.log(ev.clientX, ev.clientY);//ブラウザ座標系でのクリック位置
});

img.addEventListener('click', (ev) => {
    const p = document.createElement('p');//p要素を作成する

    p.textContent = `X:${ev.offsetX} Y:${ev.offsetY}`;//p要素のtextContentを追加する。offsetは要素座標系(その要素の左上を基準とした座標)

    document.body.insertBefore(p, img.nextElementSibling);//insertbeforeは前に追加エレメント、後に参照エレメントを置いてbodyの先頭要素になる
});

// window.addEventListener('resize', () => {
//     const p = document.getElementById('target');
//     p.style.backgroundColor = 'gold';
// });

const a = document.createElement('a');
a.href = 'https://zenn.dev/ojk';
a.textContent = 'リンク先に飛びます';

const script = document.querySelector('script');
document.body.insertBefore(a, script);

button.addEventListener('click', () => {
    a.textContent = 'リンク先に飛びません';
    a.addEventListener('click', (ev) => {
        ev.preventDefault();//規定動作をブロック
    });
});

document.addEventListener('contextmenu', (ev) => ev.preventDefault());

const letPGold = () => {
    const p = document.getElementById('target');
    p.style.backgroundColor = 'gold';
};

window.addEventListener('resize', letPGold);

button.addEventListener('click', () => {
    window.removeEventListener('resize', letPGold);
    button.disabled = false; //disabledを有効にする
});

button.addEventListener('click', () => {
    const p = document.getElementById('target');
    p.classList.toggle('myStyle');
    p.classList.toggle('newStyle');
}, {once: true}
 );