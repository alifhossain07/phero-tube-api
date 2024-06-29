const loadCategory = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const categories = data.data; // data.data is an array of objects
    const CatContainer = document.getElementById('category-container');
  
    categories.forEach(category => {
      const button = document.createElement('button');
      button.innerText = category.category; // access the category name
      button.classList.add('category-button');
      CatContainer.appendChild(button);
    });
  };
  
  loadCategory();