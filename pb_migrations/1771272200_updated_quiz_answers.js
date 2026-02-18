/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_353513376")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\"",
    "listRule": "@request.auth.role = \"admin\" || student = @request.auth.id",
    "viewRule": "@request.auth.role = \"admin\" || student = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_353513376")

  // update collection data
  unmarshal({
    "createRule": "student = @request.auth.id",
    "listRule": "student = @request.auth.id || @request.auth.role = \"admin\"",
    "viewRule": "student = @request.auth.id || @request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
})
