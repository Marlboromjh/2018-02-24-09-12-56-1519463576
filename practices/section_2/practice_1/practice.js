function count_same_elements(collection) {
  //在这里写入代码
var obj={};
var arr=[];
//遍历数组
for(i=0;i<collection.length;i++){
    //若a中元素第一次出现，则
    if(!obj[collection[i]]){   //a[i]就是对象obj的一个属性，obj[a[i]]就是属性值
        obj[collection[i]]=1;//若第一次出现，次数记为1
    }else{
        obj[collection[i]]++;//次数加1
    }
}
//遍历对象
for(var i in obj){  
   //console.log(i);//json对象的key  
   //console.log(obj[i]);//json对象的值
   arr.push({key:i,count:obj[i]}); 
}  
return arr;
}

module.exports = count_same_elements;
