module.exports = function () {
  var models = {
    userModel: require("./users/users.model.server")(),
    itemModel: require("./item/item.model.server")()
  };
  return models;
};
