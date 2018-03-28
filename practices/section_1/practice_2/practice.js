function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var arr=[];//定义一个空数组接收相同的元素
//遍历collection_a中的每一个元素
for(var i=0;i<collection_a.length;i++){
    //遍历二维数组中的所有值
    /*外层循环遍历行，内层循环遍历列*/
    for(var j=0;j<collection_b.length;j++){
        for(var k=0;k<collection_b[j].length;k++){
            if(collection_a[i]==collection_b[j][k]){
                arr.push(collection_a[i]);//将遍历的元素比较，一样的放入数组arr中
            }
        }
    }
}
console.log(arr);
}

module.exports = collect_same_elements;
