// Call this function when the document is ready
$(document).ready(function () {

  // Add a click listener to the element matching selector #category-1-header
  $('#category-1-header').click(function () {

    // Toggle the class `is-open` on the element matching selector `#category-1-body
    $('#category-1-body').toggleClass('is-open');
  });
});