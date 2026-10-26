(function ($) {
  "use strict";

  // Header Sticky
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 120) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });

  // Menu Popup
  $(".menu-popup-close-btn, .navbar-toggler").on("click", function () {
    $(".menu-popup-area, body").toggleClass("active");
  });
  $(".navbar-popup-menu .top button, .navbar-toggler").on("click", function () {
    $(".navbar-popup-menu").toggleClass("active");
  });

  // Odometer JS
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  // Testimonials Slides
  var testimonialsSwiper = new Swiper(".testimonialsSwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var testimonialsSwiperStyleTwo = new Swiper(
    ".testimonialsSwiperStyleTwo .swiper",
    {
      spaceBetween: 25,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    }
  );

  // Feedback Slides
  var feedbackSwiper = new Swiper(".feedbackSwiper .swiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var feedbackSwiperStyleTwo = new Swiper(".feedbackSwiperStyleTwo .swiper", {
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  });

  // Partners Slides
  var partnersSwiper = new Swiper(".partnersSwiper", {
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });
  let partnersSwiperOne = new Swiper(".partnersSwiperOne", {
    loop: false,
    speed: 4000,
    freemode: false,
    spaceBetween: 25,
    simulateTouch: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        spaceBetween: 40,
        slidesPerView: 4,
      },
      1200: {
        spaceBetween: 60,
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 6,
      },
    },
  });
  let partnersSwiperTwo = new Swiper(".partnersSwiperTwo", {
    loop: false,
    speed: 4000,
    freemode: false,
    spaceBetween: 25,
    simulateTouch: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        spaceBetween: 40,
        slidesPerView: 4,
      },
      1200: {
        spaceBetween: 60,
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 6,
      },
    },
  });

  // How We Work Slides
  var howWeWorkSwiper = new Swiper(".howWeWorkSwiper", {
    centeredSlides: true,
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

  // Team Slides
  var teamSwiper = new Swiper(".teamSwiper .swiper", {
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  // scrollCue
  scrollCue.init();

  // Awards On Hover
  $(".single-award:nth-child(2)").hover(function () {
    $(".awards-list-image").toggleClass("hovered2");
  });
  $(".single-award:nth-child(3)").hover(function () {
    $(".awards-list-image").toggleClass("hovered3");
  });

  // Projects On Hover
  $(".projects-circle-list .image:nth-child(2)").hover(function () {
    $(".projects-circle-list").toggleClass("hovered2");
  });
  $(".projects-circle-list .image:nth-child(3)").hover(function () {
    $(".projects-circle-list").toggleClass("hovered3");
  });
  $(".projects-circle-list .image:nth-child(4)").hover(function () {
    $(".projects-circle-list").toggleClass("hovered4");
  });
  $(".projects-circle-list .image:nth-child(5)").hover(function () {
    $(".projects-circle-list").toggleClass("hovered5");
  });

  // Case Studies On Hover
  $(".case-studies-list .item:nth-child(2)").hover(function () {
    $(".case-studies-image .images").toggleClass("hovered2");
  });
  $(".case-studies-list .item:nth-child(3)").hover(function () {
    $(".case-studies-image .images").toggleClass("hovered3");
  });
  $(".case-studies-list .item:nth-child(4)").hover(function () {
    $(".case-studies-image .images").toggleClass("hovered4");
  });

  // Text Animation
  let splitTitleLines = gsap.utils.toArray(".text-animation, .text_animation");
  splitTitleLines.forEach((splitTextLine) => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });
    const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" });
    tl2.from(itemSplitted.lines, {
      duration: 1,
      delay: 0.3,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });

  // On Scroll Font Color Change
  window.onload = () => {
    let scrollTexts = document.querySelectorAll(
      ".on-scroll-font-color-change, .on_scroll_color_change"
    );
    const addSpan = (ele) => {
      const headerText = ele.textContent.trim();
      const words = headerText.split(" ");
      let html = "";
      words.forEach((w) => {
        html += "<span>" + w + "</span> ";
      });
      ele.innerHTML = html;
    };
    const addScrollAnimation = (ele) => {
      window.addEventListener("scroll", (e) => {
        const rect = ele.getBoundingClientRect();
        const top = rect.top; // Distance from the top of the viewport to the top of the element
        const left = rect.left; // Distance from the left of the viewport to the left of the element
        const bottom = rect.bottom; // Distance from the top of the viewport to the bottom of the element
        const right = rect.right; // Distance from the left of the viewport to the right of the element
        const width = rect.width; // Width of the element
        const height = rect.height; // Height of the element
        const scrollPercentage = (top / window.innerHeight) * 100;
        if (scrollPercentage > 0 && scrollPercentage < 100) {
          addChildColorDependsOnPercentage(ele, scrollPercentage);
        }
      });
    };
    const addChildColorDependsOnPercentage = (ele, percentage) => {
      let childs = ele.children;
      let active = (ele.children.length * percentage) / 100;
      let activeIndex = childs.length - active;
      let index = 0;
      for (let index = 0; index < childs.length; index++) {
        if (ele.classList.contains("white-version")) {
          childs[index].style.color =
            index <= activeIndex ? "white" : "rgba(255, 255, 255, 0.30)";
        } else {
          childs[index].style.color =
            index <= activeIndex ? "black" : "rgba(0, 0, 0, 0.30)";
        }
      }
    };
    scrollTexts.forEach((ele) => {
      addSpan(ele);
      addScrollAnimation(ele);
    });
  };

  // Mixitup
  try {
    var mixer = mixitup(".works-shorting", {
      controls: {
        toggleDefault: "none",
      },
    });
  } catch (err) {}

  // Trusted Clients Slides
  var trustedClientsSwiper = new Swiper(".trustedClientsSwiper", {
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        spaceBetween: 25,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 25,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 25,
        slidesPerView: 3,
      },
      992: {
        spaceBetween: 35,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: 35,
        slidesPerView: 4,
      },
      1400: {
        spaceBetween: 35,
        slidesPerView: 4,
      },
    },
  });
  var trustedClientsSwiperTwo = new Swiper(".trustedClientsSwiperTwo", {
    grabCursor: true,
    loop: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        spaceBetween: 25,
        slidesPerView: 2,
      },
      576: {
        spaceBetween: 25,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 25,
        slidesPerView: 4,
      },
      992: {
        spaceBetween: -135,
        slidesPerView: 3,
      },
      1200: {
        spaceBetween: -135,
        slidesPerView: 4,
      },
      1400: {
        spaceBetween: -135,
        slidesPerView: 5,
      },
      1600: {
        spaceBetween: -135,
        slidesPerView: 8,
      },
    },
  });

  // CTA Button Animation
  let typeSplit = new SplitType(".menu_link-text", {
    types: "words, chars",
    tagName: "span",
  });
  function getRandomLetter(length) {
    var result = "";
    var characters = "abcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  $(".char").each(function (index) {
    let text = $(this).text();
    $(this).attr("letter", text);
  });
  $(".menu_link").each(function (index) {
    function resetText() {
      if (myInterval !== undefined) {
        clearInterval(myInterval);
      }
      chars.each(function (index) {
        let letter = $(this).attr("letter");
        $(this).text(letter);
      });
    }
    let myInterval;
    let chars = $(this).find(".char");
    $(this).on("mouseenter", function () {
      let length = chars.length;
      myInterval = setInterval(function () {
        chars.each(function (index) {
          if (index < length) {
            let letter = getRandomLetter(1);
            $(this).text(letter);
          } else {
            let letter = $(this).attr("letter");
            $(this).text(letter);
          }
        });
        length = length - 1;
      }, 100);
      setTimeout(() => {
        resetText();
      }, 400);
    });
    $(this).on("mouseleave", function () {
      resetText();
    });
  });

  // Dev Agency Banner Animation
  let tl = gsap.timeline({
    delay: 0,
  });
  tl.to(".dev-agency-banner-content .h1 div span", {
    duration: 0.5,
    y: 0,
    stagger: 0.3,
  });

  // Projects Tabs Slides
  var getslide = $(".projects-list .project-item").length - 1;
  var slidecal = 30 / getslide + "%";
  $(".project-item").css({ width: slidecal });
  $(".project-item").on("click", function () {
    $(".project-item").removeClass("active");
    $(this).addClass("active");
  });

  // Magnific Popup
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // Awesome Testimonials Slides
  $(".awesome_testimonials_slides").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    animateOut: "fadeOut",
    autoplayHoverPause: true,
    navText: [
      "<i class='ri-arrow-left-up-line'></i>",
      "<i class='ri-arrow-right-up-line'></i>",
    ],
  });

  // Awesome Team Slides
  $(".awesome_team_slides").owlCarousel({
    nav: false,
    loop: true,
    margin: 25,
    dots: false,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='ri-arrow-left-up-line'></i>",
      "<i class='ri-arrow-right-up-line'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  });

  // Case Studies Slides
  $(".case_studies_slides").owlCarousel({
    nav: false,
    loop: true,
    margin: 25,
    dots: false,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='ri-arrow-left-s-line'></i>",
      "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
        center: false,
      },
      1200: {
        items: 3,
        center: false,
      },
      1400: {
        items: 4,
        center: true,
      },
    },
  });

  // Counter Number
  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.innerText, 10);
            let current = 0;
            const duration = 2000; // Adjust total animation duration (in ms)
            const startTime = performance.now();
            function updateCounter(timestamp) {
              const elapsed = timestamp - startTime;
              const progress = Math.min(elapsed / duration, 1);
              counter.innerText = Math.floor(progress * target);
              if (progress <= 1) {
                requestAnimationFrame(updateCounter);
              }
            }
            requestAnimationFrame(updateCounter);
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger when 50% of the element is visible
    document.querySelectorAll(".counter_number").forEach((counter) => {
      counterObserver.observe(counter);
    });
  }

  // Light/Dark Toggle
  const getSwitchToggleID = document.getElementById("light-dark-btn");
  if (getSwitchToggleID) {
    const switchToggle = document.getElementById("light-dark-btn");
    const html = document.documentElement; // Targeting the <html> element
    if (switchToggle) {
      const savedTheme = localStorage.getItem("lunex-light-dark");
      // Apply the saved theme class if it exists
      if (savedTheme) {
        html.classList.add(
          savedTheme === "dark-mode" ? "dark-mode" : "light-mode"
        );
      }
      // Add event listener to switch between themes
      switchToggle.addEventListener("click", () => {
        if (html.classList.contains("dark-mode")) {
          // Switch to light theme
          html.classList.remove("dark-mode");
          html.classList.add("light-mode");
          localStorage.setItem("lunex-light-dark", "light-mode");
        } else {
          // Switch to dark theme
          html.classList.remove("light-mode");
          html.classList.add("dark-mode");
          localStorage.setItem("lunex-light-dark", "dark-mode");
        }
      });
    }
  }

  // Trusted Partner Slides
  $(".trusted_partner_slides").owlCarousel({
    nav: false,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    slideTransition: "linear",
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    navText: [
      "<i class='ri-arrow-left-s-line'></i>",
      "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Services Slides
  $(".services_slides").owlCarousel({
    nav: false,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='ri-arrow-left-s-line'></i>",
      "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });

  // Features List Hover Change Image
  $(".features_list .item").first().addClass("active");
  $(document).on("mouseenter", ".features_list .item", function () {
    $(".features_list .item.active").removeClass("active");
    $(this).addClass("active");
  });
  $(document).on("mouseleave", ".features_list .item", function () {
    $(this).removeClass("active");
    $(".features_list .item").first().addClass("active");
  });

  // Feedback Slides
  $(".feedback_slides").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    animateOut: "fadeOut",
    autoplayHoverPause: true,
    navText: [
      "<i class='ri-arrow-left-up-line'></i>",
      "<i class='ri-arrow-right-up-line'></i>",
    ],
  });

  // Team Tabs Slides
  document.addEventListener("DOMContentLoaded", () => {
    try {
      const slides = document.querySelectorAll(".team_tabs_slides .slide");
      if (slides.length === 0) return; // Avoid running unnecessary logic
      slides.forEach((slide) => {
        slide.addEventListener("click", () => {
          clearActiveClasses();
          slide.classList.add("active");
        });
      });
      function clearActiveClasses() {
        slides.forEach((slide) => slide.classList.remove("active"));
      }
    } catch (error) {
      console.error("Error initializing slide click events:", error);
    }
  });

  // Partners Slides
  $(".partners_slides").owlCarousel({
    nav: false,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='ri-arrow-left-up-line'></i>",
      "<i class='ri-arrow-right-up-line'></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });

  // Testimonials Slides
  $(".testimonials_slides").owlCarousel({
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
    center: true,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      "<i class='ri-arrow-left-up-line'></i>",
      "<i class='ri-arrow-right-up-line'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        center: false,
        items: 2,
      },
      992: {
        items: 2,
        center: true,
      },
      1200: {
        items: 2,
        center: true,
      },
      1400: {
        items: 2,
        center: true,
      },
    },
  });

  // Tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  // Go to Top
  $(function () {
    // Scroll Event
    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 600) $(".back-to-top, .back_to_top").addClass("active");
      if (scrolled < 600) $(".back-to-top, .back_to_top").removeClass("active");
    });
    // Click Event
    $(".go-top, .back-to-top, .back_to_top").on("click", function () {
      $("html, body").animate({ scrollTop: "0" }, 0);
    });
  });

  // Preloader
  $(window).on("load", function () {
    $(".preloader-area").hide();
  });

  // RTL CSS
  $(document).ready(function () {
    // On page load: Check localStorage
    var savedDirection = localStorage.getItem("directionMode");
    if (savedDirection === "rtl") {
      $("#bootstrapStylesheet").attr(
        "href",
        "assets/css/bootstrap.rtl.min.css"
      );
      $("html").attr("dir", "rtl");
    } else {
      $("#bootstrapStylesheet").attr("href", "assets/css/bootstrap.min.css");
      $("html").attr("dir", "ltr");
    }
    // On button click: Toggle and Save to localStorage
    $("#toggleBootstrapDirection").click(function () {
      var currentHref = $("#bootstrapStylesheet").attr("href");
      if (
        currentHref.includes("bootstrap.min.html") &&
        !currentHref.includes("rtl")
      ) {
        // Switch to RTL
        $("#bootstrapStylesheet").attr(
          "href",
          "assets/css/bootstrap.rtl.min.css"
        );
        $("html").attr("dir", "rtl");
        localStorage.setItem("directionMode", "rtl");
      } else {
        // Switch to LTR
        $("#bootstrapStylesheet").attr("href", "assets/css/bootstrap.min.css");
        $("html").attr("dir", "ltr");
        localStorage.setItem("directionMode", "ltr");
      }
    });
  });
})(jQuery);
