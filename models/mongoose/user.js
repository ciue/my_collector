const mongoose = require('mongoose');

// const { Schema } = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, index: 1 },
  age: { type: Number, max: 120, min: 0 },
});

const UserModel = mongoose.model('user', UserSchema, 'users');

async function insert(user) {
  const created = await UserModel.create(user);
  return created;
}

async function getOneById(id) {
  const user = await UserModel.findOne({ _id: id });
  return user;
}

async function getOneByName(name) {
  const user = await UserModel.findOne(name);
  return user;
}

async function list(parames) {
  const match = {};
  const query = UserModel.find(match);
  const user = await query.exec();
  return user;
}

module.exports = {
  insert,
  getOneById,
  getOneByName,
  list,
};
