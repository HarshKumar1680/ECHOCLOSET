document.addEventListener("DOMContentLoaded", async () => {
    const categoriesContainer = document.getElementById("categories-container");
  
    try {
      // Fetch categories data from JSON file
      const response = await fetch("explore.json");
      const categories = await response.json();
  
      // Populate categories dynamically
      categories.forEach(category => {
        const categoryCard = document.createElement("div");
        categoryCard.className = "category-card";
  
        categoryCard.innerHTML = `
          <img src="${category.image}" alt="${category.name}">
          <h2>${category.name}</h2>
          <a href="${category.link}">Explore</a>
        `;
  
        categoriesContainer.appendChild(categoryCard);
      });
    } catch (error) {
      console.error("Failed to load categories:", error);
      categoriesContainer.innerHTML = "<p>Error loading categories. Please try again later.</p>";
    }
  });
  