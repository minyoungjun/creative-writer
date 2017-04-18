$(document).ready(function(){

	$("#input").focus();

});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function content_added(){
	await sleep(8000);
	var str = $("#input").val();
	var choped = str.slice(1, str.length);
	$("#input").val(choped);
}

$("#input").keydown(function(e){
	if (e.which === 8){
   e.preventDefault();
	}else{
		content_added();
	}
});
