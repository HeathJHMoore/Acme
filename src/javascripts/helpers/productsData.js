import axios from 'axios';

// const getProductsForEachType = categoriesWithTypes => new Promise((resolve, reject) => {
//   axios.get('../db/products.json')
//     .then((resp) => {
//       const { products } = resp.data;
//       const categoriesWithTypes = categories.map((category) => {
//         const newCategory = category;
//         const matchingTypes = types.filter(type => type.category === category.id);
//         newCategory.types = matchingTypes;
//         return newCategory;
//       });
//       resolve(categoriesWithTypes);
//     })
//     .catch(err => reject(err));
// });

const finalArrayOfProducts = [];

const getProductsForEachType = (typeId, categoryId) => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const { products } = resp.data;
      const productKeys = [];
      products.forEach((eachProduct) => {
        const k = Object.keys(eachProduct);
        const keyName = k[0];
        // console.error(keyName);
        productKeys.push(keyName);
      });
      console.error(productKeys);
      productKeys.forEach((productName) => {
        products.forEach((item) => {
          if (item[productName] !== undefined && item[productName].type === typeId) {
            const newProductObject = {};
            console.error('you found a product', productName, item[productName]);
            newProductObject.category = categoryId;
            newProductObject.type = item[productName].type;
            newProductObject.productName = item[productName].name;
            newProductObject.productDescription = item[productName].description;
            finalArrayOfProducts.push(newProductObject);
          }
        });
      });
      console.error(typeId);
      console.error(finalArrayOfProducts);
      resolve(finalArrayOfProducts);
    })
    .catch(reject);
});


// const finalArrayOfProducts = [];
// let loopIterator = 0;

// const getProductsForEachType = (typeId, categoryId) => new Promise((resolve, reject) => {
//   axios.get('../db/products.json')
//     .then((resp) => {
//       const { products } = resp.data;
//       const productKeys = [];
//       products.forEach((eachProduct) => {
//         const k = Object.keys(eachProduct);
//         const keyName = k[0];
//         // console.error(keyName);
//         productKeys.push(keyName);
//       });
//       productKeys.forEach((productName) => {
//         console.error(productName, loopIterator);
//         products.forEach((item) => {
//           if (item[productName].type !== undefined && item[productName].type === typeId) {
//             const newProductObject = {};
//             console.error('you found a product', productName, item[productName]);
//             newProductObject.category = categoryId;
//             newProductObject.type = item[productName].type;
//             newProductObject.productName = item[productName].name;
//             newProductObject.productDescription = item[productName].description;
//             finalArrayOfProducts.push(newProductObject);
//           }
//         });
//         loopIterator += 1;
//       });
//       console.error(typeId);
//       console.error(finalArrayOfProducts);
//       resolve(products);
//     })
//     .catch(reject);
// });

export default { getProductsForEachType };
