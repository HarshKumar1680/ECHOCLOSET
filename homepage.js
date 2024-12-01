// Load categories and products dynamically
document.addEventListener("DOMContentLoaded", async () => {
    const categoriesContainer = document.querySelector(".grid-cols-6");
    const productsContainer = document.querySelector(".grid-cols-1");
  
    try {
      // Fetch data from JSON
      const response = await fetch("homepage.json");
      const data = await response.json();
  
      // Populate categories
      data.categories.forEach(category => {
        const categoryCard = document.createElement("div");
        categoryCard.className = "category-card";
  
        categoryCard.innerHTML = `
          <img src="${category.image}" alt="${category.name}" class="w-full h-64 object-cover">
          <div class="category-label">${category.name} →</div>
        `;
  
        categoriesContainer.appendChild(categoryCard);
      });
  
      // Populate products
      data.products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card p-4 text-center";
  
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover mb-4">
          <h3 class="text-xl mb-2">${product.name}</h3>
          <p class="price">${product.price}</p>
          <a href="${product.link}" class="shop-now-btn">SHOP NOW</a>
        `;
  
        productsContainer.appendChild(productCard);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });
  
  // Search functionality
  const searchInput = document.querySelector('input[placeholder="Search for Cargo Pants for men"]');
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");
  
    productCards.forEach(card => {
      const productName = card.querySelector("h3").textContent.toLowerCase();
      if (productName.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });