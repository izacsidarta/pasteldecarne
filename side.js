$("#inscrever").submit(function(evt) {
  evt.preventDefault();
  
  $("#inscrever").hide();
  $("#obrigado").show();
})

$("#reset").click(function(evt) {
  evt.preventDefault();
  
  $("#inscrever").show();
  $("#obrigado").hide();
})
$("#submit").click( function(){
  alert("Obrigado pela inscrição!");
})