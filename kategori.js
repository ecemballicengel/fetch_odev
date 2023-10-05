function apiGetirFunc() {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output =
        "<h1 class='text-center text-danger'>Full Meal</h1><div class='row'>";
      data.categories.map(
        (categories) =>
          (output += `
          
          <div class="col-4">
          <div class="card" style="width: auto">
          <img src="${categories.strCategoryThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Category ID : ${categories.idCategory}</h5>
            <h5 class="card-title">Category: ${categories.strCategory}</h5>
            <p class="card-text">CategoryDescription: ${categories.strCategoryDescription}</p>
            
            
          </div>
          </div>
          </div>
  
  
          `)
      );
      document.getElementById("urunler").innerHTML = output + "</div>";
    });
}

apiGetirFunc();
