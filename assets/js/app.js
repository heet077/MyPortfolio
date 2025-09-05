//Getting dom elements
let mouseCursor = document.querySelector(".cursor-effect");
let ctaLinks = document.querySelectorAll(
  ".about-content a, .footer-links a, .more-about a"
);
let projectLinks = document.querySelectorAll(".project-box__link a ion-icon");
let resumeDownloadLinks = document.querySelectorAll(".resume-download, .header-resume-btn");
console.log(projectLinks);

//  Mouse effect
window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

ctaLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});

projectLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
});

// Resume download functionality
resumeDownloadLinks.forEach((link) => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    
    // Add download animation
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
    
    // Try to download PDF first, fallback to HTML
    const pdfUrl = "./assets/resume/Flutter_Resume.pdf";
    const htmlUrl = "./assets/resume/Heet_Jivani_Resume.html";
    
    // Create a temporary link to trigger download
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = "Resume_Heet Jivani.pdf";
    
    // Add error handling for PDF download
    downloadLink.onerror = function() {
      console.log("PDF download failed, opening HTML version");
      window.open(htmlUrl, '_blank');
    };
    
    // Add success handling
    downloadLink.onload = function() {
      console.log("Resume download successful");
    };
    
    // Trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Optional: Track download (you can add analytics here)
    console.log("Resume download initiated");
  });
  
  // Add mouse effects for resume links
  link.addEventListener("mouseover", () => {
    if (mouseCursor) {
      mouseCursor.classList.add("link-grow");
    }
  });
  link.addEventListener("mouseleave", () => {
    if (mouseCursor) {
      mouseCursor.classList.remove("link-grow");
    }
  });
});

//GSAP animations
function fadeOut() {
  TweenMax.to(".intro-btn", 1, {
    opacity: 0,
    y: -100,
  });
  TweenMax.to(".text", 1, {
    y: "-100%",
  });
  TweenMax.to(".slider", 2, {
    y: "-100%",
    delay: 1,
    ease: Expo.easeInOut,
  });
  TweenMax.to(".slider-2", 2, {
    y: "-100%",
    delay: 1.4,
    ease: Power2.easeInOut,
  });
  TweenMax.to(
    ".intro",
    2,
    {
      y: "-100%",
      delay: 2,
      ease: Power2.easeInOut,
    },
    "-=.5"
  );
  TweenMax.to(".content", 2, {
    y: 0,
    ease: Power2.easeInOut,
  });
}
///Timeline
const tl = gsap.timeline({
  defaults: { ease: "power1.out" },
});

tl.to(".text", {
  y: "0%",
  duration: 1,
  stagger: 0.4,
});
tl.from(
  ".services-heading h2",
  {
    y: 300,
    opacity: 0,
    duration: 1,
  },
  "-=1"
);

tl.fromTo(
  ".landing-text h1",
  { opacity: 0 },
  { opacity: 1, duration: 0.5, stagger: 0.5 }
);
tl.fromTo(".landing-text h5", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".effect-1", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".effect-2", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".effect-3", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".effect-4", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".inner", { opacity: 0 }, { opacity: 1, duration: 0.3 }, "-=1");

/////Dark theme toggle
var checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1200);
};
