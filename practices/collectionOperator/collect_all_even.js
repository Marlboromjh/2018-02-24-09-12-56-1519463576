'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var collection_a = [1, 2, 3, 4, 5];
var collect_all_even=[];
for(var i=0;i<collection_a.length;i++){
    if(collection_a[i]%2==0){
        collect_all_even.push(collection_a[i]);
    }
}
  return collect_all_even;
}

module.exports = collect_all_even;
