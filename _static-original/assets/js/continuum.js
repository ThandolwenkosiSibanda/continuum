// Continuum additions, loaded after the template's main.js.

// Showcase (projects, services): hovering, focusing or tapping an item in the list
// swaps the preview panel beside it.
document.querySelectorAll(".cc_showcase").forEach(function (root) {
  var items = root.querySelectorAll(".cc_showcase_item");
  var images = root.querySelectorAll(".cc_showcase_img");
  var descs = root.querySelectorAll(".cc_showcase_desc");

  function show(index) {
    [items, images, descs].forEach(function (group) {
      group.forEach(function (el, i) {
        el.classList.toggle("is-active", i === index);
      });
    });
  }

  items.forEach(function (item, i) {
    item.addEventListener("mouseenter", function () {
      show(i);
    });
    item.addEventListener("focus", function () {
      show(i);
    });
    // On touch screens the first tap previews the project; a second tap opens it.
    item.addEventListener("click", function (e) {
      if (!item.classList.contains("is-active")) {
        e.preventDefault();
        show(i);
      }
    });
  });
});

// Footer "Back to top"
document.querySelectorAll(".cc_totop").forEach(function (button) {
  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Work page: filter projects by industry
document.querySelectorAll(".cc_filter").forEach(function (bar) {
  var buttons = bar.querySelectorAll(".cc_filter_btn");
  var items = document.querySelectorAll(".cc_work_item");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");
      buttons.forEach(function (b) {
        b.classList.toggle("is-active", b === button);
      });
      items.forEach(function (item) {
        var show = filter === "All" || item.getAttribute("data-industry") === filter;
        item.classList.toggle("is-hidden", !show);
      });
    });
  });
});
