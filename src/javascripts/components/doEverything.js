import categoryData from '../helpers/categoriesData';
import type from '../helpers/typesData';


// const initCategories = () => {
//   category.loadCategories()
//     .then((resp) => {
//       const { categories } = resp.data;
//       console.error(categories);
//       type.getTypeForEachCategory(categories)
//         .then((data) => {
//           console.error(data);
//         });
//     })
//     .catch(err => console.error('error from load boards', err));
// };

// for each through categories method
const initCategories = () => {
  categoryData.loadCategories()
    .then((resp) => {
      const { categories } = resp.data;
      console.error(categories);
      categories.forEach((category) => {
        type.getTypeForEachCategory(category.id);
      });
    })
    .catch(err => console.error('error from load boards', err));
};


// const initCategories = () => {
//   category.loadCategories()
//     .then((resp) => {
//       const { categories } = resp.data;
//       type.getTypeForEachCategory(categories)
//         .then((array) => {
//           const arrayToPrint = array;
//           console.error(arrayToPrint);
//         })
//         .catch(err => console.error('error from load boards', err));
//     });
// };


export default { initCategories };
