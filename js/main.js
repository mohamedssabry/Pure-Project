// Mobile sidebar functionality
document.getElementById("menuBtn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("translate-x-full");
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("translate-x-full");
});

// Simple hero section carousel (for demonstration, no actual image change logic)
// You'd typically have an array of images and update the src attribute
// based on prev/next clicks. For now, these buttons are purely illustrative.
document.getElementById("prevBtn").addEventListener("click", function () {
  console.log("Previous button clicked");
  // Add logic to change image/content
});

document.getElementById("nextBtn").addEventListener("click", function () {
  console.log("Next button clicked");
  // Add logic to change image/content
});

// Sidebar functionality
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

if (menuBtn && sidebar && closeBtn) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-full");
    sidebar.classList.add("translate-x-0");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-0");
    sidebar.classList.add("translate-x-full");
  });
}

// Carousel functionality
const carouselContainer = document.getElementById("carousel-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselItems = document.querySelectorAll("[data-carousel-item]");

let carouselIndex = 0; // Keep track of the current active slide

if (carouselContainer && prevBtn && nextBtn && carouselItems.length > 0) {
  // Function to update the carousel's position
  function updateCarousel() {
    // Calculate the translation needed for the current index
    const translateXValue = -carouselIndex * 100; // Move by 100% of the item's width
    carouselContainer.style.transform = `translateX(${translateXValue}%)`;
  }

  // Event listener for the "Next" button
  nextBtn.addEventListener("click", () => {
    carouselIndex = (carouselIndex + 1) % carouselItems.length; // Loop back to the first item
    updateCarousel();
  });

  // Event listener for the "Previous" button
  prevBtn.addEventListener("click", () => {
    carouselIndex =
      (carouselIndex - 1 + carouselItems.length) % carouselItems.length; // Loop back to the last item
    updateCarousel();
  });

  // Initialize carousel position on load
  updateCarousel();
}

const items = [
  { title: "العقود", image: "assets/images/shopopping/necklaces.jpg" },
  { title: "الساعات", image: "assets/images/shopopping/watches.jpg" },
  { title: "الأطقم", image: "assets/images/shopopping/kits.jpg" },
  { title: "الحلقان", image: "assets/images/shopopping/earrings.jpg" },
  { title: "الأساور", image: "assets/images/shopopping/bracelets.jpg" },
];

let currentIndex = 2; // Center card for cards slider

const slider = document.getElementById("slider");

function renderCards() {
  slider.innerHTML = "";

  for (let offset = -2; offset <= 2; offset++) {
    const index = (currentIndex + offset + items.length) % items.length;
    const item = items[index];

    // Add transition for tilt effect
    const transitionDuration = "0.9s";
    const transitionTiming = "cubic-bezier(0.8, 0, 0.6, 1)";

    const card = document.createElement("div");
    card.className =
      "card rounded-xl flex-shrink-0 overflow-hidden bg-white/10 backdrop-blur-md text-center text-white";

    // Responsive width and height
    const isMobile = window.innerWidth <= 640;
    if (isMobile) {
      card.style.width = offset === 0 ? "220px" : "180px";
      card.style.height = offset === 0 ? "340px" : "300px";
    } else {
      card.style.width = offset === 0 ? "300px" : "270px";
      card.style.height = offset === 0 ? "510px" : "500px";
    }

    card.style.transition = `transform ${transitionDuration} ${transitionTiming}, width ${transitionDuration} ${transitionTiming}, height ${transitionDuration} ${transitionTiming}`;

    if (offset === 0) card.classList.add("active");
    else if (offset < 0) card.classList.add("tilt-left");
    else card.classList.add("tilt-right");

    card.innerHTML = `
        <div class="relative w-full h-full flex flex-col justify-end">
        <img src="${item.image}" alt="${item.title}" class="absolute inset-0 w-full h-full object-cover rounded-xl z-0">
        <div class="relative z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent px -4 rounded-b-xl flex flex-col items-center">
          <div class="text-lg font-bold mb-2">${item.title}</div>
          <a href="#" class="text-white underline text-base ">تسوق الان</a>
        </div>
        </div>
      `;

    slider.appendChild(card);
  }
}

function next() {
  currentIndex = (currentIndex + 1) % items.length;
  renderCards();
}

function prev() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  renderCards();
}

renderCards();

function toggleAccordion(clickedElement) {
  const allItems = document.querySelectorAll("#accordion .accordion-item");

  allItems.forEach((item) => {
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".icon");

    // Close all
    content.classList.add("hidden");
    icon.src = "assets/images/QA/+.svg";
  });

  const content = clickedElement.nextElementSibling;
  const icon = clickedElement.querySelector(".icon");

  // Open if not already open
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.src = "assets/images/QA/-.svg";
  } else {
    content.classList.add("hidden");
    icon.src = "assets/images/QA/+.svg";
  }
}

const products = [
  {
    image: "assets/images/shopopping/bracelets.jpg",
    category: "الحلقان",
    name: "حلق ذهبي دائري",
    price: "500 ر.س",
    oldPrice: "650 ر.س",
  },
  {
    image: "assets/images/shopopping/bracelets.jpg",
    category: "القلادات",
    name: "قلادة ذهبية فاخرة",
    price: "750 ر.س",
    oldPrice: "950 ر.س",
  },
  {
    image: "assets/images/shopopping/bracelets.jpg",
    category: "الأساور",
    name: "سوار لؤلؤ أنيق",
    price: "300 ر.س",
    oldPrice: "420 ر.س",
  },
];

let currentIndex2 = 0;

function renderProduct() {
  const product = products[currentIndex2];
  const content = `
      <div class="bg-white p-4 rounded-lg mb-4">
        <img src="${product.image}" alt="${product.name}" class="object-contain" />
      </div>

      <div>
        <div class="flex justify-between">
          <p class="text-lg text-[#CE9461]">${product.category}</p>
          <div class="flex justify-end gap-1 text-amber-400 text-3xl font-bold">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
        <h3 class="text-lg text-[#252525] mb-2">${product.name}</h3>
        <div class="text-lg">
          <span class="text-[#B70404]">${product.price}</span>
          <span class="line-through text-[#25252580] ml-2">${product.oldPrice}</span>
        </div>
      </div>
    `;
  document.getElementById("product-content").innerHTML = content;
}

function nextProduct() {
  currentIndex2 = (currentIndex2 + 1) % products.length;
  renderProduct();
}

function prevProduct() {
  currentIndex2 = (currentIndex2 - 1 + products.length) % products.length;
  renderProduct();
}

document.addEventListener("DOMContentLoaded", renderProduct);
