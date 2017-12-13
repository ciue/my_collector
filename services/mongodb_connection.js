const mongoose = require('mongoose');

// 替换 mongoose自带的 mpromise库
mongoose.Promise = Promise;

// 连接到 mongodb
const uri = 'mongodb://localhost:27018/what_i_love';
const db = mongoose.connect(uri, { useMongoClient: true });

db.on('open', () => {
  console.log('db connected');
});

db.on('error', (e) => {
  console.log(e);
});

module.exports = db;
