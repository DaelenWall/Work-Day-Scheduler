$(document).ready(function () {

  // Saving user inputed events to local storage and 
  $('.saveBtn').click(function () {
    var eventText = $(this).siblings('.description').val();
    localStorage.setItem($(this).parent().attr('id'), eventText);
  })
});

// Get user input from localStorage and set description values
$('.time-block').each(function () {
  var hour = $(this).attr('id');
  $('#' + hour).find('.description').val(localStorage.getItem(hour));

  // Parsing current time
  // var currentTime = parseInt(dayjs().format('H'));

});

