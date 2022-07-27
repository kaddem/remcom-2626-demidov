$(document).ready(function(){

  let isOpen = false;

  $('.js-header-burger').on('click', function(){

    // if (isOpen) {
    //   $('.js-menu').slideUp();
    //   isOpen = false;

    //   return;
    // }

    // $('.js-menu').slideDown();
    // isOpen = true;

    $('.js-menu').slideToggle();

  });

  // Табы в контактах

  $('.js-tabs-link').on('click', function() {
    $('.js-tabs-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.js-tabs-link');

    $('.js-tabs-content').removeClass('active');
    $('.js-tabs-content').eq(index).addClass('active');
  });


  // Фильтр в работах
  $('.js-filter-link').on('click', function(){
    let filter = $(this).data('filter');

    if (filter === 'all') {
      $('.js-works-item').show();

      return;
    }

    $('.js-works-item').each(function(){
      let type = $(this).data('type');

      if (filter === type) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

});
