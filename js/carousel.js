new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,
  
  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close");

// Sample data for each service (replace with actual data)
const serviceData = {
    "Sales/Services": 
      "<p style='margin-bottom: 10px;'>Previous sales of tech products, GCash transactions, and more.</p> <img src='images/sales.jpg' alt='Sales/Services' style='max-width: 100%; height: auto;'>",
    "PC Repair & Upgrades": 
      "<p style='margin-bottom: 10px;'>Records of past repair projects and upgrades performed.</p>",
    "Printing/Photocopying Services": 
      "<p style='margin-bottom: 10px;'>Previous high-quality printing and photocopying work.</p>",
    "Laptop Repairs": 
      "<p style='margin-bottom: 10px;'>Recent laptop repair cases handled by our team.</p>",
    "System Formatting/Installation": 
      "<p style='margin-bottom: 10px;'>Formatting and OS installation cases we've completed.</p>",
    "Software Upgrades": 
      "<p style='margin-bottom: 10px;'>Instances of successful software upgrades.</p>",
    "System Development": 
      "<p style='margin-bottom: 10px;'>Custom systems developed for clients in various industries.</p>",
    "CD/DVD Burning": 
      "<p style='margin-bottom: 10px;'>Previous CD/DVD burning projects for clients.</p>",
};

// Open modal on card click
document.querySelectorAll('.card-link').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceTitle = card.querySelector(".badge").textContent.trim();
        modalTitle.textContent = serviceTitle;
        modalBody.innerHTML = serviceData[serviceTitle] || "<p>No data available for this service.</p>";
        modal.style.display = "flex";
    });
});

// Close modal
closeModal.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};