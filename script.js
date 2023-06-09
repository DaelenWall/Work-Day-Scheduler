$(document).ready(function () {

  // Saving user inputed events to local storage and 
  $('.saveBtn').click(function () {
    var eventText = $(this).siblings('.description').val();
    localStorage.setItem($(this).parent().attr('id'), eventText);
  })
})

// Get user input from localStorage and set description values
$('.time-block').each(function () {
  var hour = $(this).attr('id');
  $('#' + hour).find('.description').val(localStorage.getItem(hour));
//---------------------------------------------------------------------------------------//

  // Parsing current time
  var currentTime = parseInt(dayjs().format('H'));

  // Displaying liveTime
  function liveTime() {
    $('#currentDay').text(dayjs().format(`dddd, MMM D, YYYY, h:mm:ss a`));
    setInterval(liveTime, 1000)
  }
  liveTime();
// -------------------------------------------------------------------------------------//

  // Checking currentTime and updating the color of time-block accordingly
  if (hour < currentTime) {
    $(this).addClass('past');
  } else if (hour > currentTime) {
    $(this).addClass('future');
  } else {
    $(this).addClass('present');
  }
});