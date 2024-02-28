const hamburger = document.querySelectorAll(".hamburger");

const navUl = document.querySelector(".mobile-ul");
console.log(navUl);
const menuCross = document.querySelector(".mobile-ul i");
const main = document.querySelector(".Top-window");
console.log(main);

hamburger.forEach(e =>{
  e.addEventListener("click", () => {
  navUl.classList.add("show");
});
})

menuCross.addEventListener("click", () => {
  navUl.classList.remove("show");
});

// mobileLi.forEach(e =>{
//   e.addEventListener("click",()=>{
//   navUl.classList.remove("show");

//   if(e.classList.contains("mbl-home")){
//     nav.scrollIntoView({behavior : 'smooth'});
//   }
//   })
// })

const anchorTags = document.querySelectorAll(".logos-names a");

anchorTags.forEach((tags) => {
  tags.addEventListener("click", () => {
    tags.classList.add("active");
    setTimeout(() => {
      tags.classList.remove("active");
    }, 5000);
  });
});

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

const homePage = document.querySelector(".nav-left-a");
const nav = document.querySelector("nav");
const stickyNav = document.querySelector(".sticky");

homePage.addEventListener("click", () => {
  main.scrollIntoView({ behavior: "smooth" });
  console.log("HELLO");
  console.log(nav);
});

const pcLi = document.querySelectorAll(".pc-li");
const mobileLi = document.querySelectorAll(".mobile-li");
// console.log(mobileLi)

const aboutMe = document.querySelector(".about-me-text");
const skills = document.querySelector(".skills");
const PortFolio = document.querySelector(".PortFolio");
const services = document.querySelector(".services");
const contactUs = document.querySelector("footer");

pcLi.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("pc-home")) {
      main.scrollIntoView({ behavior: "smooth" });
    }
    if (e.classList.contains("pc-about")) {
      aboutMe.scrollIntoView({ behavior: "smooth" });
    }
    if (e.classList.contains("pc-skills")) {
      skills.scrollIntoView({ behavior: "smooth" });
    }
    if (e.classList.contains("pc-portfolio")) {
      PortFolio.scrollIntoView({ behavior: "smooth" });
    }
    if (e.classList.contains("pc-services")) {
      services.scrollIntoView({ behavior: "smooth" });
    }
    if (e.classList.contains("pc-contact")) {
      contactUs.scrollIntoView({ behavior: "smooth" });
    }
  });
});

mobileLi.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("mbl-home")) {
      main.scrollIntoView({ behavior: "smooth" });
      navUl.classList.remove("show");
      console.log(nav);
    }
    if (e.classList.contains("mbl-about")) {
      aboutMe.scrollIntoView({ behavior: "smooth" });
      navUl.classList.remove("show");
    }
    if (e.classList.contains("mbl-skills")) {
      skills.scrollIntoView({ behavior: "smooth" });
      navUl.classList.remove("show");
    }
    if (e.classList.contains("mbl-portfolio")) {
      PortFolio.scrollIntoView({ behavior: "smooth" });
      navUl.classList.remove("show");
    }
    if (e.classList.contains("mbl-services")) {
      services.scrollIntoView({ behavior: "smooth" });
      navUl.classList.remove("show");
    }
    if (e.classList.contains("mbl-contact")) {
      contactUs.scrollIntoView({ behavior: "smooth" });
      navUl.classList.remove("show");
    }
  });
});

// Animations

const adobePhotoshop = document.querySelector(".Adobe-Photoshop");
const photography = document.querySelector(".Photography");
const adobeIllustrator = document.querySelector(".Adobe-Illustrator");
const adobePremierePro = document.querySelector(".Adobe-Premiere-Pro");
const adobeAfterEffect = document.querySelector(".Adobe-After-Effects");
const adobeXD = document.querySelector(".Adobe-XD");
const adobe3DsMax = document.querySelector(".Autodesk-3ds-Max");
const cinema4D = document.querySelector(".Cinema-4D");

const authorPicBg = document.querySelector(".author-pic-bg");
const authorPicImg = document.querySelector(".author-pic img");

let flag = false;
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 820) {
    adobePhotoshop.style.animation = "adobePhotoshop 2s ease-in-out";
    photography.style.animation = "Photography 2s ease-in-out";
    adobeIllustrator.style.animation = "Adobe-Illustrator 2.5s ease-in-out";
    adobePremierePro.style.animation = "Adobe-Premiere-Pro 2s ease-in-out";
    adobeAfterEffect.style.animation = "Adobe-After-Effects 2s ease-in-out";
    adobe3DsMax.style.animation = "Autodesk-3ds-Max 2s ease-in-out";
    adobeXD.style.animation = "Adobe-XD 2s ease-in-out";
    cinema4D.style.animation = "Cinema-4D 2s ease-in-out";
    flag = true;
    console.log(window.pageYOffset);
  } else {
    adobePhotoshop.style.animation = "none";
    photography.style.animation = "none";
    adobeIllustrator.style.animation = "none";
    adobePremierePro.style.animation = "none";
    adobeAfterEffect.style.animation = "none";
    adobe3DsMax.style.animation = "none";
    adobeXD.style.animation = "none";
    cinema4D.style.animation = "none";
    flag = false;
  }

  if(window.pageYOffset > 150){
    authorPicBg.style.animation = "author-pic-bg 1s ease-in-out";
    authorPicImg.style.animation = "author-pic-img 1s ease-in-out 0s";
    authorPicBg.style.animationFillMode =  'forwards';
    authorPicImg.style.animationFillMode =  'forwards';
    }
  else{
    authorPicBg.style.animation = "none";
    authorPicImg.style.animation = "none";
  }
});

const theStickyNav = document.querySelector(".stickyNav");
const mobileStickyNav = document.querySelector(".mobile-sticky-nav");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 101) {
    theStickyNav.classList.add("show");
  } else {
    theStickyNav.classList.remove("show");
  }

  if (window.pageYOffset > 92) {
    mobileStickyNav.classList.add("show");
  } else {
    mobileStickyNav.classList.remove("show");
  }
});

console.log(window.pageYOffset); //101
