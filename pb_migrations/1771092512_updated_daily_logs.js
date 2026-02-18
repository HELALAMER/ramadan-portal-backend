/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1245309273")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "bool2200147447",
    "name": "taraweeh",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1245309273")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "bool2200147447",
    "name": "fasting",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
