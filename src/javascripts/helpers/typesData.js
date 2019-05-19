import axios from 'axios';
import productsData from './productsData';


const getTypeForEachCategory = categoryList => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const { types } = resp.data;
      const categoriesWithTypes = [];
      categoryList.forEach((cat) => {
        types.forEach((ty) => {
          if (ty.category === cat.id) {
            const newObject = {};
            newObject.categoryId = ty.category;
            newObject.categoryName = cat.name;
            newObject.typeId = ty.id;
            newObject.typeName = ty.name;
            categoriesWithTypes.push(newObject);
          }
        });
      });
      console.error(categoriesWithTypes);
      productsData.getProductsForEachType(categoriesWithTypes)
        .then((productList) => {
          resolve(productList);
        });
    })
    .catch(err => reject(err));
});

export default { getTypeForEachCategory };
