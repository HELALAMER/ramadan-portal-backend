/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.role = \"admin\"",
    "updateRule": "@request.auth.id = id",
    "viewRule": "@request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "listRule": "id = @request.auth.id",
    "updateRule": "id = @request.auth.id &&\n(\n  @request.body.point != null ||\n  @request.body.streak != null\n)",
    "viewRule": "id = @request.auth.id"
  }, collection)

  return app.save(collection)
})
