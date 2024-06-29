const loadCategory = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const categories = data.data; // data.data is an array of objects
    const CatContainer = document.getElementById('category-container');
  
    categories.forEach(category => {
      const button = document.createElement('button');
      button.innerText = category.category; // access the category name
      button.classList.add('btn', 'btn-error');
      CatContainer.appendChild(button);
    });
  };
  loadCategory();

  const loadAllData =async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await res.json();
    const videos = data.data; // data.data is an array of objects
    const videoContainer = document.getElementById('video-container');

    videos.forEach(video => {
      const card = document.createElement('div');
      card.classList.add('card','bg-base-100' ,'w-84', 'shadow-xl');
      card.innerHTML = `
       <div class="">
        <figure>
            <img src="${video.thumbnail}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <div class="flex gap-5">
                <div>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" class="rounded-full w-16 h-16 object-cover overflow-hidden" >
                </div>
                <div class="space-y-2">
                    <h2 class="card-title font-semibold ">${video.title}</h2>
                    <p><span>Awlad Hossain</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-blue-500 inline">
                        <path d="M9 12l2 2 4-4m5-3v9"></path>
                    </svg></p>
                    <p>91k Views</p>
                </div>
            </div>
        </div>
    </div>
      `;
      videoContainer.appendChild(card);

    });
  }
 loadAllData();
   // <img src="${video.thumbnail}" class="card-img-top" alt="...">
        // <div class="card-body">
        //   <h5 class="card-title">${video.title}</h5>
        //   <p class="card-text">${video.description}</p>
        // </div>