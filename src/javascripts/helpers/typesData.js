import axios from 'axios';
import productsData from './productsData';

// const getTypeForEachCategory = categories => new Promise((resolve, reject) => {
//   axios.get('../db/types.json')
//     .then((resp) => {
//       const { types } = resp.data;
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

// new method of foreaching to get big array of objects for each product
const getTypeForEachCategory = categoryId => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const { types } = resp.data;
      const matchingTypes = types.filter(type => type.category === categoryId);
      console.error(matchingTypes);
      matchingTypes.forEach((matchType) => {
        productsData.getProductsForEachType(matchType.id, matchType.category)
          .then((list) => {
            const productList = list;
            resolve(productList);
          });
      });
    })
    .catch(err => reject(err));
});

export default { getTypeForEachCategory };
