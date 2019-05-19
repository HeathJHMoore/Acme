import axios from 'axios';

const getProductsForEachType = categoriesWithTypes => new Promise((resolve, reject) => {
  const finalArrayOfProducts = [];
  axios.get('../db/products.json')
    .then((resp) => {
      const { products } = resp.data;
      const productKeys = [];
      products.forEach((eachProduct) => {
        const k = Object.values(eachProduct);
        const keyName = k[0];
        // console.error(keyName);
        productKeys.push(keyName);
      });
      categoriesWithTypes.forEach((type) => {
        productKeys.forEach((product) => {
          if (product.type === type.typeId) {
            const newObject = {};
            newObject.categoryId = type.categoryId;
            newObject.categoryName = type.categoryName;
            newObject.typeId = type.typeId;
            newObject.typeName = type.typeName;
            newObject.productId = product.id;
            newObject.productName = product.name;
            newObject.productDescription = product.description;
            finalArrayOfProducts.push(newObject);
          }
        });
      });
      console.error(finalArrayOfProducts);
      resolve(finalArrayOfProducts);
    })
    .catch(reject);
});

export default { getProductsForEachType };
