const express = require('express');
const faker = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      categorie: faker.CommerceModule.arguments(),
    }
  ])
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    categorie: faker.CommerceModule.arguments(),
  })
});

router.get('/:categoriesId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json([
    {
      categoryId,
      productId,
    }
  ]);
});

module.exports = router;
