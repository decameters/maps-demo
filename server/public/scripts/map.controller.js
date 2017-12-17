app.controller('MapController', function (MapService){
    console.log('MapController loaded!');

    var self = this;

    self.message = MapService.message;
    
})