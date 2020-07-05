

  // $(function(){
  //   $('.paral').parallax();
  // });

  AOS.init({
    duration: 1500,
  });

$(document).ready(function() {
  $('.accordion__header').click(function() {
      
      $(".accordion__body").not($(this).next()).slideUp(400);
      $(this).next().slideToggle(400);
      
      $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("open-accordion");
      $(this).closest(".accordion__item").toggleClass("open-accordion");
  });
});


// let bg = document.querySelectorAll('.paral')[1];
// window.addEventListener('mousemove', function(e) {
//     let x = e.clientX / window.innerWidth;
//     let y = e.clientY / window.innerHeight;  
//     bg.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
// });


// console.log(bg);
