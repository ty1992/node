var db = require('./index');

/*var arr = [
    {"_id": db.ObjectId("5b880b117d14cc01e4eca116")},
    {"_id": db.ObjectId("5b880b117d14cc01e4eca114")},
    {"_id": db.ObjectId("5b880b117d14cc01e4eca112")}
];


for( var i = 0; i < arr.length; i++ ){
    db.deleteOne('user', 'info1',arr[i],function(str){
        console.log(str);
    })
}*/

/*db.find('user', 'info1', {}, function(result){
    console.log(result);
});*/

/*var arr = [];
for( var i = 0; i < 10; i++ ){
    arr.push({"name":"taoyang" + i });
}*/

/*db.insertOne('user','info1',{"_id":"5b880b117d14cc01e4eca116"},function(result){
    console.log(result.result);
})*/

/*db.insertMany('user','info1',arr,function(result){
    console.log(result);
})*/

/*db.deleteOne('user','info1',{"_id":"5b880b117d14cc01e4eca116"},function(flagStr){
    console.log(flagStr);
})*/



db.find('user','info',{"number": "ty","password": 123},function(result){
    console.log(result);
})