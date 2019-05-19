import categoryData from '../helpers/categoriesData';
import type from '../helpers/typesData';

let listOfProducts = [];

// const dropDownBuilder () => {

// }

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
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
const initCategories = () => {
  categoryData.loadCategories()
    .then((resp) => {
      const { categories } = resp.data;
      type.getTypeForEachCategory(categories)
        .then((finalProductList) => {
          listOfProducts = finalProductList;
          productBuilder(listOfProducts);
        });
    })
    .catch(err => console.error('error from your promise', err));
};

export default { initCategories };
