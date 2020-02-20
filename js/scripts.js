$(document).ready(function() {
  var top_menu = $(".top-menu-wrapp"),
    top_menu_pos = $(".top-menu-wrapp").offset().top,
    header_top = $("#header"),
    windowEl = $(window),
    windowW = windowEl.width(),
    active = "active",
    open = "open";

  if (windowW > 769) {
    windowEl.scroll(function() {
      if (windowEl.scrollTop() >= top_menu_pos * 2) {
        top_menu.addClass("fixed");
        header_top.addClass("fixed");
      } else {
        top_menu.removeClass("fixed");
        header_top.removeClass("fixed");
      }
    });
  } else {
    windowEl.scroll(function() {
      if (windowEl.scrollTop() >= top_menu_pos) {
        top_menu.addClass("fixed");
        header_top.addClass("fixed");
      } else {
        top_menu.removeClass("fixed");
        header_top.removeClass("fixed");
      }
    });
  }

  $(".home-slider").slick({
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    dotsClass: "container home-slider-dots",
    autoplay: true,
    autoplaySpeed: 2000
  });

  if (windowW <= 991) {
    $(".services-items").addClass("services-slider");
  }
  $(".services-slider").slick({
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    dotsClass: "container home-slider-dots",
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });

  //sub-menu
  $(".top-menu-item-link").on("click", function(event) {
    if ($(this).hasClass("is-menu-active")) {
      $(".top-menu-item-link").removeClass("is-menu-active");
      $(".top-menu-item-link")
        .closest(".top-menu-item-drop-down")
        .removeClass("is-menu-active");
      $(this).removeClass("is-menu-active");
      $(this)
        .closest(".top-menu-item-drop-down")
        .removeClass("is-menu-active");
      $(".submenu-catalog-close").removeClass("is-active");
    } else {
      $(".top-menu-item-link").removeClass("is-menu-active");
      $(".top-menu-item-link")
        .closest(".top-menu-item-drop-down")
        .removeClass("is-menu-active");
      $(this).addClass("is-menu-active");
      $(this)
        .closest(".top-menu-item-drop-down")
        .addClass("is-menu-active");
      if (
        $(".submenu-catalog-close")
          .closest(".top-menu-item-drop-down")
          .children(".top-menu-item-link")
          .hasClass("is-menu-active")
      ) {
        $(".submenu-catalog-close").addClass("is-active");
      }
    }
  });
  $(".submenu-catalog-close").on("click", function(event) {
    $(".top-menu-item-link").removeClass("is-menu-active");
    $(".top-menu-item-drop-down").removeClass("is-menu-active");
    $(".top-menu-item-style").removeClass("is-sub-menu-active");
    $(".submenu-item").removeClass("is-sub-menu-active");
    $(".inside-menu-title").removeClass("is-active");
    $(".inside-menu-block").removeClass("is-active");
    $(this).removeClass("is-active");
  });

  $(".top-menu-item-style").on("click", function(event) {
    if ($(this).hasClass("is-sub-menu-active")) {
      $(".top-menu-item-style").removeClass("is-sub-menu-active");
      $(".top-menu-item-style")
        .closest(".submenu-item")
        .removeClass("is-sub-menu-active");
      $(this).removeClass("is-sub-menu-active");
      $(this)
        .closest(".submenu-item")
        .removeClass("is-sub-menu-active");
    } else {
      $(".top-menu-item-style").removeClass("is-sub-menu-active");
      $(".top-menu-item-style")
        .closest(".submenu-item")
        .removeClass("is-sub-menu-active");
      $(this).addClass("is-sub-menu-active");
      $(this)
        .closest(".submenu-item")
        .addClass("is-sub-menu-active");
    }
  });
  $(".inside-menu-title").on("click", function(event) {
    if ($(this).hasClass("is-active")) {
      $(".inside-menu-title").removeClass("is-active");
      $(".inside-menu-title")
        .closest(".inside-menu-block")
        .removeClass("is-active");
      $(this).removeClass("is-active");
      $(this)
        .closest(".inside-menu-block")
        .removeClass("is-active");
    } else {
      $(".inside-menu-title").removeClass("is-active");
      $(".inside-menu-title")
        .closest(".inside-menu-block")
        .removeClass("is-active");
      $(this).addClass("is-active");
      $(this)
        .closest(".inside-menu-block")
        .addClass("is-active");
    }
  });

  //burger-menu

  $(".burger-menu").on("click", function(event) {
    event.preventDefault();
    $(".top-menu-item").toggleClass("is-active");
    $(".burger-menu").toggleClass("is-active");
    $(".header-menu").toggleClass("is-active");
    $(".search").toggleClass("is-active");
    if ($("#header").hasClass("fixed")) {
      $(".top-menu-wrapp").toggleClass("scroll");
    }
  });

  // filter popap start
  $(".products-filter-btn-mobile").on("click", function() {
    $(".products-filters").toggleClass("is-active");
    $(".products-filter-fon").toggleClass("is-active");
  });
  $(".products-filter-fon").on("click", function() {
    $(".products-filters").toggleClass("is-active");
    $(".products-filter-fon").toggleClass("is-active");
  });
  $(".btn-close").on("click", function() {
    $(".products-filters").toggleClass("is-active");
    $(".products-filter-fon").toggleClass("is-active");
  });
  // filter popap end

  $(".contacts-btn").on("click", function() {
    $(".pop-up-wrapp").addClass(open);
  });

  $(".pop-up-cross").on("click", function() {
    $(".pop-up-wrapp").removeClass(open);
  });

  let product_btn = $(".product-info-more");
  product_btn.on("click", function() {
    event.preventDefault();
    $(".hide").toggleClass("is-active");
    if ($(this).text() == "Смотреть всё") {
      $(this).text("Скрыть");
    } else {
      $(this).text("Смотреть всё");
    }
  });

  let about_btn = $(".about-btn"),
    about_descr_block = $(".about-descr");

  about_btn.on("click", function() {
    event.preventDefault();
    if (!$(this).hasClass(active)) {
      $(this)
        .addClass(active)
        .siblings()
        .removeClass(active);
    }
    about_descr_block.each((index, about_descr) => {
      if ($(this).attr("data-id") == $(about_descr).attr("data-id")) {
        $(about_descr)
          .addClass(active)
          .siblings()
          .removeClass(active);
      }
    });
  });

  let portfolio_btn = $(".portfolio-btn"),
    portfolio_items_block = $(".portfolio-items");

  portfolio_btn.on("click", function() {
    event.preventDefault();
    if (!$(this).hasClass(active)) {
      $(this)
        .addClass(active)
        .siblings()
        .removeClass(active);
    }
    portfolio_items_block.each((index, about_descr) => {
      if ($(this).attr("data-id") == $(about_descr).attr("data-id")) {
        $(about_descr)
          .addClass(active)
          .siblings()
          .removeClass(active);
      }
    });
  });

  // catalog_sidebar

  let catalog_nav_btn = $(".catalog-nav-btn"),
    catalog_items_block = $(".catalog-wrapp");

  catalog_nav_btn.on("click", function() {
    event.preventDefault();
    if (!$(this).hasClass(active)) {
      $(".catalog-nav-btn").removeClass(active);
      $(this).addClass(active);
    }
    catalog_items_block.each((index, item) => {
      if ($(this).attr("data-id") == $(item).attr("data-id")) {
        $(item)
          .addClass(active)
          .siblings()
          .removeClass(active);
      }
    });
  });


  let catalog_sidebar = $(".catalog-sidebar-link");
  catalog_sidebar.on("click", function() {
    event.preventDefault();
  });

  let contacts_map_city = $(".contacts-map-city");
  let contacts_map_city_img = $(".contacts-map-city-img");

  contacts_map_city.on("click", function() {
    contacts_map_city.removeClass(active);
    contacts_map_city_img.removeClass("visible");
    $(this)
      .siblings(contacts_map_city_img)
      .toggleClass("visible");
    $(this).toggleClass(active);
  });
  // catalog_sidebar
  // test search
  $(".search-input").on("click", function() {
    $(".search-list").toggleClass(open);
  });
});

// Start custom select
let select = function() {
  let selectHeader = document.querySelectorAll(".contacts-city-header");
  let selectItem = document.querySelectorAll(".contacts-city-item");

  selectHeader.forEach(item => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }
  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".contacts-city-wrapp"),
      currentText = select.querySelector(".contacts-city-current");
    currentText.innerText = text;
    select.classList.remove("is-active");
    select.classList.add("selected");
  }
};

select();

// End custom select
