import categoryData from '../helpers/categoriesData';
import type from '../helpers/typesData';

let listOfProducts = [];
let categoriesList = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const dropDownBuilder = (arrayOfCategories) => {
  let domString = '';
  domString += '<a id="All" class="dropdown-item" href="#">All</a>';
  arrayOfCategories.forEach((cat) => {
    domString += `<a id="${cat.name}" class="dropdown-item" href="#">${cat.name}</a>`;
  });
  printToDom('categoryMenu', domString);
};

const productBuilder = (array) => {
  let domString = '';
  array.forEach((product) => {
    domString += '<div class="col-3 card productCard d-flex justify-content-center align-items-center">';
    domString += `<p>${product.categoryName}`;
    domString += `<p>${product.typeName}`;
    domString += `<p>${product.productName}`;
    domString += `<p>${product.productDescription}`;
    domString += '</div>';
  });
  printToDom('productsContainer', domString);
};


// for each through categories method
// const initCategories = () => {
//   categoryData.loadCategories()
//     .then((resp) => {
//       const { categories } = resp.data;
//       dropDownBuilder(categories);
//       type.getTypeForEachCategory(categories)
//         .then((finalProductList) => {
//           listOfProducts = finalProductList;
//           productBuilder(listOfProducts);
//         });
//     })
//     .catch(err => console.error('error from your promise', err));
// };


const initCategories = () => {
  categoryData.loadCategories()
    .then((resp) => {
      const { categories } = resp.data;
      categoriesList = categories;
      dropDownBuilder(categories);
    })
    .catch(err => console.error('error from your promise', err));
};

const gatherProducts = (e) => {
  let categoryListToSend = [];
  if (e.target.id === 'All') {
    categoryListToSend = categoriesList;
  } else {
    categoryListToSend = categoriesList.filter(cat => cat.name === e.target.id);
  }
  console.error('this is the list sent', categoryListToSend);
  type.getTypeForEachCategory(categoryListToSend)
    .then((finalProductList) => {
      listOfProducts = finalProductList;
      productBuilder(listOfProducts);
    });
};

export default { initCategories, gatherProducts };
