/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1245309273")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_7tLTZ93zW7` ON `daily_logs` (`dayKey`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1245309273")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
