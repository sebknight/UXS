// Call this function when the document is ready
$(document).ready(function () {

//  var items = ["#menu-item_olives"];

// Toggle cart visibility
  $('#order').click(function () {
    $('#cart').toggleClass('is-visible');
    $('#utensils').toggleClass('is-active');

  });

  //Toggle call staff
  $('#call-staff').click(function (){
    $('#staff').toggleClass('is-visible');
    $('#bell').toggleClass('is-active');
  });

  $('.btn').click(function (){
    $('.btn').toggleClass('is-visible');
    $('.btn').toggleClass('is-active');
  });



  //Change language
  // $('#language').click(function (){
  //   $('#language').toggle(function(){
  //     $('#language').text('MĀO')
  //     .stop();
  //   });
  // });

  $("#language").click(function (){
        $("#language").text('MĀO');
        $("#language").toggleClass('is-active');
  });

  $('#almonds').click(function (){
    $('#almonds-open').toggleClass('is-visible');
  })
}); //doc.ready function ENDS

  // $('#menu').click(function () {
  //     $('#category-1-header').toggleClass('is-open');
  //
  // });
  //
  // // Add a click listener to the element matching selector #category-1-header
  // $('#category-1-header').click(function () {
  //
  //   // Toggle the class `is-open` on the element matching selector `#subcategory-1-body
  //   $('#subcategory-1-header').toggleClass('is-open');
  // });
  //
  // $('#subcategory-1-header').click(function () {
  //
  //   $('#subcategory-1-body').toggleClass('is-open');
  // });
  //
  // $('#subcategory-2-header').click(function () {
  //
  //   $('#subcategory-2-body').toggleClass('is-open');
  // });
  //
  // $('#subcategory-3-header').click(function () {
  //
  //   $('#subcategory-3-body').toggleClass('is-open');
  // });

// Add to cart example
//$('#menu-item_olives').click(function () {
  // Add an object to cart array
/*  cart.push({
    name: "Olives",
    price: "$5.00",
  });
}); */
