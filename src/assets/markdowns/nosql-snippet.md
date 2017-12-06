---
title: NoSQL
order: 6
github: https://gist.github.com/ajpawlicki/703b4752aea761faf75e486744e1112e
---

```js
const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/test';

mongoClient.connect(url, function(err, db) {
  console.log('Connected to MongoDB!');

  db.createCollection('demo-collection', function(err, collection) {
    console.log('Created collection');

    const testDocument = {
      name: 'AJ Snow',
      password: '1234'
    };

    collection.insert(testDocument, function(err, docs) {
      console.log('Inserted a document.');

      collection.count(function(err, count) {
        console.log('This collection contains ' + count + ' documents.');
      });

      collection.find().toArray(function(err, documents) {
        documents.forEach(function(document) {
          console.log('Found a document with name = ' + document.name);
        });

        db.close();
        console.log('Closed the connection!');
      });
    });
  });
});
```
