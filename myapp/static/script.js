let row = document.querySelector(".row")

window.addEventListener("load", fetchProducts);

function fetchProducts() {
  fetch("/products")
    .then((response) => response.json())
    .then((products) => {
      console.log(products);
      row.innerHTML = ""

      products.forEach(product => {
        row.innerHTML += `

        <div class="col-md-4">
          <div class="card">
            <div class="card-img">
              <img src="${product.thumbnail}" alt="">
            </div>
          
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <h5 class="card-title">$${product.discount}</h5>
              <h6 class="card-title" style="text-decoration: line-through">$${product.price}</h6>
            </div>
          </div>
          
          
        </div>
          
        
        `
      })

    })

    .catch((error) => {
      console.log("There was an error fetching the product:", error);
    });
}
