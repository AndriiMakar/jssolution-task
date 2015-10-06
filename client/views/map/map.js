Template.map.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(50.447134, 30.533828),
                zoom: 8
            };
        }
    }
});

Template.map.events({
	  "submit #find": function (e, tmpl) {
    e.preventDefault();
    if(Meteor.userId()===null) {
      alert('Please, login!');
      return;
    }
    var venues;
  
    var query = Query();

    Template.map.onRendered(function(){
      Session.set('venues', null);
    });

Meteor.call('foursquareRequest', query, function (err, result) {
          venues = result;

          setMarkers();
         
           
        });

function setMarkers () {
        for (var i = 0; i < venues.length; i++) {
           
          var venue = venues[i];
           var markers = [];
          markers[i] = new google.maps.Marker({
            position: new google.maps.LatLng(venue.location.lat, venue.location.lng),
            title: venues[i].name,
            map: map
            
          });

        };
       Session.set('venues', venues);
      }

}
});
