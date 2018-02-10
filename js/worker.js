self.addEventListener('message', function(e){
  //2147483647
  //75915179
  //引数としてEventオブジェクトを受け取る。
  //e.dataに呼び出し側から渡したデータが入ってくる
  let arg = parseInt(e.data[0]);
  let arr = [];
  //let message = '素数です！';
  console.log(e.data[1]);
  
  //倍数を算出
  for (let cnt = 2; cnt < arg; cnt++) {
    tmp = arg % cnt;
    if (!tmp) {
      arr.push(arg / cnt);
    }
  }
  if (arr.length) {
    self.postMessage('倍数は' + arr.reverse().toString());
  }else{
    self.postMessage('素数です！');
  }
});