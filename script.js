
$(document).ready(function(){

    $.getJSON('data.json', function(json) {
        // random meal
        const meal = json[Math.floor(Math.random() * json.length)];
        console.log(meal);

        
    });
  
  }); 