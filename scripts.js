const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("active");
});

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // IntersectionObserver za vlastite animacije
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animiraj samo jednom
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  // Ako koristiš AOS, možeš ovako inicijalizirati:
  if (window.AOS) {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
});
