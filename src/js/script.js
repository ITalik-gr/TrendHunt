


$(document).ready(function() {
  $('.accordion__header').click(function() {
      
      $(".accordion__body").not($(this).next()).slideUp(400);
      $(this).next().slideToggle(400);
      
      $(".accordion__item").not($(this).closest(".accordion__item")).removeClass("open-accordion");
      $(this).closest(".accordion__item").toggleClass("open-accordion");
  });
});

  // AOS.init({
  //   duration: 1000,
  // });

  // Отправка данных на сервер
function send(event, php){
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
    json = JSON.parse(this.response); // Ебанный internet explorer 11
        console.log(json);
          
        // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
        if (json.result == "success") {
          // Если сообщение отправлено
          alert("Сообщение отправлено");
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
      // Если не удалось связаться с php файлом
      } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
  
  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function() {alert("Ошибка отправки запроса");};
  req.send(new FormData(event.target));
  }