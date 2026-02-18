/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_93315167")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3069659470",
    "max": 0,
    "min": 0,
    "name": "question",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2727016084",
    "max": 0,
    "min": 0,
    "name": "option_a",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text998483758",
    "max": 0,
    "min": 0,
    "name": "option_b",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1283758008",
    "max": 0,
    "min": 0,
    "name": "option_c",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select3406851003",
    "maxSelect": 1,
    "name": "correct",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "a",
      "b",
      "c"
    ]
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date1157539242",
    "max": "",
    "min": "",
    "name": "active_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "bool1748787223",
    "name": "published",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_93315167")

  // remove field
  collection.fields.removeById("text3069659470")

  // remove field
  collection.fields.removeById("text2727016084")

  // remove field
  collection.fields.removeById("text998483758")

  // remove field
  collection.fields.removeById("text1283758008")

  // remove field
  collection.fields.removeById("select3406851003")

  // remove field
  collection.fields.removeById("date1157539242")

  // remove field
  collection.fields.removeById("bool1748787223")

  return app.save(collection)
})
