import categoryData from '../helpers/categoriesData';
import type from '../helpers/typesData';

// let listOfProducts = [];

// const printToDom = (divId, textToPrint) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML = textToPrint;
// };

// const productBuilder = (array) => {
//   let domString = '';
//   array.forEach((product) => {
//     domString += '<div class="col-3">';
//     domString += `<p>${product.category}`;
//     domString += `<p>${product.type}`;
//     domString += `<p>${product.productName}`;
//     domString += `<p>${product.productDescription}`;
//     domString += '</div>';
//   });
//   printToDom('productsContainer', domString);
// };

// // for each through categories method
// const initCategories = () => {
//   categoryData.loadCategories()
//     .then((resp) => {
//       const { categories } = resp.data;
//       console.error(categories);
//       categories.forEach((category) => {
//         type.getTypeForEachCategory(category.id)
//           .then((productList) => {
//             console.error('look here', productList);
//             productBuilder(productList);
//           });
//       });
//     })
//     .catch(err => console.error('error from load boards', err));
// };


// for each through categories method
const initCategories = () => {
  categoryData.loadCategories()
    .then((resp) => {
      const { categories } = resp.data;
      const categoryNames = [];
      categories.forEach((cat) => {
        const newName = cat.id;
        categoryNames.push(newName);
      });
      type.getTypeForEachCategory(categoryNames);
    })
    .catch('error');
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
