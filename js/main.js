 document.addEventListener("DOMContentLoaded", () => {
     const sidebar = document.getElementById("sidebar");
     const menuBtn = document.getElementById("menuBtn");
     const closeBtn = document.getElementById("closeBtn");

     // فتح القائمة الجانبية
     menuBtn ? .addEventListener("click", () => {
         sidebar.classList.remove("translate-x-full");
         sidebar.classList.add("translate-x-0");
     });

     // إغلاق القائمة الجانبية
     closeBtn ? .addEventListener("click", () => {
         sidebar.classList.add("translate-x-full");
         sidebar.classList.remove("translate-x-0");
     });

     // فتح القائمة الفرعية
     const submenuButtons = document.querySelectorAll(".submenuBtn");
     submenuButtons.forEach((btn) => {
         btn.addEventListener("click", () => {
             const submenuId = "submenu-" + btn.dataset.submenu;
             const submenu = document.getElementById(submenuId);
             submenu.classList.remove("translate-x-full");
             submenu.classList.add("translate-x-0");
         });
     });

     // زر الرجوع في القائمة الفرعية
     const backButtons = document.querySelectorAll(".backBtn");
     backButtons.forEach((btn) => {
         btn.addEventListener("click", () => {
             const submenu = btn.closest("div[id^='submenu-']");
             submenu.classList.remove("translate-x-0");
             submenu.classList.add("translate-x-full");
         });
     });
 });

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

 document.addEventListener("DOMContentLoaded", () => {
     const offers = [{
             image: "assets/images/offers/throat2.svg",
             image2: "assets/images/offers/product3.jpg",
             category: "الحلقان",
             name: "حلق ذهبي دائري",
             price: "500 ر.س",
             oldPrice: "650 ر.س",
         },
         {
             image: "assets/images/offers/product1.jpg",
             image2: "assets/images/offers/chains2.jpg",
             category: "القلادات",
             name: "قلادة ذهبية فاخرة",
             price: "750 ر.س",
             oldPrice: "950 ر.س",
         },
         {
             image: "assets/images/offers/product2.jpg",
             image2: "assets/images/offers/chains.jpg",
             category: "الأساور",
             name: "سوار لؤلؤ أنيق",
             price: "300 ر.س",
             oldPrice: "420 ر.س",
         },
     ];

     let currentOfferIndex = 0;
     const container = document.getElementById("offersContainer");
     const prevBtn = document.querySelector(".offers-prev");
     const nextBtn = document.querySelector(".offers-next");

     function renderOffer(index) {
         const offer = offers[index];
         container.innerHTML = `
    <div class="flex flex-col md:flex-row justify-between items-center font-baloo container mx-auto py-10 gap-6 relative z-10">
      
      <!-- right Side: Large image + countdown -->
      <div class="">
                    <h2 class="text-3xl  text-[#252525] mb-2 text-center">عروض لا تفوتك!</h2>
                    <p class="text-[#252525] mb-6 text-center">لكل مناسبة، لدينا المجوهرات التي تجعلها لا تُنسى</p>
          <div class="relative bg-[#fffaf4] rounded-xl shadow-md md:px-6 px-2 md:pt-6 pt-2 pb-4 mx-6">
                        <div class="bg-white p-4 rounded-lg mb-4">
                            <img src="${
                              offer.image
                            }" alt="حلق" class=" object-contain w-[236px] h-[251px]  md:w-[282px] md:h-[300px]" />
                        </div>

                        <div class="">
                            <div class="flex justify-between">
                                <p class="text-lg text-[#CE9461]  ">${
                                  offer.category
                                }</p>
                                <div class="flex justify-end gap-1 text-amber-400 text-3xl font-bold">
                                    ${"★".repeat(
                                      offer.rating ?? 4
                                    )}${"☆".repeat(5 - (offer.rating ?? 4))}
                                </div>
                            </div>
                            <h3 class="text-lg  text-[#252525] mb-2">${
                              offer.name
                            }</h3>
                            <div class="text-lg">
                                <span class="text-[#B70404] ">${
                                  offer.price
                                }</span>
                                <span class="line-through text-[#25252580]  ml-2">${
                                  offer.oldPrice
                                }</span>
                            </div>
                        </div>
                    </div>
      </div>
      
                    <!-- left Side: Offer Details Card -->



                            <div class="">
                    <img src="${
                      offer.image2
                    }" alt="" class="relative rounded-3xl w-[353px] h-[309px]  md:w-[690px] md:h-[604px]">
                    <div
                        class="grid auto-cols-max grid-flow-col gap-5 text-center absolute bottom-20 md:left-1/4  transform -translate-x-1/4 -translate-y-2/2">
                        <div class="flex gap-2 text-white  text-center text-xl">


                            <div class="flex flex-col items-center">
                                <div
                                    class="bg-white/20 backdrop-blur-md px-4 py-2 md:px-6 md:py-4 rounded-sm text-lg md:text-4xl">
                                    04</div>
                                <span class="mt-1 text-xs md:text-xl text-white">ثانية</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <div
                                    class="bg-white/20 backdrop-blur-md px-4 py-2 md:px-6 md:py-4 rounded-sm text-lg md:text-4xl">
                                    30</div>
                                <span class="mt-1 text-xs md:text-xl text-white">دقيقة</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <div
                                    class="bg-white/20 backdrop-blur-md px-4 py-2 md:px-6 md:py-4 rounded-sm text-lg md:text-4xl">
                                    06</div>
                                <span class="mt-1 text-xs md:text-xl text-white">ساعة</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <div
                                    class="bg-white/20 backdrop-blur-md px-4 py-2 md:px-6 md:py-4 rounded-sm text-lg md:text-4xl">
                                    08</div>
                                <span class="mt-1 text-xs md:text-xl text-white">يوم</span>
                            </div>
                        </div>


                    </div>
                </div>





       
      </div>
    </div>
  `;
     }

     function showPrev() {
         currentOfferIndex = (currentOfferIndex - 1 + offers.length) % offers.length;
         renderOffer(currentOfferIndex);
     }

     function showNext() {
         currentOfferIndex = (currentOfferIndex + 1) % offers.length;
         renderOffer(currentOfferIndex);
     }

     if (prevBtn && nextBtn) {
         prevBtn.addEventListener("click", showPrev);
         nextBtn.addEventListener("click", showNext);
     }

     renderOffer(currentOfferIndex);
 });