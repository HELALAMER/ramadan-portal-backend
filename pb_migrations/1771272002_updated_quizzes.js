/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_93315167")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"admin\"",
    "deleteRule": "@request.auth.role = \"admin\"",
    "listRule": "@request.auth.role != \"\"",
    "updateRule": "@request.auth.role = \"admin\"",
    "viewRule": "@request.auth.role != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_93315167")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": "published = true",
    "updateRule": null,
    "viewRule": "published = true"
  }, collection)

  return app.save(collection)
})
