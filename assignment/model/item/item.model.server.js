var mongoose = require("mongoose");
var ItemSchema = require("./item.schema.server");
var Item = mongoose.model("Item", ItemSchema);

Item.createItem = createItem;
Item.findItemById = findItemById;
Item.deleteItem = deleteItem;
Item.updateItem = updateItem;
Item.findItemByCategory = findItemByCategory;
Item.findItemByName = findItemByName;
Item.findAll = findAll;

function findAll() {
  return Item.find();
}

function findItemByName(name) {
  return Item.find({name: new RegExp('^'+name+'$',"i")});
}

function findItemById(itemId) {
  return Item.findById({_id: itemId});
}

function findItemByCategory(category) {
  return Item.find({category: category});
}

function updateItem(itemId, item) {
  delete item._id;
  return Item
    .update({_id: itemId}, {
        $set: {
          name: item.name,
          color: item.color,
          price: item.price,
          url: item.url,
          category: item.category,
          size: item.size,
          isRecommended: item.isRecommended
        }
      }
    );
}


function deleteItem(itemId) {
  return Item.remove({_id: itemId});
}

function createItem(item) {
  return Item.create(item);
}

module.exports = Item;
