const inputText = document.querySelector('input[type="text"]');
const btn = document.querySelector('input[type="button"]');
const kekka = document.querySelector('div.kekka');

// console.log(btn);
// console.log(kekka);

//workerをキック
const worker = new Worker('/js/worker.js');

btn.addEventListener('click', function(){
  const val = inputText.value;
  //数字かどうかチェック
  if (parseInt(val)) {
    //複数渡したい場合は配列形式
    worker.postMessage([inputText.value, '倍数算出処理の開始']);
  }
});

//workerからメッセージが返ってきたら実行する
worker.addEventListener('message', function(e){
  console.log(`response：${e.data.toString()}`);
});