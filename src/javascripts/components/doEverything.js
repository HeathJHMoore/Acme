import category from '../helpers/categoriesData';
import type from '../helpers/typesData';


const initCategories = () => {
  category.loadCategories()
    .then((resp) => {
      const { categories } = resp.data;
      console.error(categories);
      type.getTypeForEachCategory(categories);
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
