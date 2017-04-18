$(document).keypress(function(e){

  var time_now = new Date().getTime();
  if (localStorage.getItem(e.which) == null){
    localStorage.setItem(e.which, time_now);
  }else{

    var last_time = parseInt(localStorage.getItem(e.which));
    if (time_now - last_time > 1000){
      $("#input").val($("#input").val() + String.fromCharCode(e.which));
      localStorage.clear();
    }
  }
});

$(document).keyup(function(e){
  localStorage.clear();
});

