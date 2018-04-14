var mongoose = require("mongoose");
var UserSchema = require("./users.schema.server");
var User = mongoose.model("User", UserSchema);

User.createUser = createUser;
User.findUserById = findUserById;
User.findUserByCredentials = findUserByCredentials;
User.deleteUser = deleteUser;
User.updateUser = updateUser;
User.findUserByUsername = findUserByUsername;
User.findFacebookUser = findFacebookUser;
User.findAll = findAll;

function findAll() {
  return User.find();
}
function findFacebookUser(id) {
  return User.findOne({"facebook.id": id});
}

function findUserById(userId) {
  return User.findById({_id: userId});
}

function findUserByUsername(username) {
  return User.findOne({username: username});
}

function updateUser(userId, user) {
  delete user._id;
  return User
    .update({_id: userId}, {
        $set: {
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone
        }
      }
    );
}


function deleteUser(userId) {
  return User.remove({_id: userId});
}

function findUserByCredentials(username, password) {
  return User.findOne({username: username, password: password});
}

function createUser(user) {
  return User.create(user);
}

module.exports = User;
