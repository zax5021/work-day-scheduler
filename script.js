// @ts-check
var hourNow= (moment().format("H"))-9;
var timeDisplayEl= document.getElementById("currentDay");
var hourBlock= $(".container").children("div");
var saveBtn = $('.saveBtn');




displayTime()
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.textContent=rightNow;
    return rightNow
  };
setInterval(displayTime, 1000);

function formatBlocks() {
    for (var i=0; i < hourBlock.length; i++){
        if (hourNow > i) {
        $(hourBlock[i]).addClass('past')
        } if (hourNow < i) {
        $(hourBlock[i]).addClass('future')
        } if (hourNow === i){
        $(hourBlock[i])
        .addClass('present')
        }
        }}


saveBtn.on('click', function(event) {

  
  var timeBlockEl = $(event.target).closest('.time-block');
  var text = timeBlockEl.children('textarea').val();
  var parentID = timeBlockEl.attr('id');
  localStorage.setItem(parentID,text);
  
})

function renderSchedule() {
  for (var i=0; i < hourBlock.length; i++){
    var storageKey = $(hourBlock[i]).attr('id');
    var value = localStorage.getItem(storageKey);
      $(hourBlock[i]).children('.description').val(value);
    }}
setInterval(formatBlocks, 1000);
  
renderSchedule();
formatBlocks();
