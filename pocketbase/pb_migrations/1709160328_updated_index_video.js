/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fjb4xkxlijhm7f3")

  // remove
  collection.schema.removeField("bg3rizrq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vndftkuh",
    "name": "video",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fjb4xkxlijhm7f3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bg3rizrq",
    "name": "video",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("vndftkuh")

  return dao.saveCollection(collection)
})
