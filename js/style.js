// // ✅ تم تحويل الكود للعمل مع Bootstrap 5 بدون jQuery

// // ✅ Swiper Slider - صور الحجز
// const book_table = new Swiper(".book-table-img-slider", {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   speed: 2000,
//   effect: "coverflow",
//   coverflowEffect: {
//     rotate: 3,
//     stretch: 2,
//     depth: 100,
//     modifier: 5,
//     slideShadows: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// // ✅ Swiper Slider - الفريق
// const team_slider = new Swiper(".team-slider", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   speed: 2000,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1.2,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     992: {
//       slidesPerView: 3,
//     },
//     1200: {
//       slidesPerView: 3,
//     },
//   },
// });

// // ✅ إزالة class عند الضغط على الفلاتر
// const filters = document.querySelectorAll(".filters");
// filters.forEach((filter) => {
//   filter.addEventListener("click", () => {
//     document.getElementById("menu-dish").classList.remove("bydefault_show");
//   });
// });

// // ✅ فلترة قائمة الطعام باستخدام MixItUp (مكتبة خارجية)
// const filterList = {
//   init: function () {
//     mixitup("#menu-dish", {
//       selectors: {
//         target: ".dish-box-wp",
//         filter: ".filter",
//       },
//       animation: {
//         effects: "fade",
//         easing: "ease-in-out",
//       },
//       load: {
//         filter: ".all, .breakfast, .lunch, .dinner",
//       },
//     });
//   },
// };
// filterList.init();

// // ✅ زر فتح/إغلاق القائمة (menu toggle)
// document.querySelector(".menu-toggle")?.addEventListener("click", function () {
//   document.querySelector(".main-navigation")?.classList.toggle("toggled");
// });

// // ✅ غلق القائمة عند الضغط على رابط
// const headerLinks = document.querySelectorAll(".header-menu ul li a");
// headerLinks.forEach((link) => {
//   link.addEventListener("click", function () {
//     document.querySelector(".main-navigation")?.classList.remove("toggled");
//   });
// });

// // ✅ Sticky Header عند Scroll باستخدام GSAP
// if (typeof ScrollTrigger !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
//   const elementFirst = document.querySelector(".site-header");

//   ScrollTrigger.create({
//     trigger: "body",
//     start: "30px top",
//     end: "bottom bottom",
//     onEnter: () => toggleSticky(),
//     onLeaveBack: () => toggleSticky(),
//   });

//   function toggleSticky() {
//     elementFirst?.classList.toggle("sticky_head");
//   }
// }

// // ✅ Parallax Effect
// const scene = document.querySelector(".js-parallax-scene");
// if (scene) {
//   new Parallax(scene);
// }

// // ✅ تفعيل شريط الفلاتر المتحرك بعد تحميل الصفحة بالكامل
// window.addEventListener("load", function () {
//   document.body.classList.remove("body-fixed");

//   const targets = document.querySelectorAll(".filter");
//   let activeTab = 0;
//   let old = 0;
//   let animation;

//   targets.forEach((target, i) => {
//     target.index = i;
//     target.addEventListener("click", moveBar);
//   });

//   gsap.set(".filter-active", {
//     x: targets[0].offsetLeft,
//     width: targets[0].offsetWidth,
//   });

//   function moveBar() {
//     if (this.index !== activeTab) {
//       if (animation && animation.isActive()) {
//         animation.progress(1);
//       }
//       animation = gsap.timeline({ defaults: { duration: 0.4 } });
//       old = activeTab;
//       activeTab = this.index;

//       animation.to(".filter-active", {
//         x: targets[activeTab].offsetLeft,
//         width: targets[activeTab].offsetWidth,
//       });

//       animation.to(
//         targets[old],
//         {
//           color: "#0d0d25",
//           ease: "none",
//         },
//         0
//       );
//       animation.to(
//         targets[activeTab],
//         {
//           color: "#fff",
//           ease: "none",
//         },
//         0
//       );
//     }
//   }
// });
