function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
var arr=[];
for(var i=0;i<collection_a.length;i++){
    //console.log(collection_a[i].key);
    for(var j=0;j<collection_b.value.length;j++){
        if(collection_a[i].key==collection_b.value[j]){
            arr.push(collection_a[i].key);
        }
    }
}
return arr;
}

module.exports = collect_same_elements;
