function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  /*for(var prop in collection_b){
    console.log(collection_b[prop]);
}*/
var arr=[];
for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.value.length;j++){
        if(collection_a[i]==collection_b.value[j]){
            arr.push(collection_a[i]);
        }
    }
}
return arr;
}

module.exports = collect_same_elements;
