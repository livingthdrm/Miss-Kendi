$(document).ready(function(){
    /*sticky navigation*/
    $('.js--section-scroll').waypoint(function(direction){
        if (direction == 'down'){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '-25%'
    });
    
    /*
    
    

var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
    }, {
      offset: '25%'
    })

*/
});

