const slidesTestimonials = document.querySelectorAll(
  ".testimonial-content-inner"
);
const dots = document.querySelectorAll(".dot");

/////////////////////////////////////////
//*********** Testimonials  ***********
/////////////////////////////////////////

const goToSlide = (slideIndex) => {
  slidesTestimonials.forEach((slide, index) => {
    slide.style.transform = `translateY(${100 * (index - slideIndex)}%)`;
    dots.forEach((dot) => {
      dot.classList.remove("active-dot");
    });

    const activeDot = dots[slideIndex];
    activeDot.classList.add("active-dot");
  });
};
goToSlide(1);

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = Array.from(dots).indexOf(e.target);
    goToSlide(index);
  });
});
