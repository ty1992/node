const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const ObjectId = require('mongodb').ObjectId;


/*连接数据库*/
function _connect(callback) {
    MongoClient.connect(url,function(err, client){
        if(err){
            console.log('数据库连接失败');
            return;
        }
        callback(client);
    })
}


/*查找方法*/
exports.find = function(dbName, collectionName, json, callback){
    _connect(function(client){
        var db = client.db(dbName);
        db.collection(collectionName).find(json).toArray(function(err, result){
            if (err) {
                console.log(err);
                return;
            }
            callback(result);
            client.close();
        })
    })
};

/*插入一条数据*/
exports.insertOne = function(dbName, collectionName, json, callback){
    _connect(function(client){
        var db = client.db(dbName);
        db.collection(collectionName).insertOne(json,function(err, result){
            if (err) {
                console.log(err);
                return;
            }
            callback(result);
            client.close();
        })
    })
};

/*插入多条数据*/
exports.insertMany = function(dbName, collectionName, arr, callback){
    _connect(function(client){
        var db = client.db(dbName);
        db.collection(collectionName).insertMany(arr,function(err, result){
            if (err) {
                console.log(err);
                return;
            }
            callback(result);
            client.close();
        })
    })
};

/*删除一条数据*/
exports.deleteOne = function(dbName, collectionName, json, callback){
    _connect(function(client){
        var db = client.db(dbName);
        db.collection(collectionName).deleteOne(json,function(err, result){
            var flagStr = '';
            if (err) {
                console.log(err);
                return;
            }
            callback(result);
            client.close();
        })
    })
};


exports.ObjectId = ObjectId;