// Call this function when the document is ready
$(document).ready(function () {

// Toggle cart visibility
  $('.navigation__item--cart').click(function () {
      $('.dropdown--cart').toggleClass('is-visible');
      $('.navigation__item--cart').toggleClass('is-active');
  }); // toggle cart ENDS

// Toggle call staff butten
  $('.navigation__item--bell').click(function () {
    $('.dropdown--help').toggleClass('is-visible');
    $('.navigation__item--bell').toggleClass('is-active');
  }); // toggle call staff button ENDS

// Toggle language
  $('.navigation__item--language').click(function (){
    $(this).text($(this).text() == 'MĀO' ? 'ENG' : 'MĀO');
  }); // toggle language ENDS

// Toggle menu item dropdown
  $('.menu-item').click(function (){
    $('.dropdown--menu-item').addClass('is-visible');
  }); // toggle menu item dropdown ENDS

    $('.button--order').click(function (){
      $('.dropdown--menu-item').removeClass('is-visible');
    }); // toggle menu item dropdown ENDS

//Adjust number of items
  $('.button--plus').click(function(){
      var counter = parseInt($('.item-number__value').val());
      counter++;
      $('.item-number__value').val(counter);
      $('.item-number').text(counter);
  });
    $('.button--minus').click(function(){
        var counter = parseInt($('.item-number__value').val());
        counter--;
              $('.item-number__value').val(counter);
              if ($('.item-number__value').val!=0) {
              $('.item-number').text(counter);
        }
        });
   //Adjust number of items ENDS


}); //script ENDS



//
//
// $(".btn__add").click(function(){
//     var counter = parseInt($("#hiddenVal").val());
//     counter++;
//     $("#hiddenVal").val(counter);
//     $("#theCount").text(counter);
// });

//doc.ready function ENDS
