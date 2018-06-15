// Call this function when the document is ready
$(document).ready(function () {

// // Toggle cart visibility
  $('.navigation__item--cart').click(function () {
      $('.dropdown__cart').toggleClass('is-visible');
      $('.navigation__item--cart').toggleClass('is-active');
  }); // toggle cart ENDS

// Toggle call staff button
  $('.navigation__item--bell').click(function () {
    $('.dropdown__help').toggleClass('is-visible');
    $('.navigation__item--bell').toggleClass('is-active');
  }); // toggle call staff button ENDS

  $('.button--confirm').click(function (){
    $('.dropdown__timer').toggleClass('is-visible');
    $('.navigation__item--timer').show();
  })


// Toggle language
  $('.navigation__item--language').click(function (){
    $(this).text($(this).text() == 'MĀO' ? 'ENG' : 'MĀO');
  }); // toggle language ENDS

// Toggle menu item dropdown
   $('.button--order').click(function (event){
             event.stopPropagation();
               // $('.dropdown__menu-item').next().hide();
             $('.dropdown__menu-item').hide();
    });

    $('.item-name').click(function () {
      $(this).next().toggle();
    });


//Adjust number of items
    $('.button--minus').click(function(){
        var counter = parseInt($('.item-number__value').val());
        counter--;
        $('.item-number').text(counter);
        // prevent value going below 0
          if (counter > 0){
            $('.item-number__value').val(counter); }
            $('.item-number').text(counter);
    });

  $('.button--plus').click(function(){
      var counter = parseInt($('.item-number__value').val());
      counter++;
      $('.item-number').text(counter);
      $('.item-number__value').val(counter);
  });


// Adjust number of items ENDS



}); //doc.ready function ENDS
