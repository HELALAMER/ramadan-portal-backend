/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_353513376")

  // update collection data
  unmarshal({
    "createRule": "student = @request.auth.id",
    "deleteRule": "@request.auth.role = \"admin\"",
    "listRule": "student = @request.auth.id || @request.auth.role = \"admin\"",
    "updateRule": "@request.auth.id = \"\"",
    "viewRule": "student = @request.auth.id || @request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_353513376")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
