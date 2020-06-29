
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
$(function() {
  $('.acc__title').click(function(j) {
    
    var dropDown = $(this).closest('.acc__card').find('.acc__panel');
    $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.acc').find('.acc__title.active').removeClass('active');
      $(this).addClass('active');
    }
    
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});


