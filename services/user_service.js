const User = require('../models/mongoose/user');
const Subscription = require('../models/in_memo/subscription');

async function getAllUsers() {
  const users = await User.list();
  // console.log(`What?:${users}`);
  return users;
}

async function addUser(name, age) {
  const created = await User.insert({ name, age });
  return created;
}

async function getOneById(userid) {
  const user = await User.getOneById(userid);
  return user;
}

async function createSubcription(userid, url) {
  if (!User.getOneById(userid)) throw Error('No such user! ');
  const sub = Subscription.insert(userid, url);
  return sub;
}

module.exports = {
  getAllUsers,
  addUser,
  getOneById,
  createSubcription,
};


// module.exports = {
//   getAllUsers: async () => User.list(),
//   addUser: async (firstname, lastname, age) => User.insert(firstname, lastname, age),
//   getOneById: async userid => User.getOneById(userid),
//   createSub: async (userid, url) => createSubcription(userid, url),
// };

