'use strict'

const texts = [ // 画像の配列
'コンビニ',
'マック',
'千吉',
'料理倶楽部'
];

class Panel {
  constructor() {
    const section = document.createElement('section'); // section要素を生成
    section.classList.add('panel'); // panelクラスをつける

    this.text = document.createElement('p'); // プロパティとして設定
    this.text.textContent = this.getRandomText(); // ここではとりあえずseven.jpgに設定
    this.text.classList.add('text');
    this.timeoutId = undefined; // 返り値用に用意 初期値はundefinedで良い
    this.stop = document.createElement('div'); // プロパティとして設定
    this.stop.textContent = 'STOP'; // テキストをSTOPに設定
    this.stop.classList.add('stop'); // STOPクラスを追加

    this.stop.addEventListener('click', () => { // 「STOP」ボタンのイベント追加
      clearTimeout(this.timeoutId); // this.timeoutIdを受け取ってそれを止める
    });
    section.appendChild(this.text); // Sectionの子要素として追加
    section.appendChild(this.stop); // Sectionの子要素として追加

    const slot = document.querySelector('.slot'); // mainを取得
    slot.appendChild(section); // main内に追加
  }
  getRandomText() {
    return texts[Math.floor(Math.random() * texts.length)]; // 配列imagesからランダムにイメージを取得
  }

  spin() { // spinをクリックされたら
    this.text.textContent = this.getRandomText(); // getRandomImage()を実行
    this.timeoutId = setTimeout(() => { // ランダム表示処理を繰り返す
      this.spin();
    }, 50); // とりあえず600ミリ秒ごとで
  }
}
const panels = [ // インスタンス生成
    new Panel()
  ];

  const spin = document.getElementById('spin'); // id="spin"取得
  spin.addEventListener('click', () => { // クリックイベント追加
    panels.forEach(panel => { // 配列panelsを回して
      panel.spin(); // panelクラス内のspin()を実行
    });
  });



