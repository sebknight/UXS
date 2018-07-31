// Call this function when the document is ready
$(document).ready(function () {
  //Navigation item buttons
  // Toggle cart visibility
  $('.navigation__item--cart').click(function () {
      $('.dropdown__cart').toggle();
      $('.navigation__item--cart').toggleClass('is-active');
  });
  //Closes cart when menu item is added to order
  $('.button--confirm').click(function (){
    $('.dropdown__cart').toggle();
    $('.navigation__item--cart').removeClass('is-active')
    $('.dropdown__cart--confirm').toggle();
    $('.dropdown__timer').toggle();
  });

  $('.button--cancel').click(function (){
    $('.dropdown__timer').toggle();
    $('.dropdown__cart--confirm').toggle();
  });

// Toggle call staff button
  $('.navigation__item--bell').click(function () {
    $('.dropdown__help').toggle();
    $('.navigation__item--bell').toggleClass('is-active');
  }); // toggle call staff button ENDS


// Toggle language
  $('.navigation__item--language').click(function (){
    $(this).text($(this).text() == 'Te Reo Māori' ? 'English' : 'Te Reo Māori');
  });  // toggle language ENDS

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
