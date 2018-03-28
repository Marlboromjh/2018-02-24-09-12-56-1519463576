function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var arr=[];//定义一个空数组接收相同的元素
  for(i=0;i<collection_a.length;i++){
      for(j=0;j<collection_b.length;j++){
         if(collection_a[i]==collection_b[j]){
             arr.push(collection_a[i]);
         } 
      }
  }
  return arr;
}

module.exports = collect_same_elements;
