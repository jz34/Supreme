module.exports = function (app) {
  var itemModel = require("../model/item/item.model.server");

  var multer = require('multer');
  var upload = multer({dest: __dirname + '/../../src/assets/uploads'});

  // var baseUrl = "http://localhost:3100"; // for local
  var baseUrl = "https://web-supreme.herokuapp.com";


  app.put("/api/item/:itemId", updateItem);
  app.get("/api/item/:itemId", findItemById);
  app.get("/api/items/:name", findItemByName);
  app.get("/api/category/:category", findItemByCategory);
  app.get("/api/allitem", findAllItem);
  app.post("/api/item", createItem);
  app.delete("/api/item/:itemId", deleteItem);
  app.get("/api/orderhistory/:userId", findItemByBuyerId);
  app.get("/api/salehistory/:userId", findItemBySellerId);
  app.get("/api/sellerlisting/:userId", findSellerListing);
  app.post("/api/upload", upload.single('myFile'), uploadImage);


  function findItemByBuyerId(req, res) {
    var uid = req.params.userId;
    itemModel.findItemByBuyerId(uid)
      .then(function (itemList) {
        res.json(itemList);
      });
  }

  function findItemBySellerId(req, res) {
    var uid = req.params.userId;
    itemModel.findItemBySellerId(uid)
      .then(function (itemList) {
        res.json(itemList);
      });
  }

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
    var itemId = req.params.itemId;
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

  function findSellerListing(req, res) {
    var uid = req.params.userId;
    itemModel.findSellerListing(uid)
      .then(function (itemList) {
        res.json(itemList);
      });
  }


  function uploadImage(req, res) {
    var itemId = req.body.itemId;
    var myFile = req.file;
    var name = req.body.name;
    var color = req.body.color;
    var price = req.body.price;
    var category = req.body.category;
    var itemSize = req.body.size;
    var sellerId = req.body.sellerId;

    if (myFile == null) {
      res.redirect(baseUrl + "/user/seller/new");
      return;
    }

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    if (itemId === '') {
      var url = '/uploads/' + filename;
      var newItem = {_seller: sellerId, name: name, color: color, price: price, url: url, category: category, size: itemSize};
      console.log(newItem);
      itemModel.createItem(newItem).then(function (returnItem) {
        console.log(returnItem._id);
        res.redirect(baseUrl + "/user/seller/item/" + returnItem._id);
      });
    } else {
      var imageUrl = '/uploads/' + filename;
      var item = {_seller: sellerId, name: name, color: color, price: price, url: imageUrl, category: category, size: itemSize};
      itemModel.updateItem(itemId, item).then(function (stats) {
        res.redirect(baseUrl + "/user/seller/item/" + itemId);
      });
    }
  }
};
