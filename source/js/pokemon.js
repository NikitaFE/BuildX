$( document ).ready(function() {
  $.getJSON('https://pokeapi.co/api/v2/pokemon').done(function(data) {
    for (var i = 0; i < 10; i++) {
      console.log(data.results[i]);
    }
  }).fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ', ' + error;
    console.log('Request Failed: ' + err);
  });
});
