// Call this function when the document is ready
$(document).ready(function () {

// // Toggle cart visibility
  $('.navigation__item--cart').click(function () {
      // $('.dropdown__cart').toggleClass('is-visible');
      $('.dropdown__cart').toggle();

      $('.navigation__item--cart').toggleClass('is-active');
  }); // toggle cart ENDS

      $('.button--confirm').click(function (){
        $('.dropdown__cart').toggle();
        $('.navigation__item--cart').removeClass('is-active')
        $('.dropdown__cart--confirm').toggle();
        $('.dropdown__timer').toggle();

      });

      $('.button--cancel').click(function (){
        // $('.dropdown__timer').removeClass('is-visible');
        // $('.dropdown__cart--confirm').removeClass('is-visible');
        $('.dropdown__timer').toggle();
        $('.dropdown__cart--confirm').toggle();

      });


// Toggle call staff button
  $('.navigation__item--bell').click(function () {
    // $('.dropdown__help').toggleClass('is-visible');
    $('.dropdown__help').toggle();
    $('.navigation__item--bell').toggleClass('is-active');
  }); // toggle call staff button ENDS


// Toggle language
  $('.navigation__item--language').click(function (){
    $(this).text($(this).text() == 'MĀO' ? 'ENG' : 'MĀO');
  });
  // $('.navigation__item--big--language').click(function (){
  //   $(this).text($(this).text() == 'Te Reo Maori' ? 'English' : 'Te Reo Maori');
  // });  // toggle language ENDS

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
$('.button--plus').click(function(){
  var counter =
  parseInt($('.item-number__value').val());
  counter++;
  $('.item-number').text(counter);
  $('.item-number__value').val(counter);
});

$('.button--minus').click(function(){
    var counter = parseInt($('.item-number__value').val());
    if (counter > 0) {
    counter--;
    $('.item-number__value').text(counter);
      $('.item-number').text(counter);
      $('.item-number__value').val(counter);}
});

// Adjust number of items ENDS



}); //doc.ready function ENDS
