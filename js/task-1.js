const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categoties: ${categoriesItems.length}`);


categoriesItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryItemsCount = item.querySelectorAll('ul li').length;
  
    console.log(`Category: ${categoryTitle}`) 
    console.log(`Elements: ${categoryItemsCount}`);
  });