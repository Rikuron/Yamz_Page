// Sample Product Data (for laptops and tech items)
const products = [
  { name: "HP Laptop - Core i7", image: "images/item_laptop.jpg" },
  { name: "Dell XPS 13 - Core i5", image: "images/item_laptop.jpg" },
  { name: "MacBook Air - M2 Chip", image: "images/item_laptop.jpg" },
  { name: "Lenovo ThinkPad - Core i7", image: "images/item_laptop.jpg" },
  { name: "Asus ROG Strix - Gaming Laptop", image: "images/item_laptop.jpg" },
  { name: "Acer Predator Helios - Gaming Laptop", image: "images/item_laptop.jpg" }
];

// Modal elements
const modal = document.getElementById("productModal");
const closeModal = document.querySelector(".close");
const productList = document.getElementById("productList");

// Show modal when "View All Products" is clicked
document.getElementById("viewAllProductsBtn").addEventListener("click", function() {
  // Populate the product list
  productList.innerHTML = products.map(product => `
    <li style="display: flex; align-items: center; margin-bottom: 20px;">
      <img src="${product.image}" alt="${product.name}" style="width: 100px; height: auto; margin-right: 10px;">
      <strong>${product.name}</strong>
    </li>
  `).join('');
  // Display the modal
  modal.style.display = "block";
});

// Close modal when the close button is clicked
closeModal.onclick = function() {
  modal.style.display = "none";
};

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
};
