
var carousel = new bootstrap.Carousel((document.querySelector("#myCarousel")), {
  interval: 5000,
  wrap: false,
});


window.addEventListener("DOMContentLoaded", () => {




  //TITLE-PAGE CAROUSEL BG
 

  // TITLE-PAGE LETTER-SYMBOLS ANIMATION
  let symbolItems = document.querySelectorAll(".symbol-item"),
  earth=document.querySelector('.earth');
  let hideLetters = function () {
    symbolItems.forEach((item, i) => {
      if (i % 2 === 0) {
        item.classList.add("slide-left");
      } else {
        item.classList.add("slide-right");
      }
      console.log(i);
    });
  };
  let showLetter = function (item) {
    item.classList.remove("slide-left");
    item.classList.remove("slide-right");
  };
  let showLetters = function () {
    let i = 0;
    let delay = `${i + 3}00`;
    let letTimer = setTimeout(function timerLet() {
      do {
        showLetter(symbolItems[i]);
        i++;
        letTimer = setTimeout(timerLet, delay);
      } while (i === symbolItems.length);
    }, delay);
    setTimeout(function(){
      earth.classList.remove('earth-slide-top');
    },3000); 
  };
  hideLetters();
  showLetters();
  
  //COL-SLIDE
  let colSlides = document.querySelectorAll(".col-slide");
  window.addEventListener("scroll", checkCols);
  checkCols();
  function checkCols() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    colSlides.forEach((colSlide) => {
      const colSlideTop = colSlide.getBoundingClientRect().top;
      if (colSlideTop < triggerBottom) {
        colSlide.classList.add("shown");
      }
    });
  }
});

//SHOW-HIDE COLLECTION-ITEMS FUNCTIONS
let hideCollectionItem = function (items, i) {
  items[i].classList.add("hide");
  items[i].classList.remove("show", "fade");
};
let hideItem = function (item) {
  item.classList.add("hide");
  item.classList.remove("show", "fade");
};
let hideAllCollectionItems = function (items) {
  items.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show", "fade");
  });
};
let showCollectionItem = function (items, i) {
  items[i].classList.remove("hide");
  items[i].classList.add("show", "fade");
};
let showAllCollectionItems = function (items) {
  items.forEach((item) => {
    item.classList.remove("hide");
    item.classList.add("show", "fade");
  });
};
let showItem = function (item) {
  item.classList.add("show", "fade");
  item.classList.remove("hide");
};

//START-PAGE
let body = document.querySelector("body"),
mainContentTabs = document.querySelectorAll(".main-content");
hideAllCollectionItems(mainContentTabs);
showCollectionItem(mainContentTabs, 0);

//HEADER-HALFS & UP-BUTTON ONSCROLL
let header = document.querySelector("header"),
    headerHalfs = document.querySelectorAll(".header-half"),
    nav = document.querySelector(".nav"),
    navToggler = document.getElementById("nav-toggle");

window.onscroll = function () {
  headerHalfs.forEach((item, i) => {
    if (window.pageYOffset > 300) {
      if (i == 0) {
        item.classList.add("header-half-slide-left");
      } else {
        item.classList.add("header-half-slide-right");
      }
      header.classList.add("header-slide-top");
    } else {
      item.classList.remove("header-half-slide-left");
      item.classList.remove("header-half-slide-right");
      header.classList.remove("header-slide-top");
    }
  });

 /*  upButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
  upButton.addEventListener("touchstart", () => {
    window.scrollTo(0, 0);
  }); */
};

//SIGN-UP & LOGIN
/* let headerLogin = document.querySelector(".header-login"),
    signUpBtn = document.querySelector(".sign-up-btn"),
    loginBtn = document.querySelector(".login-btn"),
    modalValidation = document.querySelector(".modal-validation"),
    modalLogin = document.querySelector(".modal-login");

    hideItem(modalValidation);

function showModal(event,btn1,btn2,modal1,modal2){
  let target = event.target;
  if (target === btn1) {
    showItem(modal1);
  } else if (target === btn2) {
    showItem(modal2);
  }
}
headerLogin.addEventListener("click", (event) => {
  showModal(event,signUpBtn,loginBtn,modalValidation,modalLogin);
});
headerLogin.addEventListener("touchstart", (event) => {
  showModal(event,signUpBtn,loginBtn,modalValidation,modalLogin);
}); */


//NAV & MENU & BURGER 
let headerMenu = document.querySelector(".header-menu"),
    burgerMenu = document.querySelector(".burger-menu"),
    footerMenu = document.querySelector(".footer-menu"),
    burgerMenuLinks = document.querySelectorAll(".burger-menu-link"),
    headerMenuLinks = document.querySelectorAll(".header-menu-link"),
    footerMenuLinks = document.querySelectorAll(".footer-menu-link");
    
let menuUse = function (arr, target) {
  arr.forEach((arrItem, i) => {
    arrItem.classList.remove("active");
    if (arrItem === target) {
      hideAllCollectionItems(mainContentTabs);
      arr[i].classList.add("active");
      showCollectionItem(mainContentTabs, i);
      if (arr == burgerMenuLinks) {
        navToggler.checked = false;
      }
    }
  });
};

headerMenu.addEventListener("click", (event) => {
  let target = event.target;
  menuUse(headerMenuLinks, target);
});
burgerMenu.addEventListener("click", (event) => {
  let target = event.target;
  menuUse(burgerMenuLinks, target);
});
footerMenu.addEventListener("click", (event) => {
  let target = event.target;
  menuUse(footerMenuLinks, target);
});
headerMenu.addEventListener("touchstart", (event) => {
  let target = event.target;
  menuUse(headerMenuLinks, target);
});
burgerMenu.addEventListener("touchstart", (event) => {
  let target = event.target;
  menuUse(burgerMenuLinks, target);
});
footerMenu.addEventListener("touchstart", (event) => {
  let target = event.target;
  menuUse(footerMenuLinks, target);
});

//FIND-TRIP-BUTTON
let findTripBtn = document.querySelector(".find-trip-btn");
let findTrip = function () {
  hideAllCollectionItems(mainContentTabs);
  showCollectionItem(mainContentTabs, 1);
  headerMenuLinks.forEach((headerMenuLink) => {
    headerMenuLink.classList.remove("active");
    headerMenuLinks[1].classList.add("active");
  });
  burgerMenuLinks.forEach((burgerMenuLink) => {
    burgerMenuLink.classList.remove("active");
    burgerMenuLinks[1].classList.add("active");
  });
};
findTripBtn.addEventListener("click", () => {
  findTrip();
});
findTripBtn.addEventListener("touchstart", () => {
  findTrip();
});

//GROUP-TRIP-BTN
let groupTripBtn = document.getElementById("group-trip-btn");
groupTripBtn.addEventListener("click", () => {
  findTrip();
});
groupTripBtn.addEventListener("touchstart", () => {
  findTrip();
});

//IND-TRIP-BTN ANIMATION
const plane = document.querySelector(".plane"),
      indTripBtn = document.getElementById("individual-trip-btn");

indTripBtn.addEventListener("click", () => {
  plane.classList.add("plane-move");
});
indTripBtn.addEventListener("touchstart", () => {
  plane.classList.add("plane-move");
});

////FILTER-TOURS

let toursSection = document.querySelector(".tours-section"),

  toursListTitle = document.querySelector(".tours-list-country-title"),

  tourListItems = document.querySelectorAll(".tours-list-item"),
  tourListLinks = document.querySelectorAll(".tours-list-link"),

  toursFiltersList = document.querySelector(".tours-filters-list"),
  toursFilters = document.querySelectorAll(".tour-filter"),

  destinationSelect = document.getElementById("select-destination"),
  durationSelect = document.getElementById("select-duration"),
  typeSelect = document.getElementById("select-type"),
  priceRange = document.getElementById("priceRange"),

  destinations = document.querySelectorAll(".destination-item"),
  types = document.querySelectorAll(".tour-type"),
  durations = document.querySelectorAll(".duration-value");

tourListItems.forEach((tourListItem, i) => {
  if (i % 2 == 0) {
    tourListItem.classList.add("col-slide-right", "shown");
  } else {
    tourListItem.classList.add("col-slide-left", "shown");
  }
});

//SLIDE-HIDE
let slideCollectionItem = function (items, i) {
  items[i].classList.add("hide");
  items[i].classList.remove("shown", "fade");
};
let slideItem = function (item) {
  item.classList.add("hide");
  item.classList.remove("shown", "fade");
};
let slideAllCollectionItems = function (items) {
  items.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("shown", "fade");
  });
};
let showSlideCollectionItem = function (items, i) {
  items[i].classList.remove("hide");
  items[i].classList.add("shown", "fade");
};
let showSlideAllCollectionItems = function (items) {
  items.forEach((item) => {
    item.classList.remove("hide");
    item.classList.add("shown", "fade");
  });
};
let showSlideItem = function (item) {
  item.classList.add("shown", "fade");
  item.classList.remove("hide");
};

//TOUR-INFO FOR FILTER
let toursInfo4Filter = [];
let tour;
let getToursValues = function () {
  tourListLinks.forEach((tourListLink, i) => {
    tour = {
      id: i,
      dest: tourListLink.dataset.destination,
      dur: tourListLink.dataset.duration,
      countriesnum: tourListLink.dataset.countriesnum,
      countries: tourListLink.dataset.countries,
      type: {
        bus: tourListLink.dataset.typebus,
        avia: tourListLink.dataset.typeavia,
      },
      price: tourListLink.dataset.price,
    };
    toursInfo4Filter.push(tour);
  });
  console.log(toursInfo4Filter);
  return toursInfo4Filter;
};
getToursValues();

//FILTERFORM ACTIVE VALUES
let filtersValues;
let getFiltersValues = function (target) {
  toursFilters.forEach((toursFilter) => {
    if (target === toursFilter) {
      filtersValues = {
        dest: destinations[destinationSelect.selectedIndex].value,
        dur: durations[durationSelect.selectedIndex].value,
        type: {
          bus: types.selectedIndex,
        },
        price: priceRange.value,
      };
      console.log(filtersValues);
      return filtersValues;
    }
  });
};

//SHOW FILTERED TOURS
let showTour = function (toursInfo4Filter, filtersValues) {
  console.log(filtersValues);
  toursListTitle.textContent = "";
  for (let i = 0; i < toursInfo4Filter.length; i++) {
    if (destinationSelect.selectedIndex > 0) {
      if (filtersValues.dest == toursInfo4Filter[i].dest) {
        toursListTitle.textContent = filtersValues.dest;
        if (durationSelect.selectedIndex == 0) {
          showSlideCollectionItem(tourListItems, i);
        } else {
          if (filtersValues.dur == toursInfo4Filter[i].dur) {
            toursListTitle.textContent = `${filtersValues.dest} ${filtersValues.dur}-days tours`;
            showSlideCollectionItem(tourListItems, i);
          }
        }
      }
    } else if (durationSelect.selectedIndex == 0) {
      showSlideCollectionItem(tourListItems, i);
    } else if (filtersValues.dur == toursInfo4Filter[i].dur) {
      toursListTitle.textContent = `All ${toursInfo4Filter[i].dur}-days tours`;
      showSlideCollectionItem(tourListItems, i);
    }
  }
};
toursFiltersList.addEventListener("change", (event) => {
  let target = event.target;
  getFiltersValues(target);
  slideAllCollectionItems(tourListItems);
  showTour(toursInfo4Filter, filtersValues);
});

//TOUR CARD
let toursList = document.querySelector(".tours-list"),
  toursListSection = document.querySelector(".tours-list-section"),
  toursListImgs = document.querySelectorAll(".tours-list-link-img");
function showTourCard(target) {
  tourListLinks.forEach((tourListLink, i) => {
    if (target == tourListLink) {
      let tourFlags=tourListItems[i].querySelectorAll('.tour-country-flags-flag');
      let tourCardFlags=document.createElement('div');
      for(let n=0;n<tourFlags.length;n++){
        let tourCardFlag=document.createElement('div');
        tourCardFlag.classList.add('tour-card-flag','m-1','border','border-1','shadow-lg');
        tourCardFlag.innerHTML=`<a class="tour-card-flag-link" href="#">
        <img src=${tourFlags[n].currentSrc} class="p-1"></a>`;
        tourCardFlags.append(tourCardFlag);
      }      

      let tourCardGallery=`<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="" class="d-block w-100" alt="#">
        </div>
        <div class="carousel-item">
          <img src="" class="d-block w-100" alt="#">
        </div>
        <div class="carousel-item">
          <img src="" class="d-block w-100" alt="#">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> 
`;

      let tourCard = document.createElement("div");
      tourCard.classList.add("tour-card", "container", "fade");
      tourCard.innerHTML = `
      <div class="tour-card-content row flex-wrap mt-3 text-white">
      <div class="divider"></div>
      <div class="tour-card-name col-12 col-md-8 col-lg-8 mx-lg-auto mx-md-auto">
          <div class="container-fluid">
            <img src="${toursListImgs[i].currentSrc}" class="card-img text-center " alt="#">
            <div class="card-img-overlay d-flex flex-column align-items-center p-1">
              <p class="tour-card-title text-center text-capitalize mt-5">${tourListLink.dataset.tourname}</p> 
            </div>
          </div>
      </div>

      <div class="divider"></div>
      <div class="col-12 col-md-8 col-lg-8 mx-lg-auto mx-md-auto">
                 <div class="tour-card-flags d-flex justify-content-evenly align-items-center">
                  ${tourCardFlags.innerHTML}
                 </div>
               </div>
      <div class="tour-card-map col-12 p-3 p-md-4 p-lg-5">
        <div class="tour-card-info-block mb-5 col-slide col-slide-right">
          <p class="h3 block-title mb-3 p-2 pt-3 text-center border-bottom border-1">
            Route map
          </p>
          <div class="card-map d-flex justify-content-center align-items-center mb-3">
            <iframe   src="https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d5253059.749807001!2d8.70547054014988!3d49.993161012334696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e0!4m5!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!3m2!1d49.839683!2d24.029716999999998!4m5!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdywg0J_QvtC70YzRiNCw!3m2!1d50.064650099999994!2d19.9449799!4m5!1s0x4709cf29101ad6a9%3A0x421b1cb4288feb0!2zRHJlc2Rlbiwg0JPQtdGA0LzQsNC90LjRjw!3m2!1d51.0504088!2d13.737262099999999!4m5!1s0x47e974334a533b09%3A0x40a5fb99a3b45c0!2zUmVpbXMsINCk0YDQsNC90YbQuNGP!3m2!1d49.258328999999996!2d4.031696!4m5!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2zUGFyaXMsINCk0YDQsNC90YbQuNGP!3m2!1d48.856614!2d2.3522219!5e0!3m2!1sru!2sua!4v1661845906507!5m2!1sru!2sua"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <div class="tour-card-short-descr col-12 p-3 p-md-4 p-lg-5">
        <div class="tour-card-info-block mb-5 col-slide col-slide-right">
          <p class="h3 block-title mb-3 p-2 pt-3 text-center border-bottom border-1">
            Tour description
          </p>
          <p class="card-text mb-3 p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae atque hic eaque natus? Officiis porro illo minima animi! Fugiat quia illum numquam qui et possimus obcaecati, molestias quam doloremque nostrum!
          </p>
        </div>
      </div>

      <div class="col-12">
        <div class="container-fluid">
          <div class="row row-cols-md-2 row-cols-lg-2">
            <div class="col p-3 p-md-4 p-lg-5">
              <div class="tour-card-info-block mb-5 col-slide col-slide-right">
                <p class="h3 block-title mb-3 p-2 pt-3 text-center border-bottom border-1">
                Countries visited:
                </p>
                <div class="info-list d-flex justify-content-center  p-1 m-0">
                <div class="info-item p-1">
                    <a href="#" class="fs-3 info-link  text-white text-decoration-none mx-auto">
                      country
                    </a>
                  </div>
                  <div class="info-item p-1">
                    <a href="#" class="fs-3 info-link text-white text-decoration-none">
                      country
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="col p-3 p-md-4 p-lg-5">
              <div class="tour-card-info-block mb-5 col-slide col-slide-right">
                <p class="h3 block-title mb-3 p-2 pt-3 text-center border-bottom border-1">
                  Available dates:
                </p>
                <div class="info-list d-flex justify-content-center  p-1 m-0">
                  <div class="info-item text-white p-1">
                    <a href="#" class="fs-3 info-link  text-white text-decoration-none mx-auto">
                      <time datetime="2001-05-15 19:00">15.05</time>
                    </a>
                  </div>
                  <div class="info-item text-white p-1">
                    <a href="#" class="fs-3 info-link  text-white text-decoration-none mx-auto">
                      <time datetime="2001-07-25 18:00">25.07</time>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="container-fluid">
          <div class="row row-cols-md-2 row-cols-lg-2">
            <div class="col p-3 p-md-4 p-lg-5">
              <div class="tour-card-info-block mb-5 col-slide col-slide-right">
                <p class="h3 block-title mb-3 p-2 pt-3 text-center border-bottom border-1">
                  Duration:
                </p>
                <div class="info-list d-flex justify-content-center  p-1 m-0">
                <div class="info-item text-white p-1">
                <a href="#" class="fs-3 info-link  text-white text-decoration-none mx-auto">
                  ${tourListLink.dataset.duration} days
                </a>
              </div>
                </div>
              </div>
            </div>
            <div class="col p-3 p-md-4 p-lg-5">
              <div class="tour-card-info-block mb-5 col-slide col-slide-right">
                <p class="h3 block-title mb-3 p-2 pt-3 text-center border-bottom border-1">
                  Tour type:
                </p>
                <div class="info-list d-flex justify-content-center  p-1 m-0">
                  <div class="info-item text-white p-1">
                    <a href="#" class="fs-3 info-link  text-white text-decoration-none mx-auto">
                      ${tourListLink.dataset.type}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="tour-card-gallery col-12 my-3">
       ${tourCardGallery}
     </div>
     
     <div class="divider"></div>

      <div class="tour-card-program col-12 ">
        <div class="tour-program-title bg-info my-3 p-1 text-uppercase">
          <p class="block-title p-2 text-center">
          Tour program
          </p>
        </div>
        
        <div class="tour-card-program-days px-lg-5 py-2">
          <div class="accordion accordion-flush" id="tour-program-accordion">
         
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="tour-card-included col-12 col-md-6 col-lg-4 my-3 py-3 text-white">
        <div class="included-title bg-success m-0 p-1 text-uppercase">
          <p class="block-title p-2 text-center">
            Included:
          </p>
        </div>
        <ul class="px-lg-5 py-2">
          <li class="included-item fs-6 p-1">
            ${tourListLink.dataset.duration} nights in hotels 3*;
          </li>
          <li class="included-item fs-6 p-1">
            BB (bed & breakfast);
          </li>
          <li class="included-item fs-6 p-1">
            Transit along the route;
          </li>
          <li class="included-item fs-6 p-1">
            Excursions according to the program;
          </li>
          <li class="included-item fs-6 p-1">
            Accompanied by an enchanting guide;
          </li>
        </ul>
      </div>
   
      <div class="tour-card-notincluded col-12 col-md-6 col-lg-4 my-3 py-3 text-white">
        <div class="not-included-title bg-danger m-0 p-1 text-uppercase">
          <p class="block-title p-2 text-center ">
            Not included:
          </p>
        </div>
        <ul class="px-lg-5 py-2">
          <li class="not-included-item fs-6 p-1">
            Transit to Lviv;
          </li>
          <li class="not-included-item fs-6 p-1">
            Medical insurance;
          </li>
          <li class="not-included-item fs-6 p-1">
            Entry tickets, extra paid excursions;
          </li>
          <li class="not-included-item fs-6 p-1">
            City-TAX, radio-guide system;
          </li>
          <li class="not-included-item fs-6 p-1">
            Single accomodation;
          </li>
        </ul>
      </div>
   
      <div class="tour-card-additional col-12 col-md-6 col-lg-4  my-3 py-3 text-white m-auto">
        <div class="additional-info-title m-0 p-1 bg-secondary text-uppercase">
          <p class="block-title p-2 text-center">
            Additional info
          </p>
        </div>
        <ul class="px-lg-5 py-2">
          <li class="children-discount fs-6 p-1">
            Discount for children under 12, travelling with 2
            adults-30euro;
          </li>
          <li class="join-group fs-6 p-1">
            It is possible to join group along the route:
          </li>
        </ul>
      </div>
      <div class="divider"></div>
      <div class="tour-card-reviews col-12">
        <div class="tour-card-reviews-list card-group">
          <div class="tour-card-review-item col col-md-6 col-lg-4 card p-2 bg-dark">
            <img src="..." class="card-img-top" alt="..." height="150">
            <div class="tour-card-review-content card-body">
              <p class="tour-card-review-tour card-title">Review tour name
                <small class="text-muted">
                  <time datetime="2001-05-15 19:00">15 May</time>
                </small>
              </p>
              <p class="tour-card-review-text card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="tour-card-review-footer card-footer d-flex gap-5">
              <p class="tour-card-review-client card-title">Clients name</p>
              <small class="text-muted">Clients age</small>
            </div>
          </div>
        
          <div class="tour-card-review-item col col-md-6 col-lg-4 card p-2 bg-dark">
            <img src="..." class="card-img-top" alt="..." height="150">
            <div class="tour-card-review-content card-body">
              <p class="tour-card-review-tour card-title">Review tour name
                <small class="text-muted">
                  <time datetime="2001-05-15 19:00">15 May</time>
                </small>
              </p>
              <p class="tour-card-review-text card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="tour-card-review-footer card-footer d-flex gap-5">
              <p class="tour-card-review-client card-title">Clients name</p>
              <small class="text-muted">Clients age</small>
            </div>
          </div>
      
          <div class="tour-card-review-item col col-md-6 col-lg-4 card p-2 bg-dark">
            <img src="..." class="card-img-top" alt="..." height="150">
            <div class="tour-card-review-content card-body">
              <p class="tour-card-review-tour card-title">Review tour name
                <small class="text-muted">
                  <time datetime="2001-05-15 19:00">15 May</time>
                </small>
              </p>
              <p class="tour-card-review-text card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="tour-card-review-footer card-footer d-flex gap-5">
              <p class="tour-card-review-client card-title">Clients name</p>
              <small class="text-muted">Clients age</small>
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="tour-card-booking-section col-12  my-3 py-3 text-white">
        <div class="row">
          <div class="col-6">
            <div class="m-0 p-1 bg-danger text-uppercase">
              <p class="h3 block-title p-2 te2 pt-3t-center ">
                Need more details?
              </p>
            </div>
            <div class="consult-btn text-center">
              <a class="btn btn-success fs-2 my-3">
                <span>Consult</span>
                <svg class="p-1 phone phone-call-link phone-call bg-danger"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="m-0 p-1 bg-success text-uppercase">
              <p class="h3 block-title p-2 te2 pt-3t-center  w-100">
                Made Your choise?
              </p>
            </div>
            <div class="booking-btn text-center">
              <a class="btn btn-danger fs-2 my-3">
                Book tour
              </a>
            </div>
          </div>
        </div>
      </div>

      </div>`;


      tourListItems.forEach((tourListItem) => {
        tourListItem.classList.remove("shown");
      });
      toursListSection.prepend(tourCard);
      let infoBlocks = tourCard.querySelectorAll(".tour-card-info-block");
      infoBlocks.forEach((item, j) => {
        setTimeout(showSlideItem(item), 2000);
      });
      let tourProgramDays = document.getElementById("tour-program-accordion");
      for (
        let daysNum = 1;
        daysNum <= tourListLink.dataset.duration;
        daysNum++
      ) {
        let tourProgramDay = document.createElement("div");
        tourProgramDay.classList.add("accordion-item", "mb-1");
        tourProgramDay.innerHTML = `
      <h2 class="accordion-header" id="heading_${daysNum}">
        <button class="accordion-button btn-sm bg-secondary text-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse_${daysNum}" aria-expanded="false" aria-controls="flush-collapse_${daysNum}">
          Day ${daysNum}
        </button>
      </h2>
      <div id="flush-collapse_${daysNum}" class="accordion-collapse collapse" aria-labelledby="heading_${daysNum}" data-bs-parent="#tour-program-accordion">
      <div class="accordion-body">Some text description text about that day</div>
      </div>`;
        tourProgramDays.append(tourProgramDay);
      }
    }
  });
}
toursListSection.addEventListener("click", (event) => {
  let target = event.target;
  showTourCard(target);
  toursFiltersList.classList.add('hide');
});

//COUNTRIES
let flags = [
    "icons/countries-icons/albania.webp",
    "icons/countries-icons/andorra.webp",
    "icons/countries-icons/austria.webp",
    "icons/countries-icons/belarus.webp",
    "icons/countries-icons/belgium.webp",
    "icons/countries-icons/france.webp",
    "icons/countries-icons/germany.webp",
    "icons/countries-icons/hungary.webp",
  ],
  countriesBGs = [
    "img/countries-info/tour-card-bgs/albania.jpg",
    "img/countries-info/tour-card-bgs/andorra.jpg",
    "img/countries-info/tour-card-bgs/austria.jpg",
    "img/countries-info/tour-card-bgs/belarus.jpg",
    "img/countries-info/tour-card-bgs/belgium.jpg",
    "img/countries-info/tour-card-bgs/france.jpg",
    "img/countries-info/tour-card-bgs/germany.jpg",
    "img/countries-info/tour-card-bgs/hungary.jpg",
  ],
  names = [
    "Albania",
    "Andorra",
    "Austria",
    "Belarus",
    "Belgium",
    "France",
    "Germany",
    "Hungary",
  ],
  populations = [
    "2 793 592",
    "82 887",
    "8 923 507",
    " 9 255 524",
    "11 521 238",
    "66 218 000",
    "85 887 000",
    " 9 705 000",
  ],
  languages = [
    "albanian",
    "catalanian",
    "austrian",
    "belarussian, russian",
    "french, dutch",
    "french",
    "german",
    "hungarian",
  ],
  cities = [
    "Tirana",
    "Andorra-la-Vellia",
    "Wien, Salzburg, Graz",
    "Minsk, Brest",
    "Bruccels, Brugge, Antverpen",
    "Paris ,Leon ,Nice, Bordeaux",
    "Berlin, Munich, Koln",
    "Budapest, Gyor",
  ],
  wellKnowns = [
    "Voldemort",
    "Andura",
    "Mozart",
    "Lukashenko",
    "Leopold",
    "Napoleon",
    "Otto von Bismark, Anhela Merkel",
    "Ferens List",
  ],
  currencies = [
    "euro",
    "euro",
    "euro",
    "bel rub",
    "euro",
    "euro",
    "euro",
    "forint, euro",
  ],
  histories = [
    "Albania, country in southern Europe, located in the western part of the Balkan Peninsula on the Strait of Otranto, the southern entrance to the Adriatic Sea. The capital city is Tirana (Tiranë).",
    "Andorra, small independent European coprincipality situated among the southern peaks of the Pyrenees Mountains and bounded by France to the north and east and by Spain to the south and west. It is one of the smallest states in Europe. The capital is Andorra la Vella.",
    "Austria, largely mountainous landlocked country of south-central Europe. Together with Switzerland, it forms what has been characterized as the neutral core of Europe, notwithstanding Austria’s full membership since 1995 in the supranational European Union (EU).",
    "Belarus, country of eastern Europe. Until it became independent in 1991, Belarus, formerly known as Belorussia or White Russia, was the smallest of the three Slavic republics included in the Soviet Union (the larger two being Russia and Ukraine).",
    "Belgium, country of northwestern Europe. It is one of the smallest and most densely populated European countries, and it has been, since its independence in 1830, a representative democracy headed by a hereditary constitutional monarch. Initially, Belgium had a unitary form of government. In the 1980s and ’90s, however, steps were taken to turn Belgium into a federal state with powers shared among the regions of Flanders, Wallonia, and the Brussels-Capital Region.",
    "France, officially French Republic, French France or République Française, country of northwestern Europe. Historically and culturally among the most important nations in the Western world, France has also played a highly significant role in international affairs, with former colonies in every corner of the globe.",
    "Germany, country of north-central Europe, traversing the continent’s main physical divisions, from the outer ranges of the Alps northward across the varied landscape of the Central German Uplands and then across the North German Plain.",
    "Hungary, Hungarian Magyarország, landlocked country of central Europe. The capital is Budapest.",
  ],
  AlbaniaPOI = [
    [
      "The clock tower was built by the Ottoman Turks in an Islamic style and with simply a bell from Venice",
      "img/countries-info/POIs/albania/Clock_Tower.jpg",
    ],
  ],
  AndorraPOI = [
    [
      "La Noblesse du Temps is right at the center of Andoora la Vella and a great spot to take a photo to remember your trip to Andorra.",
      "img/countries-info/POIs/andorra/la-noblesse-du-temps.jpg",
    ],
  ],
  AustriaPOI = [
    [
      "The beautiful historic center of Vienna is worth a visit. While riding tours allow you to see some great sights in Vienna, a walk through this area is recommended to see the detail of the lovely architecture and statues.",
      "img/countries-info/POIs/austria/wien.jpg",
    ],
    [
      "You can certainly walk the historic city of Salzburg and take in all the sights",
      "img/countries-info/POIs/austria/salzburg.jpg",
    ],
    [
      "Breathtaking views of the Alps and the charming town of Hallstatt.",
      "img/countries-info/POIs/austria/hallstatt.jpg",
    ],
  ],
  FrancePOI = [
    [
      "Bypass the long lines at the Eiffel Tower with this tour that includes summit access. After fast track, skip-the-line access, proceed to the second level to survey the city from the viewing platforms while listening to commentary about Paris culture, traditions, and history.",
      "img/countries-info/POIs/france/Eiffel.jpg",
    ],
    [
      "Indulge your inner romantic on an atmospheric evening cruise down the Seine and see the City of Lights at its most magical. Dine on a decadent 4-course dinner, accompanied by live music on-board, as you float past illuminated landmarks like the Louvre, Notre Dame Cathedral, and the Eiffel Tower.",
      "img/countries-info/POIs/france/Sena.jpg",
    ],
    [
      "Prepare to be inspired by some of the world’s most famous artists as you step inside the iconic Louvre Museum. Head straight to the front of the queue with skip-the-line entrance, then journey through art history on a private tour.",
      "img/countries-info/POIs/france/Louvre.jpg",
    ],
  ],
  GermanyPOI = [
    [
      "The towering Cologne Cathedral (Kölner Dom), the Cathedral of St. Peter and St. Mary, is located on the banks of the Rhine and is undoubtedly Cologne's most impressive landmark. This masterpiece of High Gothic architecture is one of the largest cathedrals in Europe.",
      "img/countries-info/POIs/germany/cologne-cathedral.jpg",
    ],
    [
      "The quaint old town of Füssen, situated between the Ammergau and Allgäu Alps and a popular alpine resort and winter sports center, is a good base from which to explore nearby Neuschwanstein Castle. This spectacular old fortress is widely recognized as one of Europe's most famous and picturesque royal castles.",
      "img/countries-info/POIs/germany/castle-neuschwanstein.jpg",
    ],
    [
      "In the heart of the historic Port of Hamburg, the magnificent Miniatur Wunderland, the world's largest model railway, is an attraction that appeals equally to young and old alike.",
      "img/countries-info/POIs/germany/historic-port-hamburg.jpg",
    ],
  ],
  HungaryPOI = [
    [
      "A 90-minute drive from Budapest, the freshwater Lake Balaton stretches for 77km making it Europe’s largest lake and earning it a reputation as Hungary’s ocean. It’s skirted by pretty villages, each with a distinct ambiance. Siófok is known as Balaton’s party capital, while the quiet beaches of Tihany offer an idyllic escape from it all.",
      "img/countries-info/POIs/hungary/lake-balaton.png",
    ],
    [
      "Budapest’s thermal bath culture is one of the capital city’s major draws. However, it’s a mere glimpse of what’s on offer further afield. Heviz is home to one of the world’s largest thermal lakes, with the water averaging at a toasty year-round temperature of 31oC.",
      "img/countries-info/POIs/hungary/hévíz-lake.png",
    ],
  ],
  BelarusPOI = [
    [
      "Your visit to Minsk is not complete if you don't have a picture of you taken in front of the gates.",
      "img/countries-info/POIs/belarus/minsk__gates.jpg",
    ],
  ],
  BelgiumPOI = [
    [
      "The Grand Place is truly that... it was wonderful to be here - easily spent an hour or two just wandering around, observing, sitting with a coffee. Really magnificent and well worth the visit to Brussels for.",
      "img/countries-info/POIs/belgium/grand-place.jpg",
    ],
    [
      "Ghent City Centre is a delight and compact enough to see all the main sights on foot.",
      "img/countries-info/POIs/belgium/gent.jpg",
    ],
    [
      "You are able to take a breather, if the person behind you is patient, and the stairs can be steep in sections.",
      "img/countries-info/POIs/belgium/brugge.jpg",
    ],
  ],
  countriesPOIs = [
    AlbaniaPOI,
    AndorraPOI,
    AustriaPOI,
    BelarusPOI,
    BelgiumPOI,
    FrancePOI,
    GermanyPOI,
    HungaryPOI,
  ],
  AlbaniaSouvenirs = [
    [
      "Miniature Bunker Ashtray",
      "img/countries-info/souvenirs/albania/miniature-bunker-ashtray.jpg",
    ],
  ],
  AndorraSouvenirs = [
    [
      "You can find custom designed pieces with Tahitian pearls, and he also is exclusive distributor for outstanding Faberge",
      "img/countries-info/souvenirs/andorra/champagne.jpg",
    ],
  ],
  AustriaSouvenirs = [
    [
      "Crystal products from Swarovski are considered as a treasure of Austria, extremely famous all over the world, more popular than gold and second only to diamonds.",
      "img/countries-info/souvenirs/austria/svarovski.jpg",
    ],
    [
      "Austria is a famous country when it comes to owning many cafes with delicious flavors.",
      "img/countries-info/souvenirs/austria/austrian-coffee.jpg",
    ],
    [
      "At the Augarten porcelain factory, ceramic lovers from all over the world will find the perfect display for their beloved home or elegant tableware for the perfect dinner party.",
      "img/countries-info/souvenirs/austria/Porcelain.jpg",
    ],
  ],
  BelarusSouvenirs = [
    [
      "Souvenirs from straws are very popular in Belarus. They give coziness and in the cold season remind us of the warm sun",
      "img/countries-info/souvenirs/belarus/suvenir_solomka.jpg",
    ],
  ],
  BelgiumSouvenirs = [
    [
      "Bringing back chocolate from Belgium is an obvious choice, so if you’re going to pick up a box, you’ll want something rare and unexpected.",
      "img/countries-info/souvenirs/belgium/choclate.jpg",
    ],
  ],
  FranceSouvenirs = [
    [
      "For centuries France has been the main manufacturer of the most famous perfumes throughout history. From Chanel to Christian Dior and Estee Lauder, French perfume formulas have conquered the world.",
      "img/countries-info/souvenirs/france/parfume.jpg",
    ],
    [
      "If you are doing one of our tours of Normandy and are interested in regional gastronomy, we highly recommend spending a day driving along the Normandy cider route.",
      "img/countries-info/souvenirs/france/cidre.jpg",
    ],
    [
      "Arnaud Larher makes some of the best macarons in France, in our view. In 2007, Arnaud was named the Best Pastry Chef in France. He has shops in the Montmartre and Saint Germain des Prés districts in Paris, and sells beautiful gift boxes, which are also available to purchase online.",
      "img/countries-info/souvenirs/france/macarons.jpg",
    ],
  ],
  GermanySouvenirs = [
    [
      "There is just something about German chocolates that I think are far superior to chocolate back in the US! This makes for fantastic Germany gifts to give to others.",
      "img/countries-info/souvenirs/germany/choclate.jpg",
    ],
    [
      "While the Bier Stein originally was a very real and authentic item used by Germans, today, what you are most likely to find in terms of Steins are made purely for tourists but they can still be some of the best souvenirs from Germany!",
      "img/countries-info/souvenirs/germany/beerstains.jpg",
    ],
    [
      "You are in the land of Beer Heaven after all!  However, you can not ship German beer through the mail, which means that whatever you buy will have to be packed into your suitcase to bring home. But honestly, this is one of the best things to buy in Germany to take back (either for yourself to enjoy later or to give to others)",
      "img/countries-info/souvenirs/germany/beer.jpg",
    ],
  ],
  HungarySouvenirs = [
    [
      "Tokaji Aszu is undoubtedly the most famous of all the Hungarian wines, holding a very high place among the dessert wines in the world.",
      "img/countries-info/souvenirs/hungary/Tokaji-Aszu.jpg",
    ],
    [
      "Paprika is one of the world’s most popular spices, equally loved in Hungary, its country of origin, and all throughout the world. Although you can order it online, or even buy it in some stores in Europe or the U.S., the best source is of course its homeland.",
      "img/countries-info/souvenirs/hungary/Paprika.jpg",
    ],
    [
      "The amber-tinted liquid is it’s a herbal liqueur is made of a secret blend of more than 40 herbs and spices aged in oak. The taste is bittersweet, with subtle piney and eucalyptus notes. The first time you drink it you might not even enjoy it, but when the other flavors start developing in your mouth you begin to like it.",
      "img/countries-info/souvenirs/hungary/Unicum.jpg",
    ],
  ],
  countrySouvenirs = [
    AlbaniaSouvenirs,
    AndorraSouvenirs,
    AustriaSouvenirs,
    BelarusSouvenirs,
    BelgiumSouvenirs,
    FranceSouvenirs,
    GermanySouvenirs,
    HungarySouvenirs,
  ];
let countryInfo = document.querySelector(".country-info"),
  selectCountryInfo = document.querySelector("#country-info-select"),
  countriesList = document.querySelector(".country-info-list"),
  countriesItems = document.querySelectorAll(".country-info-item"),
  countriesLinks = document.querySelectorAll(".country-info-link");

if (mainContentTabs[1]) {
  countriesLinks[0].classList.add("active");
}

function getCountryInfo(i) {
  let country = {
    name: names[i],
    flag: flags[i],
    countryBG: countriesBGs[i],
    language: languages[i],
    population: populations[i],
    city: cities[i],
    wellKnown: wellKnowns[i],
    currency: currencies[i],
    history: histories[i],
    POI: [countriesPOIs[i].length, countriesPOIs[i]],
    souvenirs: [countrySouvenirs[i].length, countrySouvenirs[i]],
  };
  let countryInfoBlock = document.createElement("div");
  countryInfoBlock.classList.add(
    "country-info-block",
    "row",
    "d-flex",
    "flex-wrap",
    "justify-content-around",
    "mb-3",
    "p-lg-3"
  );
  countryInfoBlock.innerHTML = `<div class="country-name col-slide col-slide-right col-11 shadow-lg  text-center  my-3 ">
        <img src="${country.countryBG}" class="card-img" alt="${country.name}">
       <div class="card-img-overlay">
         <p class="country-title card-title p-3">${country.name}</p>
         <img class="country-flag d-none d-md-block d-lg-block shadow-lg  mx-auto" src="${country.flag}" style="width:180px;height:auto;" alt="${country.name}">
      </div>
    </div>
    <div class="country-info-block-item col-slide col-slide-right col-12 d-md-none d-lg-none my-2 shadow-lg text-center mb-3">
      <img class="country-flag  shadow-lg my-3" src="${country.flag}" style="max-width:260px;height:auto;"  alt="${country.name}">
    </div>
    <div class="country-info-block-item col-slide col-slide-right col-12 col-md-5 col-lg-5 p-2 my-2 mb-3">
      <div class="short-history ">
           <div class="short-history-title text-white mx-auto my-4 p-1 pt-2 bg-secondary text-capitalize col-12 border-bottom border-1">
                <p class="h3 block-title p-2 te2 pt-3t-center ">
                History in brief
                </p>
            </div>
        <p class="fs-5 short-history-text p-1 text-justify">${country.history}</p>
      </div>
    </div>
      <div class="country-info-block-item col-slide col-slide-left col-12 col-md-5 col-lg-5 p-2  my-2 mb-3">
        <div class="country-basic-info-list p-1">
            <div class="country-basic-info-title text-white mx-auto my-4 p-1 pt-2 bg-secondary text-capitalize col-12 border-bottom border-1">
                <p class="h3 block-title p-2 te2 pt-3t-center ">
                Basic Info
                </p>
            </div>
            <div class="country-basic-info-item">
            <p class="fs-5  population">Population: <small class="text-white">${country.population}</small></p>
            </div>
            <div class="country-basic-info-item">
              <p class="fs-5  language">Language: <small class="text-white">${country.language}</small></p>
            </div>
            <div class="country-basic-info-item">
              <p class="fs-5  main-cities">Main cities: <small class="text-white">${country.city}</small></p>
            </div>
            <div class="country-basic-info-item">
              <p class="fs-5  well-known">Well-known people: <small class="text-white">${country.wellKnown}</small></p>
            </div>
            <div class="country-basic-info-item">
              <p class="fs-5  currency">Currency: <small class="text-white">${country.currency}</small></p>
            </div>
          </div>
      </div>
    
    <div class="country-info-block-item col-12 col-md-11 col-lg-5 p-2  my-2 mb-3">
    <div class="places-of-interest-list  d-flex flex-row flex-wrap justify-content-around">
            <div class="places-of-interest-title text-white m-0 my-4 p-1 pt-2 bg-secondary text-capitalize col-12 border-bottom border-1">
                <p class="h3 block-title p-2 te2 pt-3t-center ">
                Places Of Interest:
                </p>
            </div>
    </div>
    </div>
    <div class="country-info-block-item col-12 col-md-11 col-lg-5 p-2  my-2 mb-3">
    <div class="souvenirs-list  d-flex flex-row flex-wrap justify-content-around">
           <div class="souvenir-title text-white m-0 my-4 p-1 pt-2 bg-secondary text-capitalize col-12 border-bottom border-1">
                <p class="h3 block-title  p-2 t2 pt-3xt-center ">
                Souvenirs:
                </p>
            </div>
    </div>
    </div>
    <div class="country-info-block-item col-12 col-md-11 my-2">
    <div class="country-tours-list row flex-wrap justify-content-around ">
           <div class="country-tour-title text-white m-0 my-4 p-1 pt-2 bg-secondary text-capitalize col-12 border-bottom border-1">
                <p class="h3 block-title p-2  t2 pt-3xt-center ">
                country-tours:
                </p>
            </div>
    </div>
    </div>
    </div>
    `;
  countryInfo.append(countryInfoBlock);
  let POIList = document.querySelector(".places-of-interest-list"),
    souvenirs = document.querySelector(".souvenirs-list"),
    countryToursList = document.querySelector(".country-tours-list");
  function getInfoBlockItems(infoBlocksList, num) {
    for (let j = 0; j < num[0]; j++) {
      let infoBlock = document.createElement("div");
      infoBlock.classList.add("mb-3");
      infoBlock.innerHTML = `<div class="card bg-dark content p-2  h-100">
        <img src="${num[1][j][1]}" class="card-img mx-auto" style="max-width:320px;height:auto;" alt="#">
        <p class="card-text lh-2 my-3 fs-5 p-2">
            ${num[1][j][0]}
        </p>
      </div>`;
      if (j % 2 != 0) {
        infoBlock.classList.add(
          "col-12",
          "mx-auto",
          "col-slide",
          "col-slide-left"
        );
      } else {
        infoBlock.classList.add(
          "col-12",
          "mx-auto",
          "col-slide",
          "col-slide-right"
        );
      }
      infoBlocksList.append(infoBlock);
    }
  }
  getInfoBlockItems(POIList, country.POI);
  getInfoBlockItems(souvenirs, country.souvenirs);
  let countryInfoSections = countryInfo.querySelectorAll(".col-slide");
  countryInfoSections.forEach((countryInfoSection, j) => {
    if (countryInfoSection.classList.contains("col-slide")) {
      let delay = `${j * 2}00`;
      /* countryInfoSection.style.cssText=`box-shadow:0px 0px 0px 5px  rgba(0,0,0,1);
        background-color:rgba(255,255,255,0.2);`; */
      setTimeout(function () {
        countryInfoSection.classList.add("shown");
      }, delay);
    }
  });
  function getCountryTours() {
    tourListLinks.forEach((tourListLink, j) => {
      if (country.name == tourListLink.dataset.destination) {
        let infoBlock = document.createElement("div");
        infoBlock.classList.add("mb-3");
        infoBlock = tourListItems[j];
        console.log(infoBlock);
        if (j % 2 != 0) {
          infoBlock.classList.remove("col-11", "col-md-3", "col-lg-3");
          infoBlock.classList.add("col-12", "col-md-10", "col-lg-4");
        } else {
          infoBlock.classList.remove("col-11", "col-md-3", "col-lg-3");
          infoBlock.classList.add("col-12", "col-md-10", "col-lg-4");
        }
        countryToursList.append(infoBlock);
      }
    });
  }
  getCountryTours();
}
selectCountryInfo.addEventListener("click", (event) => {
  let target = event.target;
  countryInfo.innerHTML = "";
  console.log(target.selectedIndex);
  getCountryInfo(target.selectedIndex);
});
selectCountryInfo.addEventListener("touchstart", (event) => {
  let target = event.target;
  countryInfo.innerHTML = "";
  console.log(target.selectedIndex);
  getCountryInfo(target.selectedIndex);
});
getCountryInfo(0);

countriesList.addEventListener("click", (event) => {
  let target = event.target;
  countryInfo.innerHTML = "";
  countriesLinks.forEach((countriesLink, i) => {
    countriesLink.classList.remove("active");
    if (target == countriesLink) {
      countriesLinks[i].classList.add("active");
      getCountryInfo(i);
    }
  });
});
countriesList.addEventListener("touchstart", (event) => {
  let target = event.target;
  countryInfo.innerHTML = "";
  countriesLinks.forEach((countriesLink, i) => {
    countriesLink.classList.remove("active");
    if (target == countriesLink) {
      countriesLinks[i].classList.add("active");
      getCountryInfo(i);
    }
  });
});

//Col-slide
/* let colSlides = document.querySelectorAll(".col-slide");
window.addEventListener("scroll", checkCols);
checkCols();
function checkCols() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  colSlides.forEach((colSlide) => {
    const colSlideTop = colSlide.getBoundingClientRect().top;
    if (colSlideTop < triggerBottom) {
      colSlide.classList.add("shown");
    } 
  });
} */
