module.exports = function (app) {
  var itemModel = require("../model/item/item.model.server");

  app.put("/api/item/:itemId", updateItem);
  app.get("/api/item/item/:itemId", findItemById);
  app.get("/api/items/:name", findItemByName);
  app.get("/api/items/category/:category", findItemByCategory);
  //app.get("/api/items", findAllItem);
  //app.post("/api/item", createItem);
  //app.delete("/api/item/:itemId", deleteItem);

  function createItem(req, res) {
    var newItem = req.body;
    itemModel.createItem(newItem)
      .then(function (item) {
        res.json(item);
      });
  }

  function deleteItem(req, res) {
    var itemId = req.params["itemId"];
    itemModel.deleteItem(itemId).then(function (item) {
      res.status(200);
    });
  }

  function updateItem(req, res) {
    var itemId = req.params.itemId;
    var item = req.body;
    itemModel.updateItem(itemId, item).then(function (item) {
      res.send(item);
    });
  }

  function findItemById(req, res) {
    var itemId = req.params["itemId"];
    itemModel.findItemById(itemId).then(function (item) {
      res.json(item);
    });
  }

  function findItemByName(req, res) {
    var itemname = req.params.name;
    if (itemname) {
      itemModel.findItemByName(itemname).then(function (item) {
        res.json(item);
      });
    }
  }

  function findItemByCategory(req, res) {
    var category = req.params["category"];
    console.log(category);
    if (category) {
      itemModel.findItemByCategory(category).then(function (item) {
        res.json(item);
      });
    }
  }

  function findAllItem(req, res) {
    itemModel.findAll().then(function (item) {
      res.json(item);
    });
  }
};
