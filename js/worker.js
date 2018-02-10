self.addEventListener('message', function(e){
  //2147483647
  //引数としてEventオブジェクトを受け取る。
  //e.dataに呼び出し側から渡したデータが入ってくる
  let arg = parseInt(e.data[0]);
  let tmp = ''
  let message = '素数です！';
  
  console.log(e.data[1]);
  
  //素数判定
  for (let cnt = 2; cnt < arg; cnt++) {
    tmp = arg % cnt;
    if (!tmp){
      message = '素数ではありません';
      break;
    }
  }
  self.postMessage(message);
});