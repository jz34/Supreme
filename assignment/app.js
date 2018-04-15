module.exports = function(app) {
  require("./services/user.service.server.js")(app);
  require("./services/item.service.server.js")(app);
  require("./model/model.server");
};
