
// let arrow = document.querySelector('.question-card__img'),
//     text = document.querySelector('.question-card__text');

// arrow.addEventListener('click', function() {
//   arrow.classList.toggle('question-card__img-active');
// });
// arrow.addEventListener('click', function() {
//   text.classList.toggle('question-card__text-active');
// });
// console.log(text);

// $(document).ready(function() {

//   $('.acordion-item__trigger').click(function() {
//     $(this).parent('.acordion-item').toggleClass('acordion-item-active');
//   });

// });










/* jQuery
================================================== */
// $(function() {
//   $('.acc__title').click(function(j) {
    
//     var dropDown = $(this).closest('.acc__card').find('.acc__panel');
//     $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
//     if ($(this).hasClass('active')) {
//       $(this).removeClass('active');
//     } else {
//       $(this).closest('.acc').find('.acc__title.active').removeClass('active');
//       $(this).addClass('active');
//     }
    
//     dropDown.stop(false, true).slideToggle();
//     j.preventDefault();
//   });
// });




$(document).ready(function() {
  $('.accordion__header').click(function() {
      
      $(".accordion__body").not($(this).next()).slideUp(400);
      $(this).next().slideToggle(400);
      
      $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("open-accordion");
      $(this).closest(".accordion__item").toggleClass("open-accordion");
  });
});


let bg = document.querySelector('.profit__union-l');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
});


